export const  getUserDataBegins =()=>{
    return {
        type:'GET_TABLE_DATA_BEGINS'
    }
}
export const  getUserDataSuccess =(data)=>{
    return {
        type:'GET_TABLE_DATA_SUCCESS',
        data
    }
}
export const getUserDataFail = (data)=>{
    return {
        type: 'GET_TABLE_DATA_FAILS',
        data
    }
}

export const deleteUserData = (data)=>{
    return {
        type: 'DELETE_USER',
        data
    }
}

export const userSelectedData = ()=>{
    return {
        type: 'USER_SELECTED',
        
    }
}