import React, { lazy, Suspense } from 'react';

const LazyPianoKeyboard = lazy(() => import('./PianoKeyboard'));

const PianoKeyboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyPianoKeyboard {...props} />
  </Suspense>
);

export default PianoKeyboard;
