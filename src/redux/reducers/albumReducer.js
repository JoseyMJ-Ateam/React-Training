import * as actions from '../constants';

let initialState = {
    isLoading: false,
    album: [],
    errorMessgae: ''
}


export default function albumReducer(state = initialState, action) {

    switch (action.type) {
        case actions.GET_ALBUM_DATA_BEGINS:
            return { ...state, isLoading: true }
        case actions.GET_ALBUM_DATA_SUCCESS:
            return {
                ...state, isLoading: false,
                album: action.data
            }
        case actions.GET_ALBUM_DATA_FAILS:
            return { ...state, isLoading: false, 
                     errorMessgae: action.data }
        default:
            return state;
    }

}
