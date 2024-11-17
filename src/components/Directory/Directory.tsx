import {FC} from 'react';
import {Card} from "primereact/card";
import OfficialAccounts from "./OfficialAccounts/OfficialAccounts.lazy.tsx";
import MusicPlatforms from "./MusicPlatforms/MusicPlatforms.lazy.tsx";
import CompasDeHierro from "./CompasDeHierro/CompasDeHierro.lazy.tsx";


interface DirectoryProps {
}

const Directory: FC<DirectoryProps> = () => (
  <Card header="Directorio">
    <OfficialAccounts/>
    <MusicPlatforms/>
    <CompasDeHierro/>
  </Card>
);

export default Directory;
