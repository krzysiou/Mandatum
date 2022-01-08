import { NavBar } from "../../utilities/components/navbar/NavBar"
import { NavBoxLeft } from "../../utilities/components/navbar/navboxleft/NavBoxLeft"
import { NavBoxRight } from "../../utilities/components/navbar/navboxright/NavBoxRight"
import { NavButton } from "../../utilities/components/navbar/navbutton/NavButton"
import { DropdownHeader } from "../../utilities/components/dropdown/dropdownheader/DropdownHeader"
import { Dropdown } from "../../utilities/components/dropdown/Dropdown"
import { DropdownItem } from "../../utilities/components/dropdown/dropdownitem/DropdownItem"
import { Header } from "./header/Header"
import { Footer } from "../../utilities/components/footer/Footer"
import { Logo } from "../../utilities/components/navbar/logo/Logo"
import { SearchBar } from "../../utilities/components/navbar/searchbar/SearchBar"
import { redirect } from "../../utilities/functions/globalFunctions"
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
            <div className="left-left">
                <Logo/>
              </div>
              <div className="left-mid1">
                <SearchBar placeholder="Search.." name="search"/>
              </div>
              <NavButton label="Friends"  onPress={redirect("friends")}/>
              <NavButton label="Recent" onPress={redirect("recent")}/>
              <NavButton label="Pinned" onPress={redirect("pinned")}/>
              <div className="left-right">
                <DropdownHeader label="Menu" onPress={changeOpen()} state={open}>
                  <Dropdown>
                    <>
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
              <NavButton label="Log in" onPress={redirect("login")}/>
              <NavButton label="Sign In" onPress={redirect("register")}/>
            </>
          </NavBoxRight>
        </>
      </NavBar>
      <Header/>
      <Footer/>
    </div>
  )
}