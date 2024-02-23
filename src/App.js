import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import NavBar from './NavBar/nav';
import SignUp from './signUp/signup';
import LogIn from './logIn/login';
import Home from './Home/home';
import Dashboard from './dashboard/dashboard';
import Cart from './cart/cart';
import Bigitem from './itemBig/itemBig'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Ideally, you should verify the authentication status with the backend
    // Here, we simply check if isAuthenticated is stored in localStorage
    const authState = localStorage.getItem('isAuthenticated');
    setIsAuthenticated(authState === 'true'); // Ensure correct boolean conversion
  }, []);

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean);
    localStorage.setItem('isAuthenticated', boolean.toString()); // Store as a string
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={!isAuthenticated ? <LogIn setAuth={setAuth} /> : <Navigate replace to="/dashboard" />} />
        <Route path="/signup" element={!isAuthenticated ? <SignUp setAuth={setAuth} /> : <Navigate replace to="/dashboard" />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard setAuth={setAuth}/> : <Navigate replace to="/login" />} />
        <Route path="/cart" element={isAuthenticated ? <Cart setAuth={setAuth}/> : <Navigate replace to="/login" />} />
        <Route path="/" element={<Home />} />
        <Route path="/item/:itemId" element={<Bigitem />} />
        {/* Redirect to home if no match found */}
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
