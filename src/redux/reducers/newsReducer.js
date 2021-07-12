import * as actions from '../constants';

let initialState = {
    isLoading: false,
    news: [],
    errorMessage: ''
}


export default function newsReducer(state = initialState, action) {

    switch (action.type) {
        case actions.GET_NEWS_DATA_BEGINS:
            return { ...state, isLoading: true }
        case actions.GET_NEWS_DATA_SUCCESS:
            return {
                ...state, isLoading: false,
                news: action.data
            }
        case actions.GET_USER_DATA_FAILS:
            return { ...state, isLoading: false, 
                     errorMessage: action.data }
        default:
            return state;
    }

}
