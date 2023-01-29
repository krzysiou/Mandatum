import { render } from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Blank } from './pages/blank/blank';
import { Home } from './pages/home/Home';
import { Login } from './pages/login/Login';
import { Register } from './pages/register/Register';
import { Friends } from './pages/friends/Friends';
import { Recent } from './pages/recent/Recent';
import { Pinned } from './pages/pinned/Pinned';

import './index.css';

const rootElement = document.getElementById('root');
render(
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Blank/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/friends" element={<Friends/>}/>
        <Route path="/pinned" element={<Pinned/>}/>
        <Route path="/recent" element={<Recent/>}/>
      </Routes>
    </BrowserRouter>
  </div>,
  rootElement
);
