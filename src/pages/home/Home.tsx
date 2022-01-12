import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"
import { useState } from "react";

export function Home(): JSX.Element {
  
  const [logged, setLogged] = useState(false);

  function logOut(){
    return () => setLogged(false);
  }

  return (
    <div className="home">
      <NavBar logged={logged} logOut={logOut()}/>
      <Header/>
      <Footer/>
    </div>
  )
}