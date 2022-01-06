import { NavButton } from "./navbutton/NavButton";
import { Dropdown } from "./dropdown/Dropdown";
import { DropdownHeader } from "./dropdownheader/DropdownHeader";
import { redirect} from './navbarFunc'
import { useState } from "react";
import logo from './logo.svg'
import './NavBar.css';

export function NavBar():JSX.Element {
  
  const [open, setOpen] = useState(false);

  function opened() {
    return () => setOpen(!open);
  }
  return (
    <div className="top">
      <div className="top-left">
        <div className="mini-logo">
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
        <div className="dropdown-container">
          <DropdownHeader label="Menu" onPress={opened()} state={open}>
            <Dropdown/>
          </DropdownHeader>
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