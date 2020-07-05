import React from 'react';
// import logo from './logo.svg';
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route } from 'react-router-dom';
import BusinessSignUp from './pages/BusinessSignUp/BusinessSignUp';
import BusinessAuthentication from './pages/BusinessAuthentication/BusinessAuthentication';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import OurTeam from './pages/OurTeam/OurTeam';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/' component={Home} />
      <Route path='/businessSignUp' component={BusinessSignUp} />
      <Route path='/businessAuthentication' component={BusinessAuthentication} />
      <Route path='/login' component={Login} />
      <Route path='/ourTeam' component={OurTeam} />
    </BrowserRouter> 
  );
}


export default App;
