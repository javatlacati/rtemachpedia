import {FC} from 'react';
import {SongListWrapper} from './SongList.styled';
import {useTemachpediaState} from "../../zustand/store.ts";
import {Link} from "react-router-dom";

const SongList: FC = () => {
  const lyrics = useTemachpediaState((state) => state.lyrics);
  return (
    <SongListWrapper>
      {lyrics.map((song) => (
        <li key={song.id}>
          <Link to={`/lyrics/song/${song.id}`}>{song.title}</Link> -
          {song.authors.join(',')}
          <br/>
        </li>
      ))}
    </SongListWrapper>
  );
};

export default SongList;
