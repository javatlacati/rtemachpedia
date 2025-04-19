import React, {JSX, lazy, Suspense} from 'react';

const LazyWspGroups = lazy(() => import('./WspGroups'));

const WspGroups = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyWspGroups {...props} />
  </Suspense>
);

export default WspGroups;
