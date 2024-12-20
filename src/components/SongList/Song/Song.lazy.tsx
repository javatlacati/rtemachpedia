import { lazy, Suspense } from 'react';

const LazySong = lazy(() => import('./Song'));

const Song = () => (
  <Suspense fallback={null}>
    <LazySong />
  </Suspense>
);

export default Song;
