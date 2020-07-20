import React, { useContext,useEffect } from 'react';
import AuthContext from '../../context/auth/authContext';
import Card from '../layout/Card/Card';
const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
        <div>                 
            <Card />
            </div>
    )
}

export default Home;