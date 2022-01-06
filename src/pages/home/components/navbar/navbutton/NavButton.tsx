import "./NavButton.css"

type Props = {
  label: string,
  state?: boolean,
  onPress?: () => void,
  children?: JSX.Element
}

export function NavButton({state, label, onPress, children}:Props): JSX.Element {
  return <a className='nav-button' onClick={ onPress }>{ label } { state && children }</a>
}