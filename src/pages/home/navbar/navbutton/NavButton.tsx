import "./NavButton.css"

type Props = {
  label: string,
  onPress?: () => void
}

export function NavButton({label, onPress}:Props): JSX.Element {
  return <a className='nav-button' onClick={ onPress }>{ label }</a>
}