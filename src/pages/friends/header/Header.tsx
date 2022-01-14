import './Header.css'
import { SearchBar } from '../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar'
import { Button } from '../../../utilities/components/button/Button'
import { addFriend, editProfilePicture, editProfileUsername } from '../../../utilities/functions/globalFunctions'

import defaultpicture from './default.png'

const User = {
  username: "JohnDoe",
}

export function Header(): JSX.Element {
  return (
    <div className="friends-header">
      <div className='account-box box'>
        <div className='profile-picture-box'>
          <img src={defaultpicture} alt="profile picture" width="72px"/>
          <div className='picture-button'>
            <Button label="edit" width="6rem" onPress={editProfilePicture()}/>
          </div>
        </div>
        <div className='profile-name-box'>
          <p className='username'>{User.username}</p>
          <Button label="edit" width="4rem" onPress={editProfileUsername()}/>
        </div>
      </div>
      <div className='friend-box box'>
        <SearchBar placeholder="name.." name="friend-name"/>
        {/* will repeat to display FriendTab component with info from server */}
        <Button label="add friend" width="8rem" onPress={addFriend('friend1')}/>
      </div>
    </div>
  )
}