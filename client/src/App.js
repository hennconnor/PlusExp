import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil"
import { userState } from "./atoms"

import NavBar from "./Components/NavBar";
import Home from "./Page/Home"
import Login from "./Page/Login"
import TaskListPage from "./Page/TaskListPage"
import Logout from "./Page/Logout"




function App() {
  const [user, setUser] = useRecoilState(userState);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((currentUser) => setUser(currentUser))
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
        <Route path="/tasklist" element={<TaskListPage />} />
      </Routes>

    </div>
  );
}

export default App;
