import React,{useState} from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import './App.css';
import {TopBar} from './components/TopBar'
import {Home} from './components/Home'
import {Posts} from './components/Posts'
import {Write} from './components/Write'
import {Register} from './components/Register'
import {Login} from './components/Login'
import {Settings} from './components/Settings'
import {SinglePost} from './components/SinglePost'
import {Contact} from './components/Contact'
import {Logout} from './components/Logout'

function App() {
  const [user,setUser]=useState(true)

  return (
    <>
    <BrowserRouter>
      <TopBar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:postId" element={<SinglePost />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/write" element={ user ? <Write /> : <Register />} />
        <Route path="/settings" element={ user ? <Settings /> : <Register />} />
        <Route path="/login" element={ user ? <Home /> : <Login />} />
        <Route path="/register" element={ user ? <Home /> : <Register />} />
        <Route path="/logout" element={<Logout setUser={setUser} />} />

      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
