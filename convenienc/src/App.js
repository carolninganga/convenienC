import React from 'react';
// import logo from './logo.svg';
import LoginBtn from "./components/LoginBtn";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from 'react-router-dom';
import BusinessSignUp from './pages/BusinessSignUp/BusinessSignUp';
import Home from './pages/Home/Home';
import OurTeam from './pages/OurTeam/OurTeam';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LoginBtn /> 
      <Route exact path='/' component={Home} />
      <Route path='/businessSignUp' component={BusinessSignUp} />
      <Route path='/ourTeam' component={OurTeam} />
    </BrowserRouter> 
  );
}


export default App;
