
let initialState = {
    isLoading: false,
    album: [],
    errorMessgae: ''
}


export default function albumReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_ALBUM_DATA_BEGINS':
            return { ...state, isLoading: true }
        case 'GET_ALBUM_DATA_SUCCESS':
            return {
                ...state, isLoading: false,
                album: action.data
            }
        case 'GET_ALBUM_DATA_FAILS':
            return { ...state, isLoading: false, 
                     errorMessgae: action.data }
        default:
            return state;
    }

}
