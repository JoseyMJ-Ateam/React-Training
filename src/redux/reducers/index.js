
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
import userDetailsReducer from './userDetailsReducer';

const allReducers = combineReducers({
    authReducer,
    userReducer,
    albumReducer,
    userDetailsReducer
});

export default allReducers;