import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, GET_PROFILE, UPDATE_PROFILE } from '../actions/types';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };
    case LOGOUT:
      localStorage.removeItem('token');
      return {
        ...state,
        user: null,
        token: null,
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
