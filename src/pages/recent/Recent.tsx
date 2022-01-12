import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { useState } from "react";

export function Recent(): JSX.Element {

  const [logged, setLogged] = useState(false);

  function logOut(){
    return () => setLogged(false);
  }

  return (
    <div className="recent">
      <NavBar logged={logged} logOut={logOut()}/>
      <NotLogged label="Recent"/>
      <Footer/>
    </div>
  )
}