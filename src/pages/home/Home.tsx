import { NavBar } from "./components/navbar/NavBar";
import { Header } from "./components/header/Header";

import './Home.css';

export function Home():JSX.Element {
  return (
    <div>
      <NavBar/>
      <Header/>
    </div>
  )
}