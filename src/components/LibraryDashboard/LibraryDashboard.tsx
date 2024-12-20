import {FC, useState} from 'react';
import {LibraryDashboardWrapper} from './LibraryDashboard.styled';
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Author, Book} from "../../zustand/types/Book.ts";
import {useTemachpediaState} from "../../zustand/store.ts";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LibraryDashboard: FC = () => {
  const token = localStorage.getItem('token')
  const books: Book[] = useTemachpediaState(state => state.books); // Para almacenar los libros obtenidos
  const setBooks = useTemachpediaState(state => state.setBooks);
  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');

  const navigate = useNavigate();
  const handleNavigateToURL = (url: string) => {
    navigate(url);
  };

  function searchByTitle() {
    const lowerCaseTitle = encodeURI(searchTitle.toLowerCase());
    axios.get(`http://localhost/api/booksbytitle?title=${lowerCaseTitle}`, {headers: {'Authorization': 'Bearer ' + token}}).then(filteredBooks => setBooks(filteredBooks.data)).catch(error => {
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

  function searchByAuthor() {
    const lowerCaseAuthor = encodeURI(searchAuthor.toLowerCase());
    axios.get(`https://localhost/api/booksbyauthor?author_name=${lowerCaseAuthor}`, {headers: {'Authorization': 'Bearer ' + token}}).then(filteredBooks => setBooks(filteredBooks.data)).catch(error => {
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

  function authorsTemplate(rowData: { authors: Author[] }) {
    console.log(rowData);
    return (
      rowData.authors.map((author) => (
        <span key={`author_${author.id}`}>{author.name}</span>
      ))
    )
  }

  return (
    <LibraryDashboardWrapper>
      <Card header="Buscar recurso multimedia">

        <div className="grid md:grid-cols-3 p-2">
        <span className="p-float-label col-span-2">
          <InputText id="title" name="searchTitle" className="w-11/12" value={searchTitle}
                     onChange={(e) => setSearchTitle(e.target.value)}/>
          <label htmlFor="title">Buscar por título</label>
        </span>
          <Button onClick={searchByTitle}>Buscar</Button>
        </div>
        <div className="grid md:grid-cols-3 p-2">
        <span className="p-float-label col-span-2">
          <InputText id="author" name="author" className="w-11/12" value={searchAuthor}
                     onChange={(e) => setSearchAuthor(e.target.value)}/>
          <label htmlFor="author">Buscar por autor</label>
        </span>
          <Button onClick={searchByAuthor}>Buscar</Button>
        </div>

        {books && (
          <DataTable value={books}>
            <Column field="title" header="Título"/>
            <Column field="authors" header="Autor" body={authorsTemplate}/>
            <Column field="downloadUrl" header="url"/>
          </DataTable>
        )
        }
      </Card>
    </LibraryDashboardWrapper>
  );
};

export default LibraryDashboard;
