import {
    GET_BUSINESSES,
    ADD_BUSINESS,
    DELETE_BUSINESS,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_BUSINESS,
    FILTER_BUSINESSES,
    CLEAR_FILTER,
    BUSINESS_ERROR,
    CLEAR_BUSINESSES
  } from '../types';
  
  export default (state, action) => {
    switch (action.type) {
      case GET_BUSINESSES:
        return {
          ...state,
          businesses: action.payload,
          loading: false
        };
      case ADD_BUSINESS:
        return {
          ...state,
          businesses: [action.payload, ...state.businesses],
          loading: false
        };
      case UPDATE_BUSINESS:
        return {
          ...state,
          businesses: state.businesses.map(business =>
            business._id === action.payload._id ? action.payload : business
          ),
          loading: false
        };
      case DELETE_BUSINESS:
        return {
          ...state,
          businesses: state.businesses.filter(
            business => business._id !== action.payload
          ),
          loading: false
        };
      case CLEAR_BUSINESSES:
        return {
          ...state,
          businesses: null,
          filtered: null,
          error: null,
          current: null
        };
      case SET_CURRENT:
        return {
          ...state,
          current: action.payload
        };
      case CLEAR_CURRENT:
        return {
          ...state,
          current: null
        };
      case FILTER_BUSINESSES:
        return {
          ...state,
          filtered: state.businesses.filter(business => {
            const regex = new RegExp(`${action.payload}`, 'gi');
            return business.name.match(regex) || business.email.match(regex);
          })
        };
      case CLEAR_FILTER:
        return {
          ...state,
          filtered: null
        };
      case BUSINESS_ERROR:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };