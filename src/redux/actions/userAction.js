import * as actions from '../constants';

export const  getUserDataBegins =()=>{
    return {
        type:actions.GET_USER_DATA_BEGINS
    }
}
export const  getUserDataSuccess =(data)=>{
    return {
        type:actions.GET_USER_DATA_SUCCESS,
        data
    }
}
export const getUserDataFail = (data)=>{
    return {
        type: actions.GET_USER_DATA_FAILS,
        data
    }
}
export const  deleteUserBegins =()=>{
    return {
        type:actions.DELETE_USER_BEGINS
    }
}
export const deleteUserSuccess = (data)=>{
    return {
        type: actions.DELETE_USER_SUCCESS,
        data
    }
}
export const deleteUserFail = (data)=>{
    return {
        type: actions.DELETE_USER_FAILS,
        data
    }
}
