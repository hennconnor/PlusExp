import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useRecoilState } from "recoil"
import { userState } from "./atoms"

import NavBar from "./Components/NavBar";
import Home from "./Page/Home"
import Login from "./Page/Login"
import TaskListPage from "./Page/TaskListPage";
import LogoutModal from "./Components/LogoutModal";
import LevelsPage from './Page/LevelsPage';





function App() {

  function handleLogoutClick() {
    setLogoutModal(!logoutModal)
  }


  const [user, setUser] = useRecoilState(userState);
  const [logoutModal, setLogoutModal] = useState(false);

  useEffect(() => {
    fetch('/me').then((response) => {
      if (response.ok) {
        response.json().then((currentUser) => setUser(currentUser))
      }
    });
  }, []);
  return (
    <div >
      <NavBar handleLogoutClick={handleLogoutClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/tasklist" element={<TaskListPage />} />
        <Route path="/levelspage" element={<LevelsPage />} />
      </Routes>
      {logoutModal && <LogoutModal handleLogoutClick={handleLogoutClick} />}
      {logoutModal && <div id='overlay' className='fixed bg-black opacity-40 inset-0 z-0'></div>}
    </div>
  );
}

export default App;
