import './App.css'
import './flags.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.lazy.tsx";
import Search from "./components/Search/Search.lazy.tsx";
import Faq from "./components/Faq/Faq.lazy.tsx";
import Directory from "./components/Directory/Directory.lazy.tsx";
import SongList from "./components/SongList/SongList.lazy.tsx";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/search",
      element: <Search/>
    },
    {
      path: "/faq",
      element: <Faq/>
    },
    {
      path: "/directory",
      element: <Directory/>
    },
    {
      path: "/lyrics",
      element: <SongList/>
    },
    {
      path: "*",
      element: <h1>Nooo mi compa esa página no existe ¡Mándela alv!</h1>
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
