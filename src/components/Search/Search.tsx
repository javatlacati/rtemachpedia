import {FC, useRef, useState} from 'react';
import {Card} from "primereact/card";
import {Toast} from "primereact/toast";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";


interface SearchProps {
}

const Search: FC<SearchProps> = () => {
  const toast = useRef<Toast>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const searchForText = () => {
    if (searchQuery.length > 4) {
      alert('buscando...')
    } else {
      toast.current?.show({
        severity: 'warn',
        summary: 'Sin consulta',
        detail: 'Por favor especifique un término de búsqueda con al menos 5 letras'
      });
    }
  }

  return (
    <Card>
      <Toast ref={toast}></Toast>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <span className="p-input-icon-left md:col-span-11 md:pr-2">
      <i className="pi pi-search ml-2"></i>
        <InputText value={searchQuery}
                   className="w-full pl-8"
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} minLength={5}
                   maxLength={35}/>
        </span>
        <span>
          <Button label="Buscar" onClick={searchForText}/>
        </span>
      </div>
    </Card>
  );
};

export default Search;
