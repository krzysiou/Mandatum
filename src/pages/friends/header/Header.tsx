import './Header.css'
import { SearchBar } from '../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar'
import { Button } from '../../../utilities/components/button/Button'
import { addFriend, editProfile} from '../../../utilities/functions/globalFunctions'
import { FriendTab } from './friendtab/FriendTab'

import defaultpicture from './default.png'

const User = {
  username: "JohnDoe",
}

export function Header(): JSX.Element {
  return (
    <div className="friends-header">
      <div className='account-box box'>
        <div className='profile'>
          <div className='profile-picture-box'>
            <img src={defaultpicture} alt="profile picture" width="72px"/>
          </div>
          <p className='username'>{User.username}</p>
        </div>
        <Button label="edit" width="4rem" onPress={editProfile()}/>
      </div>
      <div className='friend-box box'>
        <div className='search-bar-name'>
          <SearchBar placeholder="search name.." name="friend-name"/>
        </div>
        <div className='friend-box-container'>
          <FriendTab/>
        </div>
        <SearchBar placeholder="add friend.." name="add-friend"/>
        <Button label="add friend" width="8rem" onPress={addFriend('friend1')}/>
      </div>
    </div>
  )
}