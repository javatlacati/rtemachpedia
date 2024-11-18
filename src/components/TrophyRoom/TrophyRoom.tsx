import {FC} from 'react';
import {TrophyRoomWrapper} from './TrophyRoom.styled';
import {Card} from "primereact/card";
import {Chips} from "primereact/chips";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";

interface TrophyRoomProps {
}

const TrophyRoom: FC<TrophyRoomProps> = () => {
  const categories: string[] = [
    'Superación personal',
    'Negocios',
    'Estudio',
    'Relaciones',
    'Cambio físico',
  ];

  const heads = [
    {
      id: '1000',
      country: 've',
      name: 'Alejandro Rodríguez',
      title: 'Trazos de Resiliencia',
      description: 'La Historia de Marco Silva desde Florencia',
      image: 80,
      age: 26,
      category: 'Superación personal',
      quantity: 24,
      publishDate: new Date('12/19/2023'),
      isMale: true,
    },
    {
      id: '1001',
      country: 'us',
      name: 'Eliah González',
      description: 'La Melodía de Javier Morales un recién graduado de Juilliard',
      image: 81,
      age: 22,
      category: 'Estudio',
      quantity: 61,
      publishDate: new Date('12/19/2023'),
      title: 'Caminos Resonantes',
      isMale: true,
    },
    {
      id: '1002',
      country: 'mx',
      name: 'Francisco Sarabia',
      title: 'Decimotercera empresa',
      description: '¿Cómo pasé de depresión a tener 13 empresas? Aquí te lo cuento',
      image: 12,
      age: 31,
      category: 'Negocios',
      quantity: 2,
      publishDate: new Date('12/19/2023'),
      isMale: true,
    },
    {
      id: '1006',
      country: 'co',
      name: 'Lavue Nota',
      title: 'Boda',
      description: 'Primera boda de pareja de temacheros. El temach asistió a la boda.',
      image: 22,
      age: 29,
      category: 'Relaciones',
      quantity: 2,
      publishDate: new Date('12/19/2023'),
      isMale: false,
    },
  ];

  const headsTemplate = (head) => (
    <div className="m-2 py-8 px-4 grid grid-cols-2 gap-2 bg-neutral-700 rounded-3xl">
      <div className="relative">
        <img
          src={`https://randomuser.me/api/portraits/${head.isMale ? 'men' : 'women'}/${
            head.image
          }.jpg`}
          alt={head.name}
          className="shadow-md rounded-full"
        />
      </div>
      <div>
        <h4 className="mb-1">{head.name}</h4>
        <div className="grid grid-cols-2">
          <span className={`mr-2 flag flag-${head.country}`}></span>
          <h6 className="mt-0 mb-4">{head.age} años</h6>
        </div>
      </div>
      <div className="col-span-2">
        <b>{head.title}:</b>&nbsp;{head.description}
      </div>
      <div className="col-span-2 grid grid-cols-2">
        <div><span className="pi pi-calendar"></span> {JSON.stringify(head.publishDate)}</div>
        <div>
          <Button severity={"info"}>Leer más</Button>
        </div>
      </div>
    </div>
  )

  return (
    <TrophyRoomWrapper>
      <Card header="Trofeos de caza" subTitle="Aquí mostraremos tus cabezas de mamut">
        <div className="card flex align-items-center gap-2 flex-wrap">
          <Chips>

          </Chips>
        </div>
        <Carousel value={heads} circular={true} itemTemplate={headsTemplate}></Carousel>
      </Card>
    </TrophyRoomWrapper>
  );
};

export default TrophyRoom;
