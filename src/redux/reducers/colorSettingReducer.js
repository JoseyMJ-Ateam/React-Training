import * as actions from '../constants';

let initialState = {
    isLoading: false,
    primaryColor: '##891a1a',
    secondaryColor: '##891a1a',
   
}

export default function colorSettingReducer(state = initialState, action) {

    switch (action.type) {
        case actions.SET_PRIMARY_COLOR:
            return { 
                ...state, 
                isLoading: false,
                primaryColor: action.data
            }
        case actions.SET_SECONDARY_COLOR:
            return {
                ...state, 
                isLoading: false,
                secondaryColor: action.data
            }
            
        default:
            return state;
    }

}
