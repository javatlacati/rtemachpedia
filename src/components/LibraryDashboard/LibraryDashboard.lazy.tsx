import React, {JSX, lazy, Suspense} from 'react';

const LazyLibraryDashboard = lazy(() => import('./LibraryDashboard'));

const LibraryDashboard = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLibraryDashboard {...props} />
  </Suspense>
);

export default LibraryDashboard;
