import {FC} from 'react';
import {NaturalKey, PianoKeyboardWrapper, SharpKey} from './PianoKeyboard.styled';

interface ActiveNotes {
  c?: boolean;
  cs?: boolean;
  d?: boolean;
  ds?: boolean;
  e?: boolean;
  f?: boolean;
  fs?: boolean;
  g?: boolean;
  gs?: boolean;
  a?: boolean;
  as?: boolean;
  b?: boolean;
};

export interface PianoKeyboardProps {
  activeNotes: ActiveNotes;
}

const PianoKeyboard: FC<PianoKeyboardProps> = ({activeNotes}) => (
  <PianoKeyboardWrapper>
    <NaturalKey className={activeNotes?.c ? 'active' : ''}/>
    <SharpKey className={activeNotes?.cs ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.d ? 'active' : ''}/>
    <SharpKey className={activeNotes?.ds ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.e ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.f ? 'active' : ''}/>
    <SharpKey className={activeNotes?.fs ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.g ? 'active' : ''}/>
    <SharpKey className={activeNotes?.gs ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.a ? 'active' : ''}/>
    <SharpKey className={activeNotes?.as ? 'active' : ''}/>
    <NaturalKey className={activeNotes?.b ? 'active' : ''}/>
  </PianoKeyboardWrapper>
);

export default PianoKeyboard;
