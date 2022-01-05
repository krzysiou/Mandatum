import "./NavButton.css"

type Props = {
  state?: boolean,
  label: string,
  onPress?: () => void,
  children?: JSX.Element
}

export function NavButton({state, label, onPress, children}:Props): JSX.Element {
  return <a onClick={ onPress }>{ label } { state && children }</a>
}