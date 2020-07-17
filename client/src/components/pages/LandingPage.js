import React from 'react';
import Businesses from '../businesses/Businesses';
//import BusinessForm from '../businesses/BusinessForm';
import BusinessFilter from '../businesses/BusinessFilter';
//import AuthContext from '../../context/auth/authContext';

 const LandingPage = () => {
    //  const authContext = useContext(AuthContext);

    //  useEffect(() => {
    //      authContext.loadUser();
    //      // eslint-disable-next-line-next
    //  }, []);


    return (
        <div className="grid-2">
           {/* <div><BusinessForm />
           </div>  */}
           <div>
                <BusinessFilter />
               <Businesses />
           </div>
        </div>
    )
}

export default LandingPage;
