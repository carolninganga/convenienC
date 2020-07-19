import React, { useState, useContext, useEffect }from 'react';
import AuthContext from '../../context/auth/authContext';
import AlertContext from '../../context/alert/alertContext';
import bg from "../../asset/bg.png"



const Login = (props) => {
    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const { setAlert } = alertContext;
    const { login, error, clearErrors, isAuthenticated } = authContext;

    useEffect(() => {
        if(isAuthenticated) {
            props.history.push('/');
        }

        if(error === 'Invalid Credentials') {
         setAlert(error, 'danger');
         clearErrors();
    }

    // eslint-disable-next-line
}, [error, isAuthenticated, props.history]);


    const [user, setUser] = useState({
        email: '',
        password: '',
        
    });

    const { email, password } = user;

    const onChange = e => setUser ({...user, [e.target.name]: e.target.value });

    const onSubmit = e => {

//console.log("test")
        e.preventDefault();
        if(email === '' || password === '') {
            setAlert('Please fill in all fields', 'danger');
        } else {
            login({
                email,
                password
            });
        }       
    };

    return (

        <div className='row mt-4'>

        <div className="col-md-12 mb-4">
        <h2 className='font mb-3 mt-1 text-center'>
            <b>Let's exchange skills with <u><span className='orange-text text-accent-3 i-line' style={{color: "#ff5e62"}}>SkillShareSquad</span>
            </u>{" "}</b> 
            </h2>
        

     
        </div>

        <div className='col-md-6'>
          <img className='responsive-img' src={bg} alt="backgroundImg" />
        </div>


     
        <div className='col-md-6 mt-3' id="heading">


        <div className='form-container'>
        <h1 className="text-center">
            Account <span className="text-primary">Login</span>
        </h1>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input type="email" name="email" value={email} onChange={onChange} required />
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={password} onChange={onChange} required />
            </div>
            <input type="submit" value="Login" className="btn btn-primary btn-block" />
        </form>
            
        </div>
        </div>
    </div>
    )
}

export default Login;