import {Link, Outlet, useLocation} from "react-router-dom";

export function Header() {
  const {pathname} = useLocation();
  return (<>
    {pathname !== "/" ? (
        <>
          <h1 className="text-4xl font-bold p-3"><Link to="/home">La Temachpedia</Link></h1><Outlet/>
        </>
      ) :
      <Outlet/>}
  </>);
}