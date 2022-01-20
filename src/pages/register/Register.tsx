import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"
import { useState } from "react";
import { checkCookie } from "../../utilities/functions/cookies";
import { logoutUser } from "../../utilities/functions/globalFunctions";

export function Register():JSX.Element {

  const [logged, setLogged] = useState(checkCookie("accessToken"));

  return (
    <div className="register">
      <NavBar logged={logged} logOut={logoutUser(setLogged)}/>
      <Header/>
      <Footer/>
    </div>
  );
}