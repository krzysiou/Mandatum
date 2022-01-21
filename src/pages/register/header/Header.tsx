import { Button } from "../../../utilities/components/button/Button";
import { SearchBar } from "../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar";
import { redirect } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import { setCookie } from "../../../utilities/functions/cookies";
import { useState } from "react";
import axios from "axios";
import { uuid } from "uuidv4";
import "./Header.css"

export function Header():JSX.Element {
  //error state
  const [errorMessage, setError] = useState('');
  //register user function
  async function Register() {
    const userToRegister = {
      id: uuid(),
      username: (document.getElementById('username') as HTMLInputElement).value,
      email: (document.getElementById('email') as HTMLInputElement).value,
      password: (document.getElementById('password') as HTMLInputElement).value,
    };
      //register user request
      axios.post('http://localhost:3001/users/register', userToRegister)
      .then(function (response) {
        setCookie('accessToken', response.data.accessToken, 1);
        redirect('home')();
      })
      .catch(function (error) {
        setError(error.response.data.error);
      });
  }

  return (
    <div className="register-header">
      <div className="side-register-body">
        <div className="register-box-right">
          <div className="button-box-right">
            <Button label="sign in" width="8rem" onPress={Register}/>
            <Button label="got account?" width="8rem" onPress={redirect('login')}/>
          </div>
        </div>
      </div>
      <div className="main-register-body">
        <h3 className="header-text">Sign In</h3>
        { errorMessage && <p className="error-handler"> { errorMessage } </p> }
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
          <SearchBar placeholder="password.." name="password" password={true}/>
        </div>
        <div className="register-box">
          <div className="button-box">
            <div className="button">
              <DropdownItem label='sign in' onPress={Register}/>
            </div>
            <div className="button">
              <DropdownItem label='got account?' onPress={redirect('login')}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}