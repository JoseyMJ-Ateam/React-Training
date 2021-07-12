
import * as actions from '../constants';
const token = localStorage.getItem('user');

const initialState = {
    isLogged: token
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actions.LOGIN_SUCCESS:
            return {
                ...state,                
                isLogged: action.data
            }
        case actions.LOGIN_FAIL :
            return {
                ...state,
                isLogged: false
            }
        case actions.LOGOUT :
            return {
                state,
                isLogged : false
            }
        default:
             return state;

    }
}


export default authReducer;