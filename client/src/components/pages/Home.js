




import React, { useContext,useEffect } from 'react'
import AuthContext from '../../context/auth/authContext'
import Card from '../../components/layouts/Card/Card';
const Home = () => {
    const authContext = useContext(AuthContext);

    useEffect(()=> {
        authContext.loadUser();
        // eslint-disable-next-line
    },[])
    return (
            <Card />
    )
}

export default Home;

















// import React, { useContext, useEffect } from 'react';
// import Businesses from '../businesses/Businesses';
// import BusinessForm from '../businesses/BusinessForm';
// import BusinessFilter from '../businesses/BusinessFilter';
// import AuthContext from '../../context/auth/authContext';
// import './Home.css';

// const Home = () => {
//   const authContext = useContext(AuthContext);

//   useEffect(() => {
//     authContext.loadUser();
//     // eslint-disable-next-line-next
//   }, []);

//   return (
//     <div className="grid-2">
//       <div>
//         <BusinessForm />
//       </div>
//       <div>
//         <BusinessFilter />
//         <Businesses />
//       </div>
//     </div>
//   );
// };

// export default Home;
