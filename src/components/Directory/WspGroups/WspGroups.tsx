import {FC} from 'react';
import {WspGroupsWrapper} from './WspGroups.styled';

// interface WspGroupsProps {}

interface WspGroup {
  name: string,
  description: string,
  inviteLink: string,
  ownerName: string,
}

const WspGroups: FC = () => {

  const wspGroups: WspGroup[] = [
    {
      name: 'Modo Guerra',
      description: 'Puro modo guerra.',
      inviteLink: 'https://example.com/wsp/modoguerra',
      ownerName: 'Juan Pérez',
    },
    {
      name: 'hip-compas',
      description: 'Canciones de la música hip-hop hechas por los compas.',
      inviteLink: 'https://example.com/wsp/hcompas',
      ownerName: 'Pedro García',
    },
    {
      name: 'Rockmach',
      description: 'Disfruta de las mejores canciones de rock hechas por y para compas.',
      inviteLink: 'https://example.com/wsp/rock',
      ownerName: 'María Martínez',
    },
  ]

  return (
    <WspGroupsWrapper>
      {wspGroups.map((group) => (<>
        <h2>{group.name}</h2>
        <p>{group.description}</p>
        <a href={group.inviteLink}>Acceder</a>
        <p>Propietario: {group.ownerName}</p>
        <hr/>
      </>))}
    </WspGroupsWrapper>
  );
};

export default WspGroups;
