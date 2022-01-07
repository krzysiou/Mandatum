import './NavBar.css';

type Props = {
  children: JSX.Element
}

export function NavBar({children}:Props):JSX.Element {
  
  return (
    <div className="navbar">
      {children}
    </div>
  )
}