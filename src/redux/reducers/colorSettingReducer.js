import * as actions from '../constants';

let initialState = {
    isLoading: false,
    themeColor: '#000',
    errorMessage: []
}

export default function colorSettingReducer(state = initialState, action) {

    switch (action.type) {
        case actions.COLOR_SETTINGS_BEGINS:
            return { ...state, isLoading: true }
        case actions.COLOR_SETTING_SUCCESS:
            return {
                ...state, isLoading: false,
                themeColor: action.data
            }
        case actions.COLOR_SETTING_FAIL:
            return { ...state, isLoading: false, errorMessage: action.data }
       
        default:
            return state;
    }

}
