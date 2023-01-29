import './NavBarContents.css';

type Props = {
  children: JSX.Element
}

export function NavBarContents({children}:Props):JSX.Element {
  
  return (
    <div className="navbar">
      {children}
    </div>
  );
}