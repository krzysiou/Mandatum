import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { Header } from "./header/Header";
import { useState } from "react";
import { setLogin } from "../../utilities/functions/globalFunctions";

export function Friends(): JSX.Element {

  const [logged, setLogged] = useState(false);

  return (
    <div className="friends">
      <NavBar logged={logged} logOut={setLogin(setLogged, false)}/>
      { logged ? null : <NotLogged label="Friends"/> }
      { logged ? <Header/> : null }
      <Footer/>
    </div>
  )
}