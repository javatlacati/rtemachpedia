import { lazy, Suspense } from 'react';
import {SongProps} from "./Song.tsx";

const LazySong = lazy(() => import('./Song'));

const Song = (props: SongProps) => (
  <Suspense fallback={null}>
    <LazySong {...props} />
  </Suspense>
);

export default Song;
