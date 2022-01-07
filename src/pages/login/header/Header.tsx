import { SearchBar } from "../../../utilities/components/navbar/searchbar/SearchBar";
import { redirect, submitLogin } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import "./Header.css"

export function Header():JSX.Element {
  return (
    <div className="login-header">
      <div className="main-login-body">
        <h3 className="header-text">Log in</h3>
        <div className="login-box">
          <p className="input-text">Username</p>
          <SearchBar placeholder="username.." name="username"/>
        </div>
        <div className="login-box">
          <p className="input-text">Password</p>
          <SearchBar placeholder="password.." name="password"/>
        </div>
        <div className="login-box">
          <div className="button-box">
            <div className="button">
              <DropdownItem label='submit' onPress={submitLogin()}/>
            </div>
            <div className="button">
              <DropdownItem label='create account' onPress={redirect('register')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}