const token = localStorage.getItem('user');

const initialState = {
    isLogged:  token ? true : false
}


const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,                
                isLogged: action.data
            }
        case 'LOGIN_FAIL' :
            return {
                ...state,
                isLogged: false
            }
        case 'LOGOUT' :
            return {
                state,
                isLogged : false
            }
        default:
             return state;

    }
}


export default authReducer;