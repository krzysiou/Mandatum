import './PinnedElement.css';
import { Button } from '../../../../utilities/components/button/Button';
import { useState, useEffect } from 'react';
import { getCookie, setCookie } from '../../../../utilities/functions/cookies';
import { UserData } from '../../../../utilities/functions/globalFunctions';
import axios from 'axios';
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
//remove from pinned
async function removePin(name:string, decodeToken:(setUser: React.Dispatch<React.SetStateAction<UserData>>)=>void, setUser:React.Dispatch<React.SetStateAction<UserData>>){
  axios.post('http://localhost:3001/users/pinned/remove', {username: name}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
    .then(function(response){
      setCookie('accessToken', response.data.accessToken, 1);
      decodeToken(setUser);
    })
    .catch (function (error) {
      console.log(error);
    });
}
export function PinnedElement({id, decodeToken, setUser}:Props): JSX.Element {
  const [name, setName] = useState('');
  
  useEffect(() => {
    setFriendName(setName, id);
  }, []);

  return (
    <div className="pinned-element">
      <div className='friend-name cont'>{name}</div>
      <div className='friend-pin-button cont'>
        <Button label='remove' width='4rem' onPress={() => removePin(name, decodeToken, setUser)}/>
      </div>
    </div>
  );
}