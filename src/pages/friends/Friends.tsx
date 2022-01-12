import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { Header } from "./header/Header";
import { useState } from "react";

export function Friends(): JSX.Element {

  const [logged, setLogged] = useState(true);

  function logOut(){
    return () => setLogged(false);
  }

  return (
    <div className="friends">
      <NavBar logged={logged} logOut={logOut()}/>
      { logged ? null : <NotLogged label="Friends"/> }
      { logged ? <Header/> : null }
      <Footer/>
    </div>
  )
}