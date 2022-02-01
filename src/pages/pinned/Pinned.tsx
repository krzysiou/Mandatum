import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { useState } from "react";
import { checkCookie } from "../../utilities/functions/cookies";
import { logoutUser } from "../../utilities/functions/globalFunctions";
import { Header } from "./header/Header";

export function Pinned(): JSX.Element {
  const [logged, setLogged] = useState(checkCookie("accessToken"));

  return (
    <div className="pinned">
      <NavBar logged={logged} logOut={logoutUser(setLogged)}/>
      { logged ? <Header/> : <NotLogged label="Pinned"/> }
      <Footer/>
    </div>
  )
}