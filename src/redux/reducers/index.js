
import { combineReducers } from 'redux';
import authReducer from './authReducer';
import userReducer from './userReducer';
import postReducer from './postReducer';
import albumReducer from './albumReducer';
import postDetailsReducer from './postDetailsReducer';
import colorSettingReducer from './colorSettingReducer';
import newsReducer from './newsReducer';
import { snackbarReducer } from './snackbarReducer';
import { notifyReducer } from './notifyReducer';

const allReducers = combineReducers({
    authReducer,
    postReducer,
    userReducer,
    albumReducer,
    newsReducer,
    postDetailsReducer,
    colorSettingReducer,
    snackbarReducer,
    notifyReducer
});

export default allReducers;