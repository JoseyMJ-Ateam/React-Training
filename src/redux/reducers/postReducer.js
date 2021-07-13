import * as actions from '../constants';

let initialState = {
    isLoading: false,
    posts: [],
    errorMessgae: ''
}

export default function postReducer(state = initialState, action) {

    switch (action.type) {
        case actions.GET_POST_DATA_BEGINS:
            return { ...state, isLoading: true }
        case actions.GET_POST_DATA_SUCCESS:
            return {
                ...state, isLoading: false,
                posts: action.data
            }
        case actions.GET_POST_DATA_FAILS:
            return { ...state, isLoading: false, errorMessage: action.data }
        case actions.DELETE_POST_BEGINS:
            return { ...state, isLoading: true }
        case actions.DELETE_POST_SUCCESS:
            return {
                ...state,
                isLoading:false,
                posts: action.data
            }
        case actions.DELETE_POST_FAILS:
                return { ...state, isLoading: false, errorMessage: action.data }
        case actions.POST_SELECTED:
            return {
                ...state                
            }
        default:
            return state;
    }

}
