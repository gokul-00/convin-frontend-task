import {
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE,
    FETCH_USER_SUCCESS,
    FETCH_USER_FAILURE
  } from '../actions/types';
  
  const initialState = {
    users: [],
    selectedUser: null,
    error: null
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case FETCH_USERS_SUCCESS:
        return {
          ...state,
          users: action.payload,
          error: null
        };
      case FETCH_USERS_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      case FETCH_USER_SUCCESS:
        return {
          ...state,
          selectedUser: action.payload,
          error: null
        };
      case FETCH_USER_FAILURE:
        return {
          ...state,
          error: action.payload
        };
      default:
        return state;
    }
  };
  