import * as actions from '../constants';

export const  getPostDataBegins =()=>{
    return {
        type:actions.GET_POST_DATA_BEGINS
    }
}
export const  getPostDataSuccess =(data)=>{
    return {
        type:actions.GET_POST_DATA_SUCCESS,
        data
    }
}
export const getPostDataFail = (data)=>{
    return {
        type: actions.GET_POST_DATA_FAILS,
        data
    }
}
export const  deletePostBegins =()=>{
    return {
        type:actions.DELETE_POST_BEGINS
    }
}
export const deletePostSuccess = (data)=>{
    return {
        type: actions.DELETE_POST_SUCCESS,
        data
    }
}
export const deletePostFail = (data)=>{
    return {
        type: actions.DELETE_POST_FAILS,
        data
    }
}
export const postSelectedData = ()=>{
    return {
        type: actions.POST_SELECTED,
        
    }
}