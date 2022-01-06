import { DropdownItem } from './DropdownItem';
import { redirect } from '../navbarFunc'

import './Dropdown.css';

export function Dropdown():JSX.Element {
  return (
    <div className='dropdown'>
      <DropdownItem label="Home" onPress={redirect('home')} />
      <DropdownItem label="About" onPress={redirect('about')} />
      <DropdownItem label="Log In" onPress={redirect('log in')} />
      <DropdownItem label="Friends" onPress={redirect('friends')} />
      <DropdownItem label="Recent" onPress={redirect('recent')} />
      <DropdownItem label="Pinned" onPress={redirect('pinned')} />
    </div>
  )
}