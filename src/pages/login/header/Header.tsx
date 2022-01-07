import { SearchBar } from "../../../utilities/components/navbar/searchbar/SearchBar";
import { redirect } from "../../../utilities/functions/globalFunctions";
import "./Header.css"

export function Header():JSX.Element {
  return (
    <div className="login-header">
      <div className="main-login-body">
        <h3>Log in</h3>
        <div className="login-box">
          <p className="input-text">Username</p>
          <SearchBar placeholder="username.." name="username"/>
        </div>
        <div className="login-box">
          <p className="input-text">Password</p>
          <SearchBar placeholder="password.." name="password"/>
        </div>
        <div className="login-box">
          <a className="register-redirect" onClick={redirect('register')}>Dont have an account?</a>
        </div>
      </div>
    </div>
  );
}