import { lazy, Suspense } from 'react';
import {PianoKeyboardProps} from "./PianoKeyboard.tsx";

const LazyPianoKeyboard = lazy(() => import('./PianoKeyboard'));

const PianoKeyboard = (props: PianoKeyboardProps) => (
  <Suspense fallback={null}>
    <LazyPianoKeyboard {...props} />
  </Suspense>
);

export default PianoKeyboard;
