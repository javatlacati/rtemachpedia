import {FC, useState} from 'react';
import {SongWrapper} from './Song.styled';
import {Lyric} from "../model/Lyric.ts";
import {Card} from "primereact/card";
import {Chord, Interval} from "@tonaljs/tonal";
import {InputNumber, InputNumberValueChangeEvent} from "primereact/inputnumber";
import ReactPlayer from "react-player";

export interface SongProps {
  song: Lyric
}

const Song: FC<SongProps> = ({song}) => {

    const [semitones, setSemitones] = useState(0);

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
                            chord.lines?.map((line, lineIndex) =>
                              (
                                <span key={'line_' + lineIndex}>
                                {' '.repeat(line.spacesBefore)}{Chord.transpose(line.chordName, Interval.fromSemitones(semitones))}</span>
                              ))
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
