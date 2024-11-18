import React, {FC} from 'react';
import {NaturalKey, PianoKeyboardWrapper, SharpKey} from './PianoKeyboard.styled';

interface PianoKeyboardProps {
}

const PianoKeyboard: FC<PianoKeyboardProps> = () => (
  <PianoKeyboardWrapper>
    <NaturalKey/>
    <SharpKey/>
    <NaturalKey/>
    <SharpKey/>
    <NaturalKey/>
    <NaturalKey/>
    <SharpKey/>
    <NaturalKey/>
    <SharpKey/>
    <NaturalKey/>
    <SharpKey/>
    <NaturalKey/>
  </PianoKeyboardWrapper>
);

export default PianoKeyboard;
