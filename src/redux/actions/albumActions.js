import * as actions from '../constants';

export const  getAlbumDataBegins =()=>{
    return {
        type:actions.GET_ALBUM_DATA_BEGINS
    }
}
export const  getAlbumDataSuccess =(data)=>{
    return {
        type:actions.GET_ALBUM_DATA_SUCCESS,
        data
    }
}
export const getAlbumDataFail = (data)=>{
    return {
        type: actions.GET_NEWS_DATA_FAILS,
        data
    }
}