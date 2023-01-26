import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Login/Signup";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentForm, setCurrentForm] = useState('login');
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  ;}
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      <Navbar  />
      
      <Routes>
        <Route exact path="/login" element=  {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Signup onFormSwitch={toggleForm}  />} />
        <Route exact path="/bookshelf" element={<Main />} />
        <Route exact path="/home" element={<Home  />} />
      </Routes>
    </div>
  );
}


export default App;
