import {FC, useEffect} from 'react';
import {TrophyRoomWrapper} from './TrophyRoom.styled';
import {Card} from "primereact/card";
import {Chips} from "primereact/chips";
import {Carousel} from "primereact/carousel";
import {Button} from "primereact/button";
import {useTemachpediaState} from "../../zustand/store.ts";
import {MammothHead} from "../../zustand/types/MammothHead.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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

  const heads = useTemachpediaState((state) => state.heads);
  const setHeads = useTemachpediaState((state) => state.setHeads);
  const auth = useTemachpediaState((state) => state.auth);

  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  useEffect(() => {
    axios.get('https://localhost/api/achievements', {headers: {'Authorization': 'Bearer ' + auth.token}}).then(response => {
      const achievements: MammothHead[] = response.data;
      if (achievements && achievements.length > 0) {
        setHeads(achievements);
      }
    }).catch(error => {
      if (error.response && error.response.status === 401) {
        // Token expired, remove it from localstorage and prompt user to log in again
        localStorage.removeItem('token');
        localStorage.setItem('name', 'invitado');
        alert('Su sesión ha expirado. Por favor, inicie sesión de nuevo.');
        // Redirect user to the login page or prompt for login credentials
        handleNavigateToURL('/');
      } else {
        console.log(error);
        alert('Hubo un error en la carga de datos del usuario. Por favor intente nuevamente.');
      }
    })
  })


  const headsTemplate = (head: MammothHead) => (
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
