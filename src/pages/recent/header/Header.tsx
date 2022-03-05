import { useState, useEffect } from "react";
import { UserData } from "../../../utilities/functions/globalFunctions";
import axios from "axios";
import { getCookie } from "../../../utilities/functions/cookies";
import { RecentElement } from "./recentelement/RecentElement";

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
  const listOfRecent = user.recent.map((id) => {
   return <RecentElement id={id} key={id} decodeToken={decodeToken} setUser={setUser}/>
 });

  return (
    <div className="pinned-header">
      { user.recent.length !== 0
      ?
      <div className="cont-pinned">
        <div className='pinned-box-container'>{listOfRecent}</div>
      </div>
      :
      <>
      <h1 className="header-msg">Oops . .</h1>
       <p className="header-parag">Seems like u havent <b>texted</b> anyone yet.<br/>Visit <b>Friends</b> page to chat with someone!</p>
      </>}
    </div>
  );
}