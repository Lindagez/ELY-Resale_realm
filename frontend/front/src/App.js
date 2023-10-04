import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css";
import { Login } from "./Login";
import { Registration } from "./Registration";
import { Dashboard } from "./Dashboard";
import { Landing } from "./Landing";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);

  function handleLogin() {
    setIsLoggedIn(true);
  }

  function toggleLoginPage() {
    setIsLoginPage(!isLoginPage);
  }

  return (
    <div className="App">
      {isLoggedIn ? (
        // <Dashboard />
        <Landing />
      ) : isLoginPage ? (
        <Login onLogin={handleLogin} togglePage={toggleLoginPage} />
      ) : (
        <Registration togglePage={toggleLoginPage} />
      )}
    </div>
	 
  );
};


export default App;
