import * as actions from '../constants';

export const  colorSettingBegins =()=>{
    return {
        type:actions.COLOR_SETTINGS_BEGINS
    }
}
export const colorSettingsSuccess = (data)=>{
    return {
        type: actions.COLOR_SETTING_SUCCESS,
        data
    }
}
export const colorSettingsFail = (data)=>{
    return {
        type: actions.COLOR_SETTING_FAIL,
        data
    }
}