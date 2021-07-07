
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
import userDetailsReducer from './userDetailsReducer';
import colorSettingReducer from './colorSettingReducer';

const allReducers = combineReducers({
    authReducer,
    userReducer,
    albumReducer,
    userDetailsReducer,
    colorSettingReducer
});

export default allReducers;