import { SearchBar } from "../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar";
import { Button } from "../../../utilities/components/button/Button";
import { redirect } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import { useState } from "react";
import axios from "axios";
import { setCookie } from "../../../utilities/functions/cookies";
import "./Header.css"

export function Header():JSX.Element {
  //error state
  const [errorMessage, setError] = useState('');
  //login user function
  async function Login() {
    const userToLogin = {
      username: (document.getElementById('username') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    };
      //login user request
      axios.post('http://localhost:3001/users/login', userToLogin)
      .then(function (response) {
        setCookie('accessToken', response.data.accessToken, 1);
        redirect('home')();
      })
      .catch(function (error) {
        setError(error.response.data.error);
      });
  }

  return (
    <div className="login-header">
      <div className="side-login-body">
        <div className="login-box-right">
          <div className="button-box-right">
            <Button label="log in" width="8rem" onPress={Login}/>
            <Button label="create account" width="8rem" onPress={redirect('register')}/>
          </div>
        </div>
      </div>
      <div className="main-login-body">
        <h3 className="header-text">Log in</h3>
        { errorMessage && <p className="error-handler"> { errorMessage } </p> }
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
              <DropdownItem label='log in' onPress={Login}/>
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