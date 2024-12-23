import './App.css'
import './flags.css'
import "leaflet/dist/leaflet.css"
import "leaflet/dist/leaflet.js"
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.lazy.tsx";
import Search from "./components/Search/Search.lazy.tsx";
import Faq from "./components/Faq/Faq.lazy.tsx";
import Directory from "./components/Directory/Directory.lazy.tsx";
import SongList from "./components/SongList/SongList.lazy.tsx";
import TrophyRoom from "./components/TrophyRoom/TrophyRoom.lazy.tsx";
import LibraryDashboard from "./components/LibraryDashboard/LibraryDashboard.lazy.tsx";
import SignIn from "./components/SignIn/SignIn.lazy.tsx";
import Song from "./components/SongList/Song/Song.lazy.tsx";
import {Header} from "./Header.tsx";

function App() {

  const router = createBrowserRouter([
    {
      element: <Header/>,
      children: [
        {
          path: "/",
          element: <SignIn/>
        },
        {
          path: "/home",
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
        }, {
          path: "/lyrics/song/:id",
          element: <Song/>
        }, {
          path: '/achievements',
          element: <TrophyRoom/>
        },
        {
          path: '/library',
          element: <LibraryDashboard/>
        },
        {
          path: "*",
          element: <h1>Nooo mi compa esa página no existe ¡Mándela alv!</h1>
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
