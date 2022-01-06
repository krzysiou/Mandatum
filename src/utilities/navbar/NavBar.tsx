import { NavButton } from "./navbutton/NavButton";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownHeader } from "../dropdown/dropdownheader/DropdownHeader";
import { DropdownItem } from '../dropdown/dropdownitem/DropdownItem';
import { redirect } from '../../pages/home/homeFunc'
import { useState } from "react";
import logo from './logo.svg'
import './NavBar.css';


export function NavBar():JSX.Element {
  
  const [open, setOpen] = useState(false);

  function changeOpen() {
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
          <NavButton label="Friends"  onPress={redirect("friends")}/>
          <NavButton label="Recent" onPress={redirect("recent")}/>
          <NavButton label="Pinned" onPress={redirect("pinned")}/>
        </div>
        <div className="dropdown-container">
          <DropdownHeader label="Menu" onPress={changeOpen()} state={open}>
            <Dropdown>
              <>
              <DropdownItem label="Home" onPress={redirect('home')} />
              <DropdownItem label="Log In" onPress={redirect('log in')} />
              <DropdownItem label="Register" onPress={redirect('register')} />
              <DropdownItem label="Friends" onPress={redirect('friends')} />
              <DropdownItem label="Recent" onPress={redirect('recent')} />
              <DropdownItem label="Pinned" onPress={redirect('pinned')} />
              </>
            </Dropdown>
          </DropdownHeader>
        </div>
      </div>
      <div className="top-right">
        <div className="buttons">
          <NavButton label="Home"  onPress={redirect("home")}/>
          <NavButton label="Log in" onPress={redirect("login")}/>
          <NavButton label="Register" onPress={redirect("register")}/>
        </div>
      </div>
    </div>
  )
}