import {FC, useState} from 'react';
import {LibraryDashboardWrapper} from './LibraryDashboard.styled';
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";

interface LibraryDashboardProps {
}

const LibraryDashboard: FC<LibraryDashboardProps> = () => {

  let books: any[] = []; // Para almacenar los libros obtenidos
  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');

  function searchByTitle() {
    return undefined;
  }

  function searchByAuthor() {
    return undefined;
  }

  return (
    <LibraryDashboardWrapper>
      <Card header="Buscar recurso multimedia">
        <form>
          <div className="grid md:grid-cols-3 p-2">
        <span className="p-float-label col-span-2">
          <InputText id="title" name="searchTitle" className="w-11/12" value={searchTitle}
                     onChange={(e) => setSearchTitle(e.target.value)}/>
          <label htmlFor="title">Buscar por título</label>
        </span>
            <Button onClick={searchByTitle()}>Buscar</Button>
          </div>
          <div className="grid md:grid-cols-3 p-2">
        <span className="p-float-label col-span-2">
          <InputText id="author" name="author" className="w-11/12" value={searchAuthor}
                     onChange={(e) => setSearchAuthor(e.target.value)}/>
          <label htmlFor="author">Buscar por autor</label>
        </span>
            <Button onClick={searchByAuthor()}>Buscar</Button>
          </div>
        </form>
        {books.map((book) => (
          <DataTable value={books}>
            <Column field="title" header="Título"/>
            <Column field="authors" header="Autor"/>
            <Column field="genre" header="Acciones"/>
          </DataTable>
        ))}
      </Card>
    </LibraryDashboardWrapper>
  );
};

export default LibraryDashboard;
