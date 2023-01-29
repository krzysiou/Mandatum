import './NavBoxRight.css';

type Props = {
  children: JSX.Element,
}

export function NavBoxRight({children}:Props): JSX.Element {
  return <div className='nav-box-right'>{ children }</div>;
}