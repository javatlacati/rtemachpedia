import {FC, useRef, useState} from 'react';
import {Card} from "primereact/card";
import {Toast} from "primereact/toast";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {Paginator, PaginatorPageChangeEvent} from "primereact/paginator";
import {useTemachpediaState} from "../../zustand/store.ts";
import axios from "axios";

const Search: FC = () => {
  const toast = useRef<Toast>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const matches = useTemachpediaState(state => state.matches);
  const setMatches = useTemachpediaState(state => state.setMatches);
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const [isLoading, setIsLoading] = useState(false);


  const searchForText = () => {
    if (searchQuery.length > 4) {
      setIsLoading(true);
      axios.post('http://localhost:8081/api/video-transcription', {title: searchQuery})
        .then(response => {
          setFirst(0);
          setMatches(response.data || []);
          setIsLoading(false);
        })
    } else {
      toast.current?.show({
        severity: 'warn',
        summary: 'Sin consulta',
        detail: 'Por favor especifique un término de búsqueda con al menos 5 letras'
      });
    }
  }

  const onPageChange = (event: PaginatorPageChangeEvent) => {
    setFirst(event.first);
    setRows(event.rows);
  };

  return (
    <Card>
      <Toast ref={toast}></Toast>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <span className="p-input-icon-left md:col-span-11 md:pr-2">
      <i className="pi pi-search ml-2"></i>
        <InputText value={searchQuery}
                   className="w-full pl-8"
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} minLength={5}
                   maxLength={35}
                   disabled={isLoading}
                   onKeyDown={(e) => {
                     if (e.key === 'Enter') {
                       searchForText();
                     }
                   }}
        />
        </span>
        <span>
          <Button label="Buscar" onClick={searchForText} loading={isLoading}/>
        </span>
      </div>

      {matches && matches.length > 0 && (
        <>
          <div className="flex flex-col card-container">
            <Paginator first={first} rows={rows} totalRecords={matches.length} rowsPerPageOptions={[10, 20, 30]}
                       onPageChange={onPageChange}/>
            <Card header={matches[first].video_title}>
              {matches[first].transcript.map((t, index) => (
                <div key={index}>
                  {t.text}&nbsp;
                  <a href={t.url} target="_blank">Abrir</a>
                </div>
              ))}
            </Card>
          </div>

        </>
      )}

      <br/>
      <p>
        Para realizar búsquedas más efectivas, le proporcionamos algunas herramientas útiles. Si desea
        encontrar algo específico, como una frase póngalo entre comillas. También puede usar
        <code>-</code> para que no salga una palabra. Por ejemplo:
        <br/>
        Si desea buscar información acerca de la mujer del proceso, pero que <b>NO</b> tenga exactamente
        la palabra <code>seas</code>
        como en la frase "no seas la mujer del proceso" puede hacer la siguiente consulta
      </p>
      <pre>"mujer del proceso" -seas</pre>
      <p>
        Este método buscará la frase exacta "mujer del proceso", pero omitirá los resultados que
        incluyan la palabra "<code>seas</code>". Como resultado, obtendrá información como:
      </p>
      <blockquote>
        <i>la famosa <u>mujer del proceso</u> que al final</i>
      </blockquote>
      <p>Supongamos que busca información sobre cómo regresar del Amazon:</p>
      <pre>"amazon" "volver"</pre>
      <p>
        Con esta consulta, encontrará resultados relacionados tanto con "Amazon" como con "volver". Por
        ejemplo:
      </p>
      <blockquote>
        <i><u>Amazon</u> tienes que <u>volver</u> a romper</i>
      </blockquote>
      <p>
        Si prefiere una búsqueda más amplia, sin comillas, se mostrarán resultados que contengan
        <b>al menos una</b> de las palabras que ingresó. Por ejemplo:
      </p>
      <pre>estoico estoicismo</pre>
      <p>
        Esta búsqueda incluirá información sobre "estoico" o "estoicismo". Así, podrá explorar diversas
        opciones y encontrar lo que necesita de manera más precisa.
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        <Card>Ad1</Card>
        <Card>Ad2</Card>
      </div>
    </Card>
  );
};

export default Search;
