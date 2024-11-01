import {FC} from 'react';
import {Card} from "primereact/card";
import {Button} from "primereact/button";
import {useNavigate} from "react-router-dom";


interface HomeProps {
}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };
  return (
    <div>

      <Card>
        <div className="md:mt-96"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
          <div className="bg-neutral-800 rounded p-4">
            <h2 className="text-2xl pb-5">¿Qué desea hacer?</h2>
            <div className="grid grid-cols-2">
              <div>
                <Button label="Registros de la tribu" text outlined onClick={() => handleNavigateToURL('/faq')}
                        tooltip="Preguntas frecuentes" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                Adentrarse en las&nbsp;
                <Button label="visiones del brujo" text outlined onClick={() => handleNavigateToURL('/search')}
                        tooltip="Buscador" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                <Button label="Silbatos de guerra" text outlined onClick={() => handleNavigateToURL('/directory')}
                        tooltip="Directorio" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                <Button label="Cantares de Gest" text outlined onClick={() => handleNavigateToURL('/lyrics')}
                        tooltip="Música" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                Realizar la&nbsp;
                <Button label="Danza de la lluvia" text outlined
                        onClick={() => window.open('https://github.com/javatlacati/temachpedia/issues', '_blank')?.focus()}
                        tooltip="Reportar un problema o solicitar una nueva
      funcionalidad" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                <Button label="Salón de trofeos" text outlined onClick={() => handleNavigateToURL('/achievements')}
                        tooltip="Logros de la comunidad" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                de caza&nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
              <div>
                Adentrate en <Button label="el santuario del conocimiento" text outlined onClick={() => handleNavigateToURL('/library')}
                                     tooltip="Biblioteca de los compas" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                <span className="pi pi-question-circle"></span>
              </div>
              <div>
                <Button label="Pruebas de valor" text outlined onClick={() => handleNavigateToURL('/quiz')}
                        tooltip="Cuestionarios" tooltipOptions={{showDelay: 1000, hideDelay: 300}}/>
                &nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
            </div>
          </div>
          <div className="bg-neutral-800 rounded p-4">
            <h2 className="text-2xl pb-5">Trabajo a futuro</h2>
            <div className="grid grid-cols-2">
              <div>
                Viaje del Héroe&nbsp;<span
                className="pi pi-question-circle"
              ></span>
              </div>
            </div>
            <br/>
            <br/>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Home;
