import './FriendTab.css'
import { Button } from '../../../../utilities/components/button/Button'
import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../../../../utilities/functions/cookies'
import { UserData } from '../../../../utilities/functions/globalFunctions'
import axios from 'axios'

type Props = {
  name: string,
}

export function FriendTab({name}:Props): JSX.Element {
  const [label, setLabel] = useState('pin')
  let user:UserData = {id: '', username: '', friends:[], pinned:[], recent:[]}
  let propId:string = '';
  useEffect(() => {
    //decode token
    axios.post('http://localhost:3001/users/get', {}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
    .then(function (response) {
      const userToCopy:UserData = response.data.user as UserData;
      user = userToCopy;
    })
    .catch(function (error) {
      console.log(error);
    });
    //get id of prop
    axios.post('http://localhost:3001/users/get/id', {username: name}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
    .then(function (response) {
      propId = response.data.id;
      console.log(propId);
      //set label
      if(user.pinned.includes(propId)){
        console.log('yes');
        setLabel('unpin');
      }
      else {
        setLabel('pin');
      }
    })
    .catch (function (error) {
      console.log(error);
    });
  }, []);

  //add or remove pin based on pin state
  async function pin(){
    //if state is pinned
    if(label === 'pin') {
      axios.post('http://localhost:3001/users/pinned/add', {username: name}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
      .then(function (response) {
        setCookie('accessToken', response.data.accessToken, 1);
        setLabel('unpin');
      });
    }
    //if state is unpinned
    else if(label === 'unpin') {
      axios.post('http://localhost:3001/users/pinned/remove', {username: name}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
      .then(function (response) {
        setCookie('accessToken', response.data.accessToken, 1);
        setLabel('pin');
      });
    }
  }

  return (
    <div className="friend-tab">
      <div className='friend-name cont'>{name}</div>
      <div className='friend-pin-button cont'>
        <Button label={label} width='3rem' onPress={pin}/>
      </div>
    </div>
  )
}