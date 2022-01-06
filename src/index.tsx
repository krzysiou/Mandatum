import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "./utilities/footer/Footer";
import { Home } from "./pages/home/Home";
import { NavBar } from "./utilities/navbar/NavBar";
import { Login } from "./pages/login/Login";

import './styles.css';

const rootElement = document.getElementById("root");
render(
  <div className="App">
    <NavBar/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    <Footer/>
  </div>,
  rootElement
);
