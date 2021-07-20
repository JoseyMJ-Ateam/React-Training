import * as actions from '../constants';

export const updatePrimaryColor =(data)=>{
    return {
        type:actions.SET_PRIMARY_COLOR,
        data
    }
}
export const updateSecondaryColor = (data)=>{
    return {
        type: actions.SET_SECONDARY_COLOR,
        data
    }
}