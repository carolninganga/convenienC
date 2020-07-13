import React, { Component } from "react";
//import { FormBtn } from '../../components/Form';
import { Redirect } from "react-router-dom";
import HomeButtons from "../../components/HomeButtons/HomeButtons";
import "./home-style.css";
// import businessSignUp from '../BusinessSignUp/BusinessSignUp';

class Home extends Component {
  // state = {
  //   email: "",
  //   username: "",
  //   password: "",
  //   passwordConf: "",
  // };

  // handleFormSubmit = (event) => {
  //   event.preventDefault();
  //   if (this.state.email && this.state.password) {
  //   }
  // };

  render() {
    return (
      <div>
        <div className="home-page">
          <HomeButtons />
        </div>
      </div>
    );
  }
}

export default Home;
