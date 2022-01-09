import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"

export function Recent(): JSX.Element {
  
  return (
    <div className="recent">
      <NavBar/>
      <NotLogged label="Recent"/>
      <Footer/>
    </div>
  )
}