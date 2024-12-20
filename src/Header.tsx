import {Link, Outlet, useLocation} from "react-router-dom";
import {useTemachpediaState} from "./zustand/store.ts";

export function Header() {
  const {pathname} = useLocation();
  const name = useTemachpediaState((state) => state?.auth?.name);
  return (<>
    {pathname !== "/" ? (
        <>
          <div className="flex flex-row justify-between"><h1 className="text-4xl font-bold p-3"><Link to="/home">La
            Temachpedia</Link></h1>{name || 'invitado'}</div>
          <Outlet/>
        </>
      ) :
      <Outlet/>}
  </>);
}