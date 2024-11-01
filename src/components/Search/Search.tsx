import {FC, useState} from 'react';
import {Card} from "primereact/card";
import {Toast} from "primereact/toast";
import {InputText} from "primereact/inputtext";


interface SearchProps {
}

const Search: FC<SearchProps> = () => {

  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Card>
      <Toast></Toast>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <span className="p-input-icon-left md:col-span-11 md:pr-2">
      <i className="pi pi-search"></i>
        <InputText value={searchQuery}
                   onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)} minLength={5}
                   maxLength={35}/>
        </span>
      </div>
    </Card>
  );
};

export default Search;
