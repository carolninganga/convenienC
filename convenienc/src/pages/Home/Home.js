import React, { Component } from 'react';
<<<<<<< HEAD
import styles from'./styles.css';
import { FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom';
;
=======
//import { FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom';
import ClickBtn from '../../components/ClickBtn';
>>>>>>> 6df25ff9354830cd3ce10c337b2873de7e6be282
// import businessSignUp from '../BusinessSignUp/BusinessSignUp';


class Home extends Component {
    constructor(props) {
		super(props);
		this.state = {
			email: '',
			username: '',
			password: '',
			passwordConf: ''
        };
    }

    handleFormSubmit = event => {
        event.preventDefault();
		if (this.state.email && this.state.password) {
			console.log(this.state.email);
    }
}

    render() {
    return (
<<<<<<< HEAD
        <div className = "singup">
            <FormBtn
=======
        <div>
            <ClickBtn
>>>>>>> 6df25ff9354830cd3ce10c337b2873de7e6be282
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