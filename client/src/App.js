import React from "react";
// import logo from './logo.svg';
//import LoginBtn from "./components/LoginBtn";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BusinessSignUp from "./pages/BusinessSignUp/BusinessSignUp";
import BusinessConfirmation from "./pages/BusinessConfirmation/BusinessConfirmation";
import BusinessConfirmationMessage from "./pages/BusinessConfirmationMessage/BusinessConfirmationMessage";
import UserSignUp from "./pages/UserSignUp/UserSignUp";
import Login from "./pages/Login/Login";
import Home from "./pages/Home";
import OurTeam from "./pages/OurTeam/OurTeam";
import "./App.css";

class App extends React.Component {
  state = {
    user: {},
    yelp: [],
  };

  componentDidMount() {}

  setLoading = (val) => console.log(val);
  setAlertInfo = (val) => console.log(val);

  render() {
    return (
      <BrowserRouter>
        {/* <LoginBtn />  */}

        <Navbar />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Home {...props} user={this.state.user} yelp={this.state.yelp} />
            )}
          />

          <Route
            exact
            path="/businessSignUp"
            render={(props) => (
              <BusinessSignUp
                {...props}
                setLoading={this.setLoading}
                setAlertInfo={this.setAlertInfo}
              />
            )}
          />

          <Route
            exact
            path="/businessConfirmation"
            component={BusinessConfirmation}
          />
          <Route exact path="/userSignUp" component={UserSignUp} />
          <Route exact path="/businessConfirmationMessage" component={BusinessConfirmationMessage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/ourTeam" component={OurTeam} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
