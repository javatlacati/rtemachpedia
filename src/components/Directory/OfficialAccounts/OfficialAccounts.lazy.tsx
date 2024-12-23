import React, {JSX, lazy, Suspense} from 'react';

const LazyOfficialAccounts = lazy(() => import('./OfficialAccounts'));

const OfficialAccounts = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyOfficialAccounts {...props} />
  </Suspense>
);

export default OfficialAccounts;
