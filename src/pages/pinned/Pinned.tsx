import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { useState } from "react";
import { setLogin } from "../../utilities/functions/globalFunctions";

export function Pinned(): JSX.Element {

  const [logged, setLogged] = useState(false);

  return (
    <div className="pinned">
      <NavBar logged={logged} logOut={setLogin(setLogged, false)}/>
      <NotLogged label="Pinned"/>
      <Footer/>
    </div>
  )
}