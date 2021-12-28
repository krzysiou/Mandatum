import logo from './logo.png';

export function Header(): JSX.Element {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="mandatum logo" width="300" height="300"/>
      </div>
      <div className="welcometext">
        <h1>Welcome to Mandatum</h1>
        <p>Connect with your friends through a website and share time by chatting</p>
      </div>
      <p></p>
    </div>
  )
}