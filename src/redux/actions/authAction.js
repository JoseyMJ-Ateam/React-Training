
export const authAction = (values) => {     
   
    if(values.email === 'reactdev@ateamindia.com' && values.password === 'Hunt@123'){
        localStorage.setItem('user', JSON.stringify(values));
    return {
        type : 'LOGIN_SUCCESS',
        data: true
    }
    }

    return {
        type : 'LOGIN_FAIL',
        
    }
}
