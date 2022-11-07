import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Page/Home"

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <Routes>
        <Route path="/" element={<Home />} />
      </Routes> */}
    </div>
  );
}

export default App;
