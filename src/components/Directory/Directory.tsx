import React, { FC } from 'react';
import {Card} from "primereact/card";
import OfficialAccounts from "./OfficialAccounts/OfficialAccounts.lazy.tsx";
import MusicPlatforms from "./MusicPlatforms/MusicPlatforms.lazy.tsx";


interface DirectoryProps {}

const Directory: FC<DirectoryProps> = () => (
  <Card header="Directorio">
    <OfficialAccounts />
    <MusicPlatforms />
  </Card>
);

export default Directory;
