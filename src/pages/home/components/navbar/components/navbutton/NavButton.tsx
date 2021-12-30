import "./NavButton.css"

//props passed when calling component
type Props = {
  label: string,
  onPress: () => void
}

export function NavButton({label, onPress}:Props): JSX.Element {
 return <a onClick={ onPress }>{ label }</a>
}