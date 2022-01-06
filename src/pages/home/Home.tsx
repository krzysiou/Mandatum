import { NavBar } from "./navbar/NavBar";
import { Header } from "./header/Header";
import { Footer } from "../footer/Footer";
import './Home.css';

export function Home():JSX.Element {
  return (
    <div className="container">
      <NavBar/>
      <Header/>
      <Footer/>
    </div>
  )
}