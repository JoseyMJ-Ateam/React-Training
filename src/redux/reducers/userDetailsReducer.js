let initialState = {
    isLoading: false,
    users: [],
    errorMessgae: ''
}

export default function userDetailsReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_USER_DETAILS_DATA_BEGINS':
            return { ...state, isLoading: true }
        case 'GET_USER_DETAILS_DATA_SUCCESS':
            return {
                ...state, isLoading: false,
                users: action.data
            }
        case 'GET_USER_DETAILS_DATA_FAILS':
            return { 
                ...state, isLoading: false, 
                errorMessgae: action.data 
            }
        case 'UPDATE_USER_DETAILS_BEGINS':
            return { ...state, isLoading:true}
        case 'UPDATE_USER_DETAILS_SUCCESS':
            return {
                ...state,
                isLoading:false,
                users: action.data 
            }  
        case 'UPDATE_USER_DETAILS_FAILS' :
            return {
                ...state, isLoading:false,
                errorMessgae:action.data
            }      
            default:
            return state;
    }
}