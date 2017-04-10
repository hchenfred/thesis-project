import { combineReducers } from 'redux';
import * as counterReducer from './counter';
import * as userReducer from './user';

export default combineReducers(Object.assign(
  counterReducer,
  userReducer,
));
