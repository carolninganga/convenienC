
import React, { Component } from 'react';
import styles from'./styles.css';
import { FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom';
;

import React, { Component } from "react";
//import { FormBtn } from '../../components/Form';
import { Redirect } from "react-router-dom";
import ClickBtn from "../../components/ClickBtn/ClickBtn";
import "./home-style.css";

// import businessSignUp from '../BusinessSignUp/BusinessSignUp';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordConf: "",
    };
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      console.log(this.state.email);
    }
  };

  render() {
    return (

        <div className = "singup">
            <FormBtn

        <div>
            <ClickBtn

			    disabled={!(this.state.email && this.state.password)}
        className={styles.singup}onClick={this.handleFormSubmit}
        
				>
<<<<<<< HEAD
				
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
                Business SignUp
        </button>
		    </FormBtn>
        
=======
				Business SignUp
		    </ClickBtn>
>>>>>>> 6df25ff9354830cd3ce10c337b2873de7e6be282
            {this.props.user && this.props.user._id ? <Redirect to='/home' /> : <></>}
        </div>   
       
       
    )}   
};
 
export default Home;
=======
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
>>>>>>> a065f2a94bb9f05215c0dd5357dbe4b9bccc82f6
