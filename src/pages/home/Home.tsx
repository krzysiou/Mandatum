import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { Header } from "./header/Header"

export function Home(): JSX.Element {

  return (
    <div className="home">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  )
}