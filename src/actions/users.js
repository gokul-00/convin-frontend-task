import {
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
} from "./types";

export const fetchUsersSuccess = (users) => ({
  type: FETCH_USERS_SUCCESS,
  payload: users,
});

export const fetchUsersFailure = (error) => ({
  type: FETCH_USERS_FAILURE,
  payload: error,
});

export const fetchUsers = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://reqres.in/api/users");
      const data = await response.json();
      console.log(data);
      dispatch(fetchUsersSuccess(data.data));
    } catch (error) {
      dispatch(fetchUsersFailure(error));
    }
  };
};

export const fetchUserSuccess = (user) => ({
  type: FETCH_USER_SUCCESS,
  payload: user,
});

export const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

export const fetchUser = (userId) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`https://reqres.in/api/users/${userId}`);
      const data = await response.json();
      console.log(data);
      dispatch(fetchUserSuccess(data.data));
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};
