import { NavBar } from "../../utilities/components/navbar/NavBar";
import { Footer } from "../../utilities/components/footer/Footer"
import { NotLogged } from "../../utilities/components/notlogged/NotLogged"

export function Friends(): JSX.Element {
  
  return (
    <div className="friends">
      <NavBar/>
      <NotLogged label="Friends"/>
      <Footer/>
    </div>
  )
}