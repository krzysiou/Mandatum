import { NavBar } from '../../utilities/components/navbar/NavBar';
import { Footer } from '../../utilities/components/footer/Footer';
import { Header } from './header/Header';
import { useState } from 'react';
import { checkCookie } from '../../utilities/functions/cookies';
import { logoutUser } from '../../utilities/functions/globalFunctions';

export function Home(): JSX.Element {
  
  const [logged, setLogged] = useState(checkCookie('accessToken'));

  return (
    <div className="home">
      <NavBar logged={logged} logOut={logoutUser(setLogged)}/>
      <Header log={logged}/>
      <Footer/>
    </div>
  );
}