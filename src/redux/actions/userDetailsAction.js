import * as actions from '../constants';

export const  getUserDetailsBegins =()=>{
    return {
        type:actions.GET_USER_DETAILS_DATA_BEGINS
    }
}
export const  getUserDetailsSuccess =(data)=>{
    return {
        type:actions.GET_USER_DETAILS_DATA_SUCCESS,
        data
    }
}
export const getUserDetailsFail = (data)=>{
    return {
        type: actions.GET_USER_DETAILS_DATA_FAILS,
        data
    }
}
export const  updateUserDetailsBegins =()=>{
    return {
        type:actions.UPDATE_USER_DETAILS_BEGINS
    }
}
export const updateUserDetailsSuccess = (data)=>{
    return {
        type: actions.UPDATE_USER_DETAILS_SUCCESS,
        data
    }
}
export const updateUserDetailsFail = (data)=>{
    return {
        type: actions.UPDATE_USER_DETAILS_FAILS,
        data
    }
}