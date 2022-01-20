import { SearchBar } from "../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar";
import { Button } from "../../../utilities/components/button/Button";
import { redirect, submitLogin } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import "./Header.css"

export function Header():JSX.Element {
  return (
    <div className="login-header">
      <div className="side-login-body">
        <div className="login-box-right">
          <div className="button-box-right">
            <Button label="log in" width="8rem" onPress={submitLogin()}/>
            <Button label="create account" width="8rem" onPress={redirect('register')}/>
          </div>
        </div>
      </div>
      <div className="main-login-body">
        <h3 className="header-text">Log in</h3>
        <div className="login-box">
          <p className="input-text">Username</p>
          <SearchBar placeholder="username.." name="username"/>
        </div>
        <div className="login-box">
          <p className="input-text">Password</p>
          <SearchBar placeholder="password.." name="password" password={true}/>
        </div>
        <div className="login-box">
          <div className="button-box">
            <div className="button">
              <DropdownItem label='log in' onPress={submitLogin()}/>
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