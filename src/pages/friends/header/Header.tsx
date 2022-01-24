import './Header.css'
import { SearchBar } from '../../../utilities/components/navbar/navbarcontents/searchbar/SearchBar'
import { Button } from '../../../utilities/components/button/Button'
import { useState, useEffect } from 'react'
import { FriendTab } from './friendtab/FriendTab'
import { setCookie, getCookie } from '../../../utilities/functions/cookies'
import { Dialog } from '@headlessui/react'
import axios from 'axios'

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
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
        <Button label="edit" width="4rem" onPress={()=>setIsOpen(prev => !prev)}/>
      </div>
      <Dialog className="dialog" open={isOpen} onClose={() => setIsOpen(false)}>
        <Dialog.Overlay />
        <Dialog.Title>Change your username</Dialog.Title>
        <SearchBar placeholder="new username.." name="update-username"/>
        <div className='popup-buttons'>
          <Button label="submit" width="4rem" onPress={()=>setIsOpen(false)}/>
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