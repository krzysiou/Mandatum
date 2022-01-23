import './Header.css'
import { SearchBar } from '../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar'
import { Button } from '../../../utilities/components/button/Button'
import { editProfile } from '../../../utilities/functions/globalFunctions'
import { useState, useEffect } from 'react'
import { FriendTab } from './friendtab/FriendTab'
import { setCookie, getCookie } from '../../../utilities/functions/cookies'
import axios from 'axios'

export function Header(): JSX.Element {

  const [message, setMessage] = useState('');
  const [user, setUser] = useState({id: '', username: '', friends: [], pined: [], recent: []});

  useEffect(()=>{
    //get user data
      axios.post('http://localhost:3001/users/get', {}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
      .then(function (response) {
        if(user != response.data.user){
          setUser(response.data.user);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  async function addFriend() {
    const friendToAdd = {
      username: (document.getElementById('add-friend') as HTMLInputElement).value,
    };
    //add friend request with authorization
    axios.post('http://localhost:3001/users/add', friendToAdd, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
    .then(function (response) {
      setCookie('accessToken', response.data.accessToken, 1);
      setMessage(response.data.message);
    })
    .catch(function (error) {
      setMessage(error.response.data.error);
    });
  }

  return (
    <div className="friends-header">
      <div className='account-box box'>
        <div className='profile'>
          <p className='username'>{user.username}</p>
        </div>
        <Button label="edit" width="4rem" onPress={editProfile()}/>
      </div>
      <div className='friend-box box'>
        <div className='search-bar-name'>
          <SearchBar placeholder="search name.." name="friend-name"/>
        </div>
        <div className='friend-box-container'>
          <FriendTab name="Thomas Evans"/>
        </div>
        { message && <p className="message-handler"> { message } </p> }
        <SearchBar placeholder="add friend.." name="add-friend"/>
        <Button label="add friend" width="8rem" onPress={addFriend}/>
      </div>
    </div>
  )
}