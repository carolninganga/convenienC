import React, { useReducer } from 'react';
import axios from 'axios';
import ProfileContext from './profileContext';
import ProfileReducer from './profileReducer';

import {
    GET_PROFILES,
    ADD_PROFILE,
    DELETE_PROFILE,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_PROFILE,
    CLEAR_FILTER,
    FILTER_PROFILES,
    CLEAR_PROFILES,
    PROFILE_ERROR
} from '../types';


const ProfileState = props => {
    const initialState = {
        profiles: null,
        current: null,
        filtered: null,
        error: null
    };

    const [state, dispatch] = useReducer(ProfileReducer, initialState);

  
    const getProfiles = async profile => { 
        try {
            const res = await axios.get('/api/profile'); 
            console.log(res);
            dispatch({ type: GET_PROFILES, payload: res.data })
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg})
        }       
    }



    const addProfile = async profile => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/profile', profile, config); 
            dispatch({ type: ADD_PROFILE, payload: res.data })
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg})
        }
     
       
    }


    const deleteProfile = async id => {
        try {
            await axios.delete(`/api/profile/${id}`); 

            dispatch({ type: DELETE_PROFILE, payload: id })
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg})
        }
    }

 
    const updateProfile = async profile => {
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const res = await axios.put(`/api/profile/${profile._id}`, profile, config); 
            dispatch({ type: UPDATE_PROFILE, payload: res.data })
        } catch (err) {
            dispatch({ type: PROFILE_ERROR, payload: err.response.msg})
        }
    }

    const clearProfiles = () => {
        dispatch({ type: CLEAR_PROFILES })
    }


    const setCurrent = profile => {
        dispatch({type: SET_CURRENT, payload: profile })  
    }


    const clearCurrent = () => {
        dispatch({type: CLEAR_CURRENT})  
    }


    const filterProfiles = text => {
        dispatch({type: FILTER_PROFILES, payload: text })  
    }

    //Clear filter
    const clearFilter = () => {
        dispatch({type: CLEAR_FILTER})  
    }

    return (
        <ProfileContext.Provider
            value={{
                profiles: state.profiles,
                current: state.current, 
                filtered: state.filtered,
                error: state.error, 
                addProfile,
                deleteProfile,
                setCurrent,
                clearCurrent,
                updateProfile,
                filterProfiles,
                clearFilter,
                getProfiles,
                clearProfiles
            }}
            >
                {props.children}
            </ProfileContext.Provider>
    );
};

export default ProfileState;