let initialState = {
    isLoading: false,
    themeColor: '#000',
    errorMessage: []
}

export default function colorSettingReducer(state = initialState, action) {

    switch (action.type) {
        case 'COLOR_SETTINGS_BEGINS':
            return { ...state, isLoading: true }
        case 'COLOR_SETTING_SUCCESS':
            console.log(action, 'kkkkk');
            return {
                ...state, isLoading: false,
                themeColor: action.data
            }
        case 'COLOR_SETTING_FAIL':
            return { ...state, isLoading: false, errorMessage: action.data }
       
        default:
            return state;
    }

}
