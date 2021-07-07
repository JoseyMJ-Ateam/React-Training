export const  getNewsDataBegins =()=>{
    return {
        type:'GET_NEWS_DATA_BEGINS'
    }
}
export const  getNewsDataSuccess =(data)=>{
    return {
        type:'GET_NEWS_DATA_SUCCESS',
        data
    }
}
export const getNewsDataFail = (data)=>{
    return {
        type: 'GET_NEWS_DATA_FAILS',
        data
    }
}