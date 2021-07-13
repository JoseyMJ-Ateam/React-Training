import * as actions from '../constants';

export const  getPostDetailsBegins =()=>{
    return {
        type:actions.GET_POST_DETAILS_DATA_BEGINS
    }
}
export const  getPostDetailsSuccess =(data)=>{
    return {
        type:actions.GET_POST_DETAILS_DATA_SUCCESS,
        data
    }
}
export const getPostDetailsFail = (data)=>{
    return {
        type: actions.GET_POST_DETAILS_DATA_FAILS,
        data
    }
}
export const  updatePostDetailsBegins =()=>{
    return {
        type:actions.UPDATE_POST_DETAILS_BEGINS
    }
}
export const updatePostDetailsSuccess = (data)=>{
    return {
        type: actions.UPDATE_POST_DETAILS_SUCCESS,
        data
    }
}
export const updatePostDetailsFail = (data)=>{
    return {
        type: actions.UPDATE_POST_DETAILS_FAILS,
        data
    }
}