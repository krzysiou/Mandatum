import { redirect } from '../homeFunc'
import "./Header.css"
import logo from './logo.svg'

export function Header(): JSX.Element {
  return (
    <div className="header-container">
      <div className="main">
        <div className="logo">
          <img src={logo} alt="logo"/>
        </div>
        <div className="welcometext">
          <h1>Welcome to Mandatum</h1>
          <p>Connect with your friends through a website and share time by chatting</p>
        </div>
      </div>
      <div className="description">
        <p>Try it out now and test many new features</p>
        <a className="register-slogan" onClick={redirect('register')}>Create new account now</a>
      </div>
    </div>
  )
}