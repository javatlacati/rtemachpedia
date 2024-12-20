import {FC} from 'react';
import {Card} from "primereact/card";
import {Image} from "primereact/image";

const OfficialAccounts: FC = () => (
  <Card header="Cuentas oficiales">
    <div className="md:flex md:justify-center">
      <a
        style={{color: '#fff', fontWeight: 'bold'}}
        href="https://www.youtube.com/c/ELTEMACH"
        target="_blank"
      >YOUTUBE</a
      >&nbsp;&nbsp;&nbsp;
      <a
        style={{color: '#fff', fontWeight: 'bold'}}
        href="https://www.tiktok.com/@el_temach"
        target="_blank"
      >TIKTOK</a
      >&nbsp;&nbsp;&nbsp;
      <a
        style={{color: '#fff', fontWeight: 'bold'}}
        href="https://www.instagram.com/eltemach/"
        target="_blank"
      >INSTAGRAM</a
      >&nbsp;&nbsp;&nbsp;
      <a
        style={{color: '#fff', fontWeight: 'bold'}}
        href="https://www.facebook.com/eltemach/"
        target="_blank"
      >FACEBOOK</a
      >&nbsp;&nbsp;&nbsp;
      <a style={{color: '#fff', fontWeight: 'bold'}} href="https://www.twitch.tv/eltemach" target="_blank"
      >TWITCH</a
      >&nbsp;&nbsp;&nbsp;
      <a style={{color: '#fff', fontWeight: 'bold'}} href="https://twitter.com/el_temach" target="_blank"
      >X</a
      >
    </div>
    <br/>
    <div className="flex justify-center">
      <Image
        src="el temach.webp"
        alt="temachavatar"
        imageClassName="pavatarbig objet-fit-cover"/>
    </div>
    <hr/>
    <p style={{textAlign: 'center', textShadow: '1px 1px 1px dimgrey'}}>
      Todos los martes se transmite live en YouTube, suscríbete en el canal para recibir la alerta.
    </p>
  </Card>
);

export default OfficialAccounts;
