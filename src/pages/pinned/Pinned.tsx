import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"

export function Pinned(): JSX.Element {
  
  return (
    <div className="pinned">
      <NavBar/>
      <NotLogged label="Pinned"/>
      <Footer/>
    </div>
  )
}