import { Button } from "../../../utilities/components/button/Button";
import { SearchBar } from "../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar";
import { redirect, submitRegister } from "../../../utilities/functions/globalFunctions";
import { DropdownItem } from "../../../utilities/components/dropdown/dropdownitem/DropdownItem";
import { setCookie } from "../../../utilities/functions/cookies";
import axios from "axios";
import { uuid } from "uuidv4";
import "./Header.css"

export function Header():JSX.Element {

  //register user

  //!!! PROBLEM with type assertions !!!
  async function Register() {
    const user = {
      id: uuid(),
      name: "john",//(document.getElementById('username') as HTMLInputElement).value,
      email: "john@gmail.com",//(document.getElementById('email') as HTMLInputElement).value,
      password: "123321"//(document.getElementById('password') as HTMLInputElement).value,
    };
    try {
      const response = await axios.post('http://localhost:3001/users/register', user);
      setCookie('accessToken', response.data.accessToken, 1);
    } catch (error) {
        console.log(error);
    };
  }

  return (
    <div className="register-header">
      <div className="side-register-body">
        <div className="register-box-right">
          <div className="button-box-right">
            <Button label="sign in" width="8rem" onPress={submitRegister()}/>
            <Button label="got account?" width="8rem" onPress={redirect('login')}/>
          </div>
        </div>
      </div>
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