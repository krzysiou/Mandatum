import { DropdownItem } from './dropdownitem/DropdownItem';
import { redirect } from '../../homeFunc'

import './Dropdown.css';

export function Dropdown():JSX.Element {
  return (
    <div className='dropdown'>
      <DropdownItem label="Home" onPress={redirect('home')} />
      <DropdownItem label="Log In" onPress={redirect('log in')} />
      <DropdownItem label="Register" onPress={redirect('register')} />
      <DropdownItem label="Friends" onPress={redirect('friends')} />
      <DropdownItem label="Recent" onPress={redirect('recent')} />
      <DropdownItem label="Pinned" onPress={redirect('pinned')} />
    </div>
  )
}