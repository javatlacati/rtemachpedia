import {FC, useState} from 'react';
import {SignInWrapper} from './SignIn.styled';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Image} from "primereact/image";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useTemachpediaState} from "../../zustand/store.ts";

interface SignInProps {
}

const SignIn: FC<SignInProps> = () => {
  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  const {token} = useTemachpediaState((state) => state.auth);
  const setAuth = useTemachpediaState((state) => state.setAuth);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function getUserDetails(token: string) {
    if (localStorage.getItem('token')) {
      handleNavigateToURL('/home');
    } else {
      axios.get('http://localhost/api/user/', {headers: {'Authorization': 'Bearer ' + token}}).then(response => {
        const name = response.data.name;
        console.log(token)
        alert(token)
        setAuth(name || '', token || '')
        // Store the token in localstorage
        localStorage.setItem('token', token);
        localStorage.setItem('name', name);
        handleNavigateToURL('/home');
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
    }
  }

  const doLogin = () => {
    console.log('insideDoLogin')
    if (token) {
      getUserDetails(token);
    } else {
      if (email && password)
        axios.post(`http://localhost/api/login`, {'email': email, 'password': password}).then(response => {
          if (response.status === 201) {
            const aToken = response.data.token;
            getUserDetails(aToken);
          } else {
            alert('Credenciales incorrectas');
          }
        }).catch(error => {
          console.log(error)
          alert('Hubo un error en el login. Por favor intente nuevamente.')
        })
    }
  }

  return (
    <SignInWrapper>
      <p>
        Este es un sitio para la comunidad del Temach<sup>&copy;</sup> enfocado al estudio y superación
        personal
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
        <div className="col">
          <Card header="Iniciar sesión">
            {/*<hr/>*/}
            {/*<div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 justify-items-center">*/}
            {/*  <span></span>*/}
            {/*  <Button icon="pi pi-facebook" rounded onClick={() => handleNavigateToURL('/home')}/>*/}
            {/*  <Button icon="pi pi-google" rounded onClick={() => handleNavigateToURL('/home')}/>*/}
            {/*</div>*/}
            <hr/>
            <div>
              <div className="flex flex-col gap-2,">
                <label htmlFor="email" className="pb-3">Correo electrónico</label>
                <InputText id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="grid grid-cols-1">
                <div className="grid md:grid-cols-2 justify-items-stretch">
                  <label htmlFor="pwd" className="pt-2">Contraseña</label>
                  <Button label="olvidé mi contraseña" className="text-right" link/>
                </div>
                <Password id="pwd" inputClassName="w-full" name="pwd" value={password}
                          onChange={(e) => setPassword(e.target.value)} required/>
                <Checkbox className="pb-3 pt-3" name="remember" checked={false} title="Recordarme"/>
                <Button label="Iniciar sesión" onClick={doLogin}/>
              </div>
            </div>
            <hr/>
            <br/>
            <div className="pf-col-12">
              Registrar
            </div>
          </Card>
        </div>
        <div className="pf-col-6">
          <Image src="el temach.webp" width="100%"/>
        </div>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
