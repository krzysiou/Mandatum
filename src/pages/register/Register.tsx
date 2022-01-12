import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"
import { useState } from "react";
import { setLogin } from "../../utilities/functions/globalFunctions";

export function Register():JSX.Element {

  const [logged, setLogged] = useState(false);

  return (
    <div className="register">
      <NavBar logged={logged} logOut={setLogin(setLogged, false)}/>
      <Header/>
      <Footer/>
    </div>
  );
}