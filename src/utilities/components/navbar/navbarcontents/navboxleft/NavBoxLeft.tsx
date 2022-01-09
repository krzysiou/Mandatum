import "./NavBoxLeft.css"

type Props = {
  children: JSX.Element,
}

export function NavBoxLeft({children}:Props): JSX.Element {
  return <div className='nav-box-left'>{ children }</div>
}