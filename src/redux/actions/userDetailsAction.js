export const  getUserDetailsBegins =()=>{
    return {
        type:'GET_TABLE_DATA_BEGINS'
    }
}
export const  getUserDetailsSuccess =(data)=>{
    return {
        type:'GET_TABLE_DATA_SUCCESS',
        data
    }
}
export const getUserDetailsFail = (data)=>{
    return {
        type: 'GET_TABLE_DATA_FAILS',
        data
    }
}
export const  updateUserDetailsBegins =()=>{
    return {
        type:'UPDATE_USER_DETAILS_BEGINS'
    }
}
export const updateUserDetailsSuccess = (data)=>{
    return {
        type: 'UPDATE_USER_DETAILS_SUCCESS',
        data
    }
}
export const updateUserDetailsFail = (data)=>{
    return {
        type: 'UPDATE_USER_DETAILS_FAILS',
        data
    }
}