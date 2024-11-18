import {FC, Fragment} from 'react';
import {SongWrapper} from './Song.styled';
import {Lyric} from "../model/Lyric.ts";
import {Card} from "primereact/card";

export interface SongProps {
  song: Lyric
}

const Song: FC<SongProps> = ({song}) => {

    return (
      <SongWrapper>
        <Card header={song?.title}>
          {song?.authors?.join(', ')}
          <br/>
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
                                {' '.repeat(line.spacesBefore)}{line.chordName}</span>
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
