import * as actions from '../constants';

let initialState = {
    isLoading: false,
    posts: [],
    errorMessgae: ''
}

export default function postDetailsReducer(state = initialState, action) {

    switch (action.type) {
        case actions.GET_POST_DETAILS_DATA_BEGINS:
            return { ...state, isLoading: true }
        case actions.GET_POST_DETAILS_DATA_SUCCESS:
            return {
                ...state, isLoading: false,
                posts: action.data
            }
        case actions.GET_POST_DETAILS_DATA_FAILS:
            return { 
                ...state, isLoading: false, 
                errorMessgae: action.data 
            }
        case actions.UPDATE_POST_DETAILS_BEGINS:
            return { ...state, isLoading:true}
        case actions.UPDATE_POST_DETAILS_SUCCESS:
            return {
                ...state,
                isLoading:false,
                posts: action.data 
            }  
        case actions.UPDATE_POST_DETAILS_FAILS :
            return {
                ...state, isLoading:false,
                errorMessgae:action.data
            }      
            default:
            return state;
    }
}