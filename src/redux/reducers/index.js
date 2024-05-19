import { combineReducers } from 'redux';
import authReducer from './authReducer';
import quoteReducer from './quoteReducer';

export default combineReducers({
  auth: authReducer,
  quotes: quoteReducer,
});
