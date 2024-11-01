import React, { lazy, Suspense } from 'react';

const LazyFaq = lazy(() => import('./Faq'));

const Faq = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyFaq {...props} />
  </Suspense>
);

export default Faq;
