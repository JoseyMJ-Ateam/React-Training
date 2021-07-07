export const  colorSettingBegins =()=>{
    return {
        type:'COLOR_SETTINGS_BEGINS'
    }
}
export const colorSettingsSuccess = (data)=>{
    return {
        type: 'COLOR_SETTING_SUCCESS',
        data
    }
}
export const colorSettingsFail = (data)=>{
    return {
        type: 'COLOR_SETTING_FAIL',
        data
    }
}