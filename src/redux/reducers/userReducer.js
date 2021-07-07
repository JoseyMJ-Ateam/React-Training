let initialState = {
    isLoading: false,
    users: [],
    errorMessgae: ''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_USER_DATA_BEGINS':
            return { ...state, isLoading: true }
        case 'GET_USER_DATA_SUCCESS':
            return {
                ...state, isLoading: false,
                users: action.data
            }
        case 'GET_USER_DATA_FAILS':
            return { ...state, isLoading: false, errorMessage: action.data }
        case 'DELETE _USER_BEGINS':
            return { ...state, isLoading: true }
        case 'DELETE_USER_SUCCESS':
            return {
                ...state,
                isLoading:false,
                users: action.data
            }
        case 'DELETE_USER_FAILS':
                return { ...state, isLoading: false, errorMessage: action.data }
        case 'USER_SELECTED':
            return {
                ...state                
            }
        default:
            return state;
    }

}
