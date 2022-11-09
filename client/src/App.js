import './App.css';

import React, { useEffect } from 'react'

import { Routes, Route } from "react-router-dom";

import { useRecoilState } from 'recoil'
import { currentUserState } from './atoms'

import NavBar from "./Components/NavBar";
import Home from "./Page/Home"
import Login from "./Page/Login"
import TaskList from "./Page/TaskList"
import Logout from "./Page/Logout"




function App() {

  const [currentUser, setCurrentUser] = useRecoilState(currentUserState)

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((user) => setCurrentUser(user))
      }
    });
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>

    </div>
  );
}

export default App;
