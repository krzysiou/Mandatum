import './FriendTab.css'
import { Button } from '../../../../utilities/components/button/Button'
import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../../../../utilities/functions/cookies'
import axios from 'axios'
//props of component
type Props = {
  id: string,
}
//set name of friend
async function setFriendName(setName:React.Dispatch<React.SetStateAction<string>>, id:string){
  axios.post('http://localhost:3001/users/get/username', {id: id}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
  .then(function (response) {
    setName(response.data.username);
  })
  .catch (function (error) {
    console.log(error);
  });
}
//set values
async function setStartupValues(id: string, setLabel:React.Dispatch<React.SetStateAction<string>>) {
  axios.post('http://localhost:3001/users/get', {}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
  .then(function (response) {
    if (response.data.user.pinned.includes(id)){
      setLabel('unpin');
    } else {
      setLabel('pin');
    }
  })
  .catch(function (error) {
    console.log(error);
  });
}
//add or remove pin based on pin state
async function pin(setLabel:React.Dispatch<React.SetStateAction<string>>, label:string, name: string){
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

export function FriendTab({id}:Props): JSX.Element {
  const [name, setName] = useState('');
  const [label, setLabel] = useState('');

  setStartupValues(id, setLabel);
  
  useEffect(() => {
    setFriendName(setName, id);
  }, []);


  return (
    <div className="friend-tab">
      <div className='friend-name cont'>{name}</div>
      <div className='friend-pin-button cont'>
        <Button label={label} width='3rem' onPress={() => pin(setLabel, label, name)}/>
      </div>
    </div>
  )
}