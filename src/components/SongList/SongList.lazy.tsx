import React, { lazy, Suspense } from 'react';

const LazySongList = lazy(() => import('./SongList'));

const SongList = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazySongList {...props} />
  </Suspense>
);

export default SongList;
