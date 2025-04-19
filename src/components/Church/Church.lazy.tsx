import React, { lazy, Suspense } from 'react';

const LazyChurch = lazy(() => import('./Church'));

const Church = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyChurch {...props} />
  </Suspense>
);

export default Church;
