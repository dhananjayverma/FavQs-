import { login, register, getProfile, updateProfile } from '../../api/favqs';
import { LOGIN_SUCCESS, LOGOUT, REGISTER_SUCCESS, GET_PROFILE, UPDATE_PROFILE } from './types';

export const loginUser = (credentials) => async (dispatch) => {
  try {
    const { data } = await login(credentials);
    dispatch({ type: LOGIN_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = (user) => async (dispatch) => {
  try {
    const { data } = await register(user);
    dispatch({ type: REGISTER_SUCCESS, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const fetchProfile = (token) => async (dispatch) => {
  try {
    const { data } = await getProfile(token);
    dispatch({ type: GET_PROFILE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const updateUserProfile = (user, token) => async (dispatch) => {
  try {
    const { data } = await updateProfile(user, token);
    dispatch({ type: UPDATE_PROFILE, payload: data });
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = () => {
  return { type: LOGOUT };
};
