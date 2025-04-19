import {Link, Outlet, useLocation} from "react-router-dom";

export function Header() {
  const {pathname} = useLocation();
  const name = localStorage.getItem('name') || 'invitado'//useTemachpediaState((state) => state?.auth?.name);
  return (<>
    {pathname !== "/" ? (
        <>
          <div className="flex flex-row justify-between md:mx-12">
            <h1 className="text-4xl font-bold p-3">
              <Link to="/home">La
                Temachpedia</Link></h1>{name || 'invitado'}</div>
          <Outlet/>
        </>
      ) :
      <Outlet/>}
  </>);
}