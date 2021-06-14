
const initialState = {
  validUser: false
}



const authReducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                validUser: true
            }
        case 'LOGIN_FAIL' :
            return {
                ...state,
                validUser: false
            }
        default:
             return state;

    }
}


export default authReducer;