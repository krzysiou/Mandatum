import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { Header } from "./header/Header";
import { useState } from "react";
import { checkCookie } from "../../utilities/functions/cookies";

export function Friends(): JSX.Element {
  const [logged, setLogged] = useState(checkCookie("accessToken"));

  return (
    <div className="friends">
      <NavBar logged={logged} logOut={()=>setLogged(false)}/>
      { logged ? null : <NotLogged label="Friends"/> }
      { logged ? <Header/> : null }
      <Footer/>
    </div>
  )
}