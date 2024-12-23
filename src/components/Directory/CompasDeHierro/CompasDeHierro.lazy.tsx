import React, {JSX, lazy, Suspense} from 'react';

const LazyCompasDeHierro = lazy(() => import('./CompasDeHierro'));

const CompasDeHierro = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCompasDeHierro {...props} />
  </Suspense>
);

export default CompasDeHierro;
