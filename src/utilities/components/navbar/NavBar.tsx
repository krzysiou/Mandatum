import { NavBarContents } from "./navbarcontents/NavBarContents"
import { NavBoxLeft } from "./navbarcontents/navboxleft/NavBoxLeft"
import { NavBoxRight } from "./navbarcontents/navboxright/NavBoxRight"
import { NavButton } from "./navbarcontents/navbutton/NavButton"
import { DropdownHeader } from "../dropdown/dropdownheader/DropdownHeader"
import { Dropdown } from "../dropdown/Dropdown"
import { DropdownItem } from "../dropdown/dropdownitem/DropdownItem"
import { Logo } from "./navbarcontents/logo/Logo"
import { SearchBar } from "./navbarcontents/searchbar/SearchBar"
import { useState } from "react"
import { redirect } from "../../functions/globalFunctions"

import './NavBar.css'

type Props = {
  logged: boolean,
  logOut: () => void
}

export function NavBar({logged, logOut}:Props): JSX.Element {

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
                    { logged ? null : <DropdownItem label="Log In" onPress={redirect('login')} />}
                    { logged ? null : <DropdownItem label="Sign In" onPress={redirect('register')} />}
                    { logged ? <DropdownItem label="Log out" onPress={logOut} /> : null }
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
              { logged ? null : <NavButton label="Log In" onPress={redirect('login')} />}
              { logged ? null : <NavButton label="Sign In" onPress={redirect('register')} />}
              { logged ? <NavButton label="Log out" onPress={logOut} /> : null }
            </>
          </NavBoxRight>
        </>
      </NavBarContents>
    </div>
  )
}