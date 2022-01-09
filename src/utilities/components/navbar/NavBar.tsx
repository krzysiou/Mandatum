import { NavBarContents } from "./navbarcontents/NavBarContents"
import { NavBoxLeft } from "./navbarcontents/navboxleft/NavBoxLeft"
import { NavBoxRight } from "./navbarcontents/navboxright/NavBoxRight"
import { NavButton } from "./navbarcontents/navbutton/NavButton"
import { DropdownHeader } from "../dropdown/dropdownheader/DropdownHeader"
import { Dropdown } from "../dropdown/Dropdown"
import { DropdownItem } from "../dropdown/dropdownitem/DropdownItem"
import { Logo } from "./navbarcontents/logo/Logo"
import { SearchBar } from "./navbarcontents/searchbar/SearchBar"
import { redirect } from "../../functions/globalFunctions"
import { useState } from "react";

import './NavBar.css'

export function NavBar(): JSX.Element {

  const [open, setOpen] = useState(false);
  function changeOpen() {
    return () => setOpen(!open);
  }

  return (
    <div className="navbar-main">
      <NavBarContents>
        <>
          <NavBoxLeft>
            <>
              <div className="little1">
                <Logo/>
              </div>
              <div className="little2">
                <SearchBar placeholder="Search.." name="search"/>
              </div>
              <NavButton label="Friends"  onPress={redirect("friends")}/>
              <NavButton label="Recent" onPress={redirect("recent")}/>
              <NavButton label="Pinned" onPress={redirect("pinned")}/>
              <div className="little3">
                <DropdownHeader label="Menu" onPress={changeOpen()} state={open}>
                  <Dropdown>
                    <>
                    <DropdownItem label="Home" onPress={redirect('home')} />
                    <DropdownItem label="Log In" onPress={redirect('login')} />
                    <DropdownItem label="Sign In" onPress={redirect('register')} />
                    <DropdownItem label="Friends" onPress={redirect('friends')} />
                    <DropdownItem label="Recent" onPress={redirect('recent')} />
                    <DropdownItem label="Pinned" onPress={redirect('pinned')} />
                    </>
                  </Dropdown>
                </DropdownHeader>
              </div>
            </>
          </NavBoxLeft>
          <NavBoxRight>
            <>
              <NavButton label="Home" onPress={redirect("home")}/>
              <NavButton label="Log in" onPress={redirect("login")}/>
              <NavButton label="Sign In" onPress={redirect("register")}/>
            </>
          </NavBoxRight>
        </>
      </NavBarContents>
    </div>
  )
}