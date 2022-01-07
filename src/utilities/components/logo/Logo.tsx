import './Logo.css';
import logo from './logo.svg'

export function Logo(): JSX.Element {

  return (<img src={logo} alt="mandatum logo" className="icon" width='40px'/>);
}