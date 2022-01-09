import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"

export function Login():JSX.Element {

  return (
    <div className="login">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  );
}