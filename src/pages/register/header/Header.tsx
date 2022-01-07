import { SearchBar } from "../../../utilities/components/navbar/searchbar/SearchBar";
import { redirect, submitLogin, submitRegister } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import "./Header.css"

export function Header():JSX.Element {
  return (
    <div className="register-header">
      <div className="main-register-body">
        <h3 className="header-text">Sign In</h3>
        <div className="register-box">
          <p className="input-text">e-mail</p>
          <SearchBar placeholder="e-mail.." name="email"/>
        </div>
        <div className="register-box">
          <p className="input-text">Username</p>
          <SearchBar placeholder="username.." name="username"/>
        </div>
        <div className="register-box">
          <p className="input-text">Password</p>
          <SearchBar placeholder="password.." name="password"/>
        </div>
        <div className="register-box">
          <div className="button-box">
            <div className="button">
              <DropdownItem label='sign in' onPress={submitRegister()}/>
            </div>
            <div className="button">
              <DropdownItem label='got account?' onPress={redirect('login')}/>
            </div>
          </div>
        </div>
      </div>
      <div className="side-register-body">
        <div className="register-box-right">
          <div className="button-box-right">
            <div className="button-right">
              <DropdownItem label='sign in' onPress={submitRegister()}/>
            </div>
            <div className="button-right">
              <DropdownItem label='got account?' onPress={redirect('login')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}