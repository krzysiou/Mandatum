import "./DropdownHeader.css"

type Props = {
  label: string,
  state: boolean,
  onPress: () => void,
  children: JSX.Element
}

export function DropdownHeader({state, label, onPress, children}:Props): JSX.Element {
  return <a className="menu-header" style={ {borderBottom: state ? '1px solid #1691a1' : '', padding: state ? '0 2em' : '' } } onClick={ onPress }>{ label } { state && children }</a>
}