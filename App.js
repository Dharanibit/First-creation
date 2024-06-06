import React from "react";
import './App.css';
import './index.css';
import LoginSignup from './Components/LoginSignup/LoginSignup';
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div >
      <Navbar/>
      <LoginSignup/>
    </div>
  );
}

export default App;
