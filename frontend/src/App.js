import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter , Routes, Route } from 'react-router-dom';

import NavBar from './NavBar/nav';
import SignUp from './signUp/signup';
import LogIn from './logIn/login';
import Home from './Home/home';
import CategoryNavBar from './NavBar/categoryNavbar';
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/Home' element={<Home/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<LogIn/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
//    <div style={{ backgroundColor: '#301B3F' }}>
//   <CategoryNavBar/>
//   </div>
// <div ><SignUp /></div>
// <div><LogIn/></div> 
