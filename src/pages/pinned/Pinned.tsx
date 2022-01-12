import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { useState } from "react";

export function Pinned(): JSX.Element {

  const [logged, setLogged] = useState(false);

  function logOut(){
    return () => setLogged(false);
  }

  return (
    <div className="pinned">
      <NavBar logged={logged} logOut={logOut()}/>
      <NotLogged label="Pinned"/>
      <Footer/>
    </div>
  )
}