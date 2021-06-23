export const  getAlbumDataBegins =()=>{
    return {
        type:'GET_TABLE_DATA_BEGINS'
    }
}
export const  getAlbumDataSuccess =(data)=>{
    return {
        type:'GET_TABLE_DATA_SUCCESS',
        data
    }
}
export const getAlbumDataFail = (data)=>{
    return {
        type: 'GET_TABLE_DATA_FAILS',
        data
    }
}