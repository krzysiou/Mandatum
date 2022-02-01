import { useState, useEffect } from "react";
import { UserData } from "../../../utilities/functions/globalFunctions";
import axios from "axios";
import { getCookie } from "../../../utilities/functions/cookies";
import { PinnedElement } from "./pinnedelement/PinnedElement";

import "./Header.css"

//decode and return token data
async function decodeToken(setUser:React.Dispatch<React.SetStateAction<UserData>>){
  axios.post('http://localhost:3001/users/get', {}, { headers: {'Authorization': `Bearer ${getCookie('accessToken')}`}})
  .then(function (response) {
    setUser(response.data.user as UserData);
  })
  .catch(function (error) {
    console.log(error);
  });
}

export function Header():JSX.Element {
  const [user, setUser] = useState<UserData>({id: '', username: '', friends: [], pinned: [], recent: []});
  useEffect(()=>{
    decodeToken(setUser);
  }, []);
  //map friend array
  const listOfFriends = user.pinned.map((id) => {
   return <PinnedElement id={id} key={id} decodeToken={decodeToken} setUser={setUser}/>
 });

  return (
    <div className="pinned-header">
      { user.pinned.length !== 0 ? <div className='friend-box-container'>{listOfFriends}</div> : <p>Empty</p>}
    </div>
  );
}