import "./NavButton.css"

//props passed when calling component
type Props = {
  label: string,
  onPress: () => void
}

export function NavButton({label, onPress}:Props): JSX.Element {
 return <button onClick={ onPress }>{ label }</button>
}