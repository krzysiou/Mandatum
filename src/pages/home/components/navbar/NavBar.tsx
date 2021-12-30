import { NavButton } from "./components/navbutton/NavButton";
import logo from './logo.svg'
import './NavBar.css';

export function NavBar():JSX.Element {
  const redirect = (str: string) => {
    return () => alert("redirecting to " + str);
  }

  return (
    <div className="top">
      <div className="top-left">
        <div className="logo">
          <img src={logo} alt="mandatum logo" className="icon" width='40px'/>
        </div>
        <div className="search">
          <input type="text" placeholder="Search.." name="search"/>
        </div>
        <div className="buttons">
          <NavButton label="Friends"  onPress={redirect("Friends")}/>
          <NavButton label="Recent" onPress={redirect("Recent")}/>
          <NavButton label="Pinned" onPress={redirect("Pinned")}/>
        </div>
      </div>
      <div className="top-right">
        <div className="buttons">
          <NavButton label="Home"  onPress={redirect("Home")}/>
          <NavButton label="About" onPress={redirect("About")}/>
          <NavButton label="Log in" onPress={redirect("Login")}/>
        </div>
      </div>
    </div>
  )
}