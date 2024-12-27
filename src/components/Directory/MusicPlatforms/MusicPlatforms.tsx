import {FC} from 'react';
import {Card} from "primereact/card";
import {useTemachpediaStore} from "../../../zustand/store.ts";

const MusicPlatforms: FC = () => {
  const musicPlatforms = useTemachpediaStore((state) => state.musicPlatforms);
  return (
    <Card header="Artistas Alfa"
          subTitle="La música de muchos de estos artistas ha llegado a los en vivo del Temach">
      <ul className="grid grid-cols-2">
        {musicPlatforms.map((platform, index) => (
          <li key={index} className="font-bold p-2">
            <span className="platform.icon"></span> {platform.name}
            {platform.artists.map((artist, index) => (
              <ul key={index}>
                <li className="font-normal">
                  <a
                    href={artist.url}
                    target="_blank"
                    aria-label={`Listen to ${artist.name} on ${platform.name}`}>{artist.name}</a>
                </li>
              </ul>
            ))}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default MusicPlatforms;
