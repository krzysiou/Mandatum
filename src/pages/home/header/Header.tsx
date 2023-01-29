import { redirect } from '../../../utilities/functions/globalFunctions';
import logo from './logo.svg';
import './Header.css';

type Props = {
  log: boolean;
};

export function Header({ log }: Props): JSX.Element {
  return (
    <div className="home-header">
      <div className="main">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="welcometext">
          <h1>Welcome to Mandatum</h1>
          <p>
            Connect with your friends through a website and share time by
            chatting
          </p>
        </div>
      </div>
      <div className="description">
        <p>Try it out now and test many new features</p>
        {log ? null : (
          <a className="register-slogan" onClick={redirect('register')}>
            Create new account now
          </a>
        )}
      </div>
    </div>
  );
}
