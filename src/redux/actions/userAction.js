export const  getUserDataBegins =()=>{
    return {
        type:'GET_USER_DATA_BEGINS'
    }
}
export const  getUserDataSuccess =(data)=>{
    return {
        type:'GET_USER_DATA_SUCCESS',
        data
    }
}
export const getUserDataFail = (data)=>{
    return {
        type: 'GET_USER_DATA_FAILS',
        data
    }
}
export const  deleteUserBegins =()=>{
    return {
        type:'DELETE_USER_BEGINS'
    }
}
export const deleteUserSuccess = (data)=>{
    return {
        type: 'DELETE_USER_SUCCESS',
        data
    }
}
export const deleteUserFail = (data)=>{
    return {
        type: 'DELETE_USER_FAILS',
        data
    }
}
export const userSelectedData = ()=>{
    return {
        type: 'USER_SELECTED',
        
    }
}