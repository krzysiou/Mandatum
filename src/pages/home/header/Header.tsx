import "./Header.css"
import logo from './logo.svg'

export function Header(): JSX.Element {
  return (
    <div className="main">
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="welcometext">
        <h1>Welcome to Mandatum</h1>
        <p>Ye dopdown test Testing paragraph Connect with your friends through a website and share time by chatting</p>
      </div>
      <p></p>
    </div>
  )
}