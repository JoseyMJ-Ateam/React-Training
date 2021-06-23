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
export const updateUserDetailsData = (data)=>{
    return {
        type: 'UPDATE_USER_DETAILS',
        data
    }
}