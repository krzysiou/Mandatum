import { render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Blank } from "./pages/blank/blank";
import { Home } from "./pages/home/Home";
import { Login } from "./pages/login/Login";
import { Register } from "./pages/register/Register";

import './App.css';

//comment test1


//comment test 2
const rootElement = document.getElementById("root");
render(
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
    </BrowserRouter>
  </div>,
  rootElement
);
