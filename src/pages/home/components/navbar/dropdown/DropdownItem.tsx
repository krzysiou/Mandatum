import './DropdownItem.css'

type Props = {
  label: string,
  onPress: () => void
}

export function DropdownItem({label, onPress}:Props): JSX.Element {
  return <a className='menu-item' href="#" onClick={ onPress }>{ label }</a>
 }