import './DropdownItem.css'

type Props = {
  label: string,
  onPress: () => void
}

export function DropdownItem({label, onPress}:Props): JSX.Element {
  return <p className='menu-item' onClick={ onPress }>{ label }</p>
 }