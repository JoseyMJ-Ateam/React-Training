import {loginBegins } from '../redux/actions/authAction'


export const authservice = (payload) => {


const userLogin =(payload)=>{
    // if(payload.email === 'reactdev@ateamindia.com' && payload.password === 'Hunt@123'){
    //     console.log('success');
    // }
// console.log(payload,'aaaaaaaaaaaaaaaaaaaaaaa');
return (dispatch)={
    dispatch(loginBegins())
}
}

return userLogin;


} 