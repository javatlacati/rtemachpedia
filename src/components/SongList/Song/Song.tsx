import {FC, useRef, useState} from 'react';
import {SongWrapper} from './Song.styled';
import {Lyric} from "../model/Lyric.ts";
import {Card} from "primereact/card";
import {Chord as KChord, Interval} from "@tonaljs/tonal";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import ReactPlayer from "react-player";
import PianoKeyboard from "../PianoKeyboard/PianoKeyboard.lazy.tsx";
import {Dropdown} from "primereact/dropdown";
import {Button} from "primereact/button";
import {OverlayPanel} from "primereact/overlaypanel";
import Chord from '@tombatossals/react-chords/lib/Chord';
import Guitar from '@tombatossals/chords-db/lib/guitar.json';

export interface SongProps {
  song: Lyric
}

const Song: FC<SongProps> = ({song}) => {

    const [semitones, setSemitones] = useState(0);
    const [instrumentName, setInstrumentName] = useState(null);
    const op = useRef(null);

    const [activeNotes, setActiveNotes] = useState({});
    const [currentGuitarChord, setCurrentGuitarChord] = useState(null);
    const instruments = [
      {name: 'Piano', value: 'piano'},
      {name: 'Guitar', value: 'guitar'},
    ]

    const myChord = {
      frets: [1, 3, 3, 2, 1, 1],
      fingers: [1, 3, 4, 2, 1, 1],
      barres: [1],
      capo: false,
    }
    const instrument = {
      strings: 6,
      fretsOnChord: 4,
      name: 'Guitar',
      keys: [],
      tunings: {
        standard: ['E', 'A', 'D', 'G', 'B', 'E']
      }
    }

    function mapNotesToActive(transposed: string) {
      return KChord.get(transposed).notes.reduce((accumulator, currentValue) => {
        console.log(currentValue);
        switch (currentValue) {
          case 'C':
            return {...accumulator, c: true};
          case 'C#':
          case 'Db':
            return {...accumulator, cs: true};
          case 'D':
            return {...accumulator, d: true};
          case 'D#':
          case 'Eb':
            return {...accumulator, ds: true};
          case 'E':
            return {...accumulator, e: true};
          case 'F':
            return {...accumulator, f: true};
          case 'F#':
          case 'Gb':
            return {...accumulator, fs: true};
          case 'G':
            return {...accumulator, g: true};
          case 'G#':
          case 'Ab':
            return {...accumulator, fs: true};
          case 'A':
            return {...accumulator, a: true};
          case 'A#':
          case 'Bb':
            return {...accumulator, as: true};
          case 'B':
            return {...accumulator, b: true};
          default:
            return accumulator;
        }
      }, {});
    }

    function mapGuitarChordFromChordName(transposed: string) {
      let [tonic, type] = KChord.tokenize(transposed);
      // console.log(tonic.replace(
      //   "#",
      //   "sharp"
      // ), type.replace("#", "sharp")
      //   .replace("/", "_") || 'major');
      if (transposed.startsWith("G#")) {
        tonic = "A";
        type = type.replace('#', "b");
      }

      const tonicColecction = Guitar.chords[`${tonic.replace(
        "#",
        "sharp"
      )}`] as Array<any>;
      // console.log(JSON.stringify(tonicColecction));
      const targetChord = tonicColecction.find(value => value.suffix === (type.replace("#", "sharp")
        .replace("/", "_") || 'major'))
      //console.log(JSON.stringify(targetChord));
      return targetChord.positions[0]
    }

    return (
      <SongWrapper>
        <Card header={song?.title}>
          {song?.authors?.join(', ')}
          <br/>
          <ReactPlayer url={'https://www.youtube.com/watch?v=' + song?.video?.id} width="100%"/>
          <br/>
          <Card header="Transponer">
            Semitonos: <InputNumber value={semitones} mode="decimal"
                                    onValueChange={(e: InputNumberValueChangeEvent) => setSemitones(e.value || 0)}
                                    showButtons buttonLayout="horizontal" step={1} min={-11} max={11}
                                    decrementButtonClassName="p-button-danger" incrementButtonClassName="p-button-success"
                                    incrementButtonIcon="pi pi-plus" decrementButtonIcon="pi pi-minus"/>
            <Dropdown value={instrumentName} onChange={(e) => setInstrumentName(e.value)} options={instruments}
                      optionLabel="name"
                      className="w-full md:w-14rem"/>
            <br/>
          </Card>
          <br/>
          <br/>
          {
            song?.paragraphs.map((paragraph) =>
              paragraph?.verses.map((verse, verseIndex) =>
                (<>
                  {
                    paragraph?.chords?.map((chord) => (
                        <>
                          {
                            chord.lines?.map((line, lineIndex) => {
                              const transposed = KChord.transpose(line.chordName, Interval.fromSemitones(semitones));
                              return (
                                <span key={'line_' + lineIndex}>
                                {'.'.repeat(line.spacesBefore)}<Button
                                  onClick={(e) => {
                                    if ('piano' === instrumentName)
                                      setActiveNotes(mapNotesToActive(transposed))
                                    if ('guitar' === instrumentName)
                                      setCurrentGuitarChord(mapGuitarChordFromChordName(transposed) || myChord);
                                    if (instrumentName !== null)
                                      op.current?.toggle(e);
                                  }} text>{transposed}</Button>
                                  <OverlayPanel ref={op}>
                                    {'guitar' === instrumentName &&
                                        <Chord instrument={instrument} chord={currentGuitarChord}
                                               lite={false}/>}
                                    {'piano' === instrumentName && <PianoKeyboard
                                        activeNotes={activeNotes}/>}
                                  </OverlayPanel></span>
                              );
                            })
                          }
                        </>
                      )
                    )
                  }
                  <p key={'verse_' + verseIndex}>{verse}</p>
                </>)
              ))
          }
        </Card>
      </SongWrapper>
    );
  }
;

export default Song;
