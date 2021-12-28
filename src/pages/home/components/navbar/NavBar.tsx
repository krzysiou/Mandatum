import { NavButton } from "./components/navbutton/NavButton";

import './NavBar.css';

export function NavBar():JSX.Element {
  const redirect = (str: string) => {
    return () => alert("redirecting to " + str);
  }

  return (
    <div>
      <NavButton label="Home"  onPress={redirect("Home")}/>
      <NavButton label="About" onPress={redirect("About")}/>
      <NavButton label="Login" onPress={redirect("Login")}/>
    </div>
  )
}