import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"
import { useState } from "react";
import { checkCookie } from "../../utilities/functions/cookies";

export function Pinned(): JSX.Element {

  const [logged, setLogged] = useState(checkCookie("accessToken"));

  return (
    <div className="pinned">
      <NavBar logged={logged} logOut={()=>setLogged(false)}/>
      <NotLogged label="Pinned"/>
      <Footer/>
    </div>
  )
}