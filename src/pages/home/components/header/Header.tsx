import logo from './logo.png';

export function Header(): JSX.Element {
  return (
    <div>
      <div className="logo">
        <img src={logo} alt="mandatum logo" width="100" height="100"/>
      </div>
      <div className="welcometext">
        <h1>Welcome to Mandatum!</h1>
        <p>Connect with your friends through Mandatum and share time via chatting.</p>
      </div>
      <p></p>
    </div>
  )
}