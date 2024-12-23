import {FC, useState} from 'react';
import {LibraryDashboardWrapper} from './LibraryDashboard.styled';
import {Card} from "primereact/card";
import {InputText} from "primereact/inputtext";
import {Button} from "primereact/button";
import {DataTable} from "primereact/datatable";
import {Column} from "primereact/column";
import {Author, Book} from "../../zustand/types/Book.ts";
import {useTemachpediaState} from "../../zustand/store.ts";
import {useNavigate} from "react-router-dom";
import apiCall, {redirectOnApiError} from "../../util/util.ts";

const LibraryDashboard: FC = () => {
  const [searchTitle, setSearchTitle] = useState('');
  const [searchAuthor, setSearchAuthor] = useState('');

  const navigate = useNavigate();

  const books: Book[] = useTemachpediaState(state => state.books); // Para almacenar los libros obtenidos
  const setBooks = useTemachpediaState(state => state.setBooks);


  function searchByTitle() {
    const lowerCaseTitle = searchTitle.toLowerCase();
    redirectOnApiError(apiCall('booksbytitle', ['title', lowerCaseTitle]).then(filteredBooks => setBooks(filteredBooks.data)), navigate)
  }

  function searchByAuthor() {
    const lowerCaseAuthor = searchAuthor.toLowerCase();
    redirectOnApiError(apiCall('booksbyauthor', ['author_name', lowerCaseAuthor]).then(filteredBooks => setBooks(filteredBooks.data)), navigate);
  }

  function authorsTemplate(rowData: { authors: Author[] }) {
    return (
      rowData.authors.map((author) => (
        <span key={`author_${author.id}`}>{author.name}</span>
      ))
    )
  }

  function downloadTemplate(book: Book) {
    return (
      <a href={book.downloadUrl} target="_blank" download aria-label={`Descarga el libro ${book.title}`}>Descargar</a>
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
            <Column field="downloadUrl" header="url" body={downloadTemplate}/>
          </DataTable>
        )
        }
      </Card>
    </LibraryDashboardWrapper>
  );
};

export default LibraryDashboard;
