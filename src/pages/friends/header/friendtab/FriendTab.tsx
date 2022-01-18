import './FriendTab.css'
import { Button } from '../../../../utilities/components/button/Button'
export function FriendTab(): JSX.Element {
  return (
    <div className="friend-tab">
      <div className='friend-icon cont'>
        img
      </div>
      <div className='friend-name cont'>
        name
      </div>
      <div className='friend-pin-button cont'>
        <Button label='pin' width='2rem' onPress={()=>alert('pinned friend')}/>
      </div>
    </div>
  )
}