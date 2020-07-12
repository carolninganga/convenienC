import React, { Component } from "react";
//import { FormBtn } from '../../components/Form';
import { Redirect } from "react-router-dom";
import ClickBtn from "../../components/ClickBtn/ClickBtn";
import "./home-style.css";
// import businessSignUp from '../BusinessSignUp/BusinessSignUp';

class Home extends Component {
  state = {
    email: "",
    username: "",
    password: "",
    passwordConf: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state.email);
    }
  };

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="home-page">
          <ClickBtn
            disabled={!(this.state.email && this.state.password)}
            onClick={this.handleFormSubmit}
          >
            Business SignUp
          </ClickBtn>
          {this.props.user && this.props.user._id ? (
            <Redirect to="/home" />
          ) : (
            <></>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
