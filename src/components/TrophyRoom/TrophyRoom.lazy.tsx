import React, {JSX, lazy, Suspense} from 'react';

const LazyTrophyRoom = lazy(() => import('./TrophyRoom'));

const TrophyRoom = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTrophyRoom {...props} />
  </Suspense>
);

export default TrophyRoom;
