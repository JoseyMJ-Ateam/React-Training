let initialState = {
    isLoading: false,
    users: [],
    errorMessgae: ''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_TABLE_DATA_BEGINS':
            return { ...state, isLoading: true }
        case 'GET_TABLE_DATA_SUCCESS':
            return {
                ...state, isLoading: false,
                users: action.data
            }
        case 'GET_TABLE_DATA_FAILS':
            return { ...state, isLoading: false, errorMessgae: action.data }
        case 'DELETE_USER':
            return {
                ...state,
                isLoading:false,
                users: action.data
            }

        case 'USER_SELECTED':
            return {
                ...state                
            }
        default:
            return state;
    }

}
