import * as actions from '../constants';

export const  getNewsDataBegins =()=>{
    return {
        type:actions.GET_NEWS_DATA_BEGINS
    }
}
export const  getNewsDataSuccess =(data)=>{
    return {
        type:actions.GET_NEWS_DATA_SUCCESS,
        data
    }
}
export const getNewsDataFail = (data)=>{
    return {
        type: actions.GET_USER_DATA_FAILS,
        data
    }
}