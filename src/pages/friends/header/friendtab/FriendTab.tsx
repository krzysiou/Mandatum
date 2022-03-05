import './FriendTab.css'
import { Button } from '../../../../utilities/components/button/Button'
import { useState, useEffect } from 'react'
import { getCookie, setCookie } from '../../../../utilities/functions/cookies'
import { UserData } from '../../../../utilities/functions/globalFunctions'
import axios from 'axios'
//props of component
type Props = {
  id: string,
  decodeToken: (setUser: React.Dispatch<React.SetStateAction<UserData>>) => void,
  setUser: React.Dispatch<React.SetStateAction<UserData>>
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
//remove from friends
async function removeFriend(id:string, decodeToken:(setUser: React.Dispatch<React.SetStateAction<UserData>>)=>void, setUser:React.Dispatch<React.SetStateAction<UserData>>){
  axios.post('http://localhost:3001/users/remove', {id: id}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
  .then(function(response){
    setCookie('accessToken', response.data.accessToken, 1);
    decodeToken(setUser);
  })
  .catch (function (error) {
    console.log(error);
  });
}
//handles user click
export async function handleClick(id:string){
  axios.post('http://localhost:3001/users/click', {id: id}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
  .then(function(response){
    setCookie('accessToken', response.data.accessToken, 1);
  })
  .catch (function (error) {
    console.log(error);
  });
}

export function FriendTab({id, decodeToken, setUser}:Props): JSX.Element {
  const [name, setName] = useState('');
  const [label, setLabel] = useState('');

  setStartupValues(id, setLabel);
  
  useEffect(() => {
    setFriendName(setName, id);
  }, []);


  return (
    <div className="friend-tab">
      <div className='friend-name cont' onClick={()=>handleClick(id)}>{name}</div>
      <div className='friend-pin-button cont'>
        <Button label={label} width='3rem' onPress={() => pin(setLabel, label, name)}/>
        <Button label="X" width='2rem' onPress={() => removeFriend(id, decodeToken, setUser)}/>
      </div>
    </div>
  )
}