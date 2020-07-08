import React, { Component } from 'react';
import styles from'./styles.css';
import { FormBtn } from '../../components/Form';
import { Redirect } from 'react-router-dom';
;
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
        <div className = "singup">
            <FormBtn
			    disabled={!(this.state.email && this.state.password)}
				className={styles.singup}onClick={this.handleFormSubmit}
				>
				
                <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
                Business SignUp
        </button>
		    </FormBtn>
        
            {this.props.user && this.props.user._id ? <Redirect to='/home' /> : <></>}
        </div>   
       
       
    )}   
};
 
export default Home;