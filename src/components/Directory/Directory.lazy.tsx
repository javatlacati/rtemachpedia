import React, { lazy, Suspense } from 'react';

const LazyDirectory = lazy(() => import('./Directory'));

const Directory = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyDirectory {...props} />
  </Suspense>
);

export default Directory;
