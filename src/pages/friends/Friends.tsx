import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { Header } from "./header/Header";
import { useState } from "react";
import { checkCookie } from "../../utilities/functions/cookies";
import { logoutUser } from "../../utilities/functions/globalFunctions";

export function Friends(): JSX.Element {
  const [logged, setLogged] = useState(checkCookie("accessToken"));

  return (
    <div className="friends">
      <NavBar logged={logged} logOut={logoutUser(setLogged)}/>
      { logged ? <Header/> : <NotLogged label="Friends"/> }
      <Footer/>
    </div>
  )
}