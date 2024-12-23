import React, {JSX, lazy, Suspense} from 'react';

const LazyMusicPlatforms = lazy(() => import('./MusicPlatforms'));

const MusicPlatforms = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyMusicPlatforms {...props} />
  </Suspense>
);

export default MusicPlatforms;
