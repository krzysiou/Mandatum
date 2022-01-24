import './Header.css'
import { SearchBar } from '../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar'
import { Button } from '../../../utilities/components/button/Button'
import { useState, useEffect } from 'react'
import { FriendTab } from './friendtab/FriendTab'
import { setCookie, getCookie } from '../../../utilities/functions/cookies'
import { Dialog } from '@headlessui/react'
import { UserData } from '../../../utilities/functions/globalFunctions'
import axios from 'axios'

export function Header(): JSX.Element {
  //hooks
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState<UserData>({id: '', username: '', friends: [], pinned: [], recent: []});
  //get user data once at page reload
  useEffect(()=>{
      axios.post('http://localhost:3001/users/get', {}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
      .then(function (response) {
        if(user != response.data.user){
          setUser(response.data.user as UserData);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  //change your username
  async function changeUsername() {
    axios.patch('http://localhost:3001/users/patch/username', {username: (document.getElementById('update-username') as HTMLInputElement).value,}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
    .then(function (response) {
      setCookie('accessToken', response.data.accessToken, 1);
      user.username = response.data.newUsername;
      setIsOpen(false);
    })
    .catch(function (error) {
      console.log(error)
      setIsOpen(false);
    });
  }
  //add friend
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
        <Button label="edit" width="4rem" onPress={()=>setIsOpen(prev => !prev)}/>
      </div>
        <Dialog className="dialog" open={isOpen} onClose={() => setIsOpen(false)}>
          <Dialog.Overlay className="dialog-overlay" />
          <Dialog.Title className="dialog-title">Change your username</Dialog.Title>
          <SearchBar placeholder="new username.." name="update-username"/>
          <div className='popup-buttons'>
            <Button label="submit" width="4rem" onPress={changeUsername}/>
            <Button label="cancel" width="4rem" onPress={()=>setIsOpen(false)}/>
          </div>
        </Dialog>
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