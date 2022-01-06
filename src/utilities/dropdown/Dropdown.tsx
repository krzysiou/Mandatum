import { DropdownItem } from './dropdownitem/DropdownItem';
import { redirect } from '../../pages/home/homeFunc'

import './Dropdown.css';

type Props = {
  children: JSX.Element
}

export function Dropdown({children}:Props):JSX.Element {
  return (
    <div className='dropdown'>{children}</div>
  )
}