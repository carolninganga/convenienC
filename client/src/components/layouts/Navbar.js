import React, { Fragment, useContext } from 'react';
import AuthContext from '../../context/auth/authContext';
import BusinessContext from '../../context/business/BusinessContext';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const businessContext = useContext(BusinessContext);

    const { isAuthenticated, logout, user } = authContext;
    const { clearBusinesses } = businessContext;

    const onLogout = () => {
        logout();
        clearBusinesses();
    }

    const authLinks = (
        <Fragment>
            <li>Hello { user && user.name }</li>
            <li>
                <a onClick={onLogout} href="#!">
                    <i className="fas fa-sign-out-alt"></i> <span className="hide-sm">Logout</span>
                </a>
            </li>
        </Fragment>
    );

    const guestLinks = (
        <Fragment>
             <li>
                <Link to='/register'>Business Register</Link>
            </li>
            <li>
                <Link to='/login'>Business Login</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
        </Fragment>
    );

    return (
        <div className='navbar bg-primary'>
            <h1>
                <i className={icon} /> {title}
            </h1>
            <ul>
                {isAuthenticated ? authLinks : guestLinks}
            </ul>
    
            
        </div>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string,
}

Navbar.defaultProps = {
    title: 'ConvenienC',
    icon: 'fas fa-id-card-alt'
}

export default Navbar;