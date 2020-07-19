import React, { useReducer } from 'react';
import axios from 'axios';
import BusinessContext from './BusinessContext';
import BusinessReducer from './BusinessReducer';

import {
    GET_BUSINESSES,
    ADD_BUSINESS,
    DELETE_BUSINESS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BUSINESS,
    CLEAR_FILTER,
    FILTER_BUSINESSES,
    CLEAR_BUSINESSES,
    BUSINESS_ERROR
} from '../types';


const BusinessState = props => {
    const initialState = {
        Businesses: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(BusinessReducer, initialState);

  
    const getBusinesses = async business => { 
        try {
            const res = await axios.get('/api/business'); 
            console.log(res);
            dispatch({ type: GET_BUSINESSES, payload: res.data })
        } catch (err) {
            dispatch({ type: BUSINESS_ERROR, payload: err.response.msg})
        }       
    }



    const addBusiness = async business => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/business', business, config); 
            console.log("test", res )
            dispatch({ type: ADD_BUSINESS, payload: res.data })
        } catch (err) {
            dispatch({ type: BUSINESS_ERROR, payload: err.response.msg})
        }
     
       
    }


    const deleteBusiness = async id => {
        try {
            await axios.delete(`/api/business/${id}`); 

            dispatch({ type: DELETE_BUSINESS, payload: id })
        } catch (err) {
            dispatch({ type: BUSINESS_ERROR, payload: err.response.msg})
        }
    }

 
    const updateBusiness = async business => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/business/${business._id}`, business, config); 
            dispatch({ type: UPDATE_BUSINESS, payload: res.data })
        } catch (err) {
            dispatch({ type: BUSINESS_ERROR, payload: err.response.msg})
        }
    }

    const clearBusinesses = () => {
        dispatch({ type: CLEAR_BUSINESSES })
    }


    const setCurrent = business => {
        dispatch({type: SET_CURRENT, payload: business })  
    }


    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})  
    }


    const filterBusinesses = text => {
        dispatch({type: FILTER_BUSINESSES, payload: text })  
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})  
    }

    return (
        <BusinessContext.Provider
            value={{
                businesses: state.businesses,
                current: state.current, 
                filtered: state.filtered,
                error: state.error, 
                addBusiness,
                deleteBusiness,
                setCurrent,
                clearCurrent,
                updateBusiness,
                filterBusinesses,
                clearFilter,
                getBusinesses,
                clearBusinesses
            }}
            >
                {props.children}
            </BusinessContext.Provider>
    );
};

export default BusinessState;





















// import React, { useReducer } from 'react';
// import axios from 'axios';
// import BusinessContext from './BusinessContext';
// import BusinessReducer from './BusinessReducer';

// import {
//   GET_BUSINESSES,
//   ADD_BUSINESS,
//   DELETE_BUSINESS,
//   SET_CURRENT,
//   CLEAR_CURRENT,
//   UPDATE_BUSINESS,
//   CLEAR_FILTER,
//   FILTER_BUSINESSES,
//   CLEAR_BUSINESSES,
//   BUSINESS_ERROR,
// } from '../types';

// const BusinessState = (props) => {
//   const initialState = {
//     businesses: null,
//     current: null,
//     filtered: null,
//     error: null,
//   };

//   console.log(props);

//   const [state, dispatch] = useReducer(BusinessReducer, initialState);

//   // Get Business
//   const getBusinesses = async (business) => {
//     try {
//       const res = await axios.get('/api/business');
//       dispatch({ type: GET_BUSINESSES, payload: res.data });
//     } catch (err) {
//       dispatch({ type: BUSINESS_ERROR, payload: err.response.msg });
//     }
//     // business.id = "id" + Math.random().toString(16).slice(2);
//   };

//   // Add Business
//   const addBusiness = async business => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const res = await axios.post('/api/business', business, config );
//       console.log(res);
//       dispatch({ type: ADD_BUSINESS, payload: res.data });
//     } catch (err) {
//       dispatch({ type: BUSINESS_ERROR, payload: err.message });
//     }
//     // business.id = "id" + Math.random().toString(16).slice(2);
//   };

//   // Delete Businees
//   const deleteBusiness = async (id) => {
//     try {
//       await axios.delete(`/api/business/${id}`);

//       dispatch({ type: DELETE_BUSINESS, payload: id });
//     } catch (err) {
//       dispatch({ type: BUSINESS_ERROR, payload: err.response.msg });
//     }
//   };

//   //Update Business
//   const updateBusiness = async business => {
//     const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };

//     try {
//       const res = await axios.put(
//         `/api/business/${business._id}`,
//         business,
//         config
//       );
//       dispatch({ type: UPDATE_BUSINESS, payload: res.data });
//     } catch (err) {
//       dispatch({ type: BUSINESS_ERROR, payload: err.response.msg });
//     }
//   };

//   // Clear business
//   const clearBusinesses = () => {
//     dispatch({ type: CLEAR_BUSINESSES });
//   };

//   // Set Current business
//   const setCurrent = (business) => {
//     dispatch({ type: SET_CURRENT, payload: business });
//   };

//   // Clear Current business
//   const clearCurrent = () => {
//     dispatch({ type: CLEAR_CURRENT });
//   };

//   // Filter business
//   const filterBusinesses = (text) => {
//     dispatch({ type: FILTER_BUSINESSES, payload: text });
//   };

//   //Clear filter
//   const clearFilter = () => {
//     dispatch({ type: CLEAR_FILTER });
//   };

//   return (
//     <BusinessContext.Provider
//       value={{
//         businesses: state.businesses,
//         current: state.current,
//         filtered: state.filtered,
//         error: state.error,
//         addBusiness,
//         deleteBusiness,
//         setCurrent,
//         clearCurrent,
//         updateBusiness,
//         filterBusinesses,
//         clearFilter,
//         getBusinesses,
//         clearBusinesses,
//       }}
//     >
//       {props.children}
//     </BusinessContext.Provider>
//   );
// };

// export default BusinessState;
