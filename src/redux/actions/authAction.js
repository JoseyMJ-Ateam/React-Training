import * as actions from '../constants';

export const authAction = (values) => {     
   
    if(values.email === 'reactdev@ateamindia.com' && values.password === 'Hunt@123'){
        localStorage.setItem('user', JSON.stringify(values));
    return {
        type : actions.LOGIN_SUCCESS,
        data: true
    }
    }

    return {
        type : actions.LOGIN_FAIL,
        
    }
}
