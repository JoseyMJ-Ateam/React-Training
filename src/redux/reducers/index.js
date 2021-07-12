
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import albumReducer from './albumReducer';
import userDetailsReducer from './userDetailsReducer';
import colorSettingReducer from './colorSettingReducer';
import newsReducer from './newsReducer';
import { snackbarReducer } from './snackbarReducer';

const allReducers = combineReducers({
    authReducer,
    userReducer,
    albumReducer,
    newsReducer,
    userDetailsReducer,
    colorSettingReducer,
    snackbarReducer
});

export default allReducers;