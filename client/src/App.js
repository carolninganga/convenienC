import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Navbar from './components/layout/Navbar';
import Register from './components/auth/Register';
import Profile from './components/pages/Profile';
import Login from './components/auth/Login'; 
import Detail from './components/pages/Detail';
import Alerts from './components/layout/Alerts';  
import PrivateRoute from './components/routing/PrivateRoute';
import BusinessVerification from './components/pages/BusinessVerification';

import ProfileState from './context/profile/ProfileState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState'; 
import setAuthToken from './utils/setAuthToken';
import './App.css';




if(localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
  <AuthState>
  <ProfileState>
  <AlertState>
    <Router>
      <Fragment>
        <Navbar />
          <div className="container">
          <Alerts />
            <Switch>
              <PrivateRoute exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/register' component={Register} />
              <Route exact path='/businessVerification' component={BusinessVerification} />

              <Route exact path='/login' component={Login} /> 
              <Route exact path="/profile" component={Profile}/>
              <Route exact path="/detail/:id" component={Detail}/>
            </Switch>
          </div>
      </Fragment>
    </Router>
    </AlertState>
  </ProfileState>
  </AuthState>
  );
}

export default App;