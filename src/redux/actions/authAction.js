

// export const loginBegins =(data) =>{
//     console.log(data);
//     return {
//         type:'LOGIN_BEGINS',
//         data
//     }
// }

export const authAction = (data) => {
    if(data.email === 'reactdev@ateamindia.com' && data.password === 'Hunt@123'){
    return {
        type : 'LOGIN_SUCCESS',
    }
    }

    return {
        type : 'LOGIN_FAIL',
        
    }
}
