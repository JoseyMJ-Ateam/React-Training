import * as actions from '../constants';

let initialState = {
    isLoading: false,
    users: [],
    errorMessgae: ''
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case actions.GET_USER_DATA_BEGINS:
            return { ...state, isLoading: true }
        case actions.GET_USER_DATA_SUCCESS:
            return {
                ...state, isLoading: false,
                users: action.data
            }
        case actions.GET_USER_DATA_FAILS:
            return { ...state, isLoading: false, errorMessage: action.data }
        case actions.DELETE_USER_BEGINS:
            return { ...state, isLoading: true }
        case actions.DELETE_USER_SUCCESS:
            return {
                ...state,
                isLoading:false,
                users: action.data
            }
        case actions.DELETE_USER_FAILS:
                return { ...state, isLoading: false, errorMessage: action.data }
        case actions.USER_SELECTED:
            return {
                ...state                
            }
        default:
            return state;
    }

}
