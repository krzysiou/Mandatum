import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"

export function Register():JSX.Element {
  return (
    <div className="register">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  );
}