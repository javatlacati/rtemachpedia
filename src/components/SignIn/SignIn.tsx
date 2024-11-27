import {FC} from 'react';
import {SignInWrapper} from './SignIn.styled';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Image} from "primereact/image";
import {useNavigate} from "react-router-dom";

interface SignInProps {
}

const SignIn: FC<SignInProps> = () => {
  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };
  return (
    <SignInWrapper>
      <p>
        Este es un sitio para la comunidad del Temach<sup>&copy;</sup> enfocado al estudio y superación
        personal
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
        <div className="col">
          <Card header="Iniciar sesión">
            <hr/>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-1.5 justify-items-center">
              <span></span>
              <Button icon="pi pi-facebook" rounded onClick={() => handleNavigateToURL('/home')}/>
              <Button icon="pi pi-google" rounded onClick={() => handleNavigateToURL('/home')}/>
            </div>
            <hr/>
            <form>
              <div className="flex flex-col gap-2,">
                <label htmlFor="email" className="pb-3">Correo electrónico</label>
                <InputText id="email" name="email" required/>
              </div>
              <div className="grid grid-cols-1">
                <div className="grid md:grid-cols-2 justify-items-stretch">
                  <label htmlFor="pwd" className="pt-2">Contraseña</label>
                  <Button label="olvidé mi contraseña" className="text-right" link/>
                </div>
                <Password id="pwd" inputClassName="w-full" name="pwd" required/>
                <Checkbox className="pb-3 pt-3" name="remember" checked={false} title="Recordarme"/>
                <Button label="Iniciar sesión" onClick={() => handleNavigateToURL('/home')}/>
              </div>
            </form>
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
