import { NavBar } from "../../utilities/navbar/NavBar"
import { NavBoxLeft } from "../../utilities/navbar/navboxleft/NavBoxLeft"
import { NavBoxRight } from "../../utilities/navbar/navboxright/NavBoxRight"
import { NavButton } from "../../utilities/navbar/navbutton/NavButton"
import { DropdownHeader } from "../../utilities/dropdown/dropdownheader/DropdownHeader"
import { Dropdown } from "../../utilities/dropdown/Dropdown"
import { DropdownItem } from "../../utilities/dropdown/dropdownitem/DropdownItem"
import { Header } from "./header/Header"
import { Footer } from "../../utilities/footer/Footer"
import { Logo } from "../../utilities/logo/Logo"
import { redirect } from "./homeFunc"
import { useState } from "react";

export function Home(): JSX.Element {

  const [open, setOpen] = useState(false);

  function changeOpen() {
    return () => setOpen(!open);
  }

  return (
    <div className="home">
      <NavBar>
        <>
          <NavBoxLeft>
            <>
              <Logo/>
              <div className="search">
                <input type="text" placeholder="Search.." name="search"/>
              </div>
              <NavButton label="Friends"  onPress={redirect("friends")}/>
              <NavButton label="Recent" onPress={redirect("recent")}/>
              <NavButton label="Pinned" onPress={redirect("pinned")}/>
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
            </>
          </NavBoxLeft>
          <NavBoxRight>
            <>
              <NavButton label="Home"  onPress={redirect("home")}/>
              <NavButton label="Log in" onPress={redirect("login")}/>
              <NavButton label="Register" onPress={redirect("register")}/>
            </>
          </NavBoxRight>
        </>
      </NavBar>
      <Header/>
      <Footer/>
    </div>
  )
}