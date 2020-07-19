import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import LandingPage from './components/pages/LandingPage';
import BusinessVerification from './components/pages/BusinessVerification';
import BusinessItem from './components/businesses/BusinessItem';

import Navbar from './components/layouts/Navbar';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Alerts from './components/layouts/Alerts';
import PrivateRoute from './components/routing/PrivateRoute';

import BusinessState from './context/business/BusinessState';
import AuthState from './context/auth/AuthState';
import AlertState from './context/alert/AlertState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <BusinessState>
        <AlertState>
          <Router>
            <Fragment>
              <Navbar />
              <div className="container">
                <Alerts />
                <Switch>
                  <PrivateRoute exact path="/" component={Home} />
                  <Route exact path="/landingPage" component={LandingPage} />
                  <Route exact path="/businessVerification" component={BusinessVerification} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/businessItem" component={BusinessItem} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/login" component={Login} />
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertState>
      </BusinessState>
    </AuthState>
  );
};

export default App;
