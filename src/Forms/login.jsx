
import { Button, IconButton, makeStyles, Snackbar } from '@material-ui/core';
import {Form, Formik, useField} from 'formik';
import { useState } from 'react';
import { Redirect } from 'react-router';
import * as Yup from 'yup';
import {authservice} from '../service/authService'

const useStyles = makeStyles(() => ({
    error: {
        color:'red',
        padding:10
    },
    bgColor : {
        backgroundColor : 'green'
    }
}))

const CustomEmailInput = ({label, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    return (
        <table>
        <tbody>
        <tr>
            <td>
             <label htmlFor = {props.id || props.name}>{label}</label>
            </td>
        </tr>
        <tr>
            <td>

             <input {...field} {...props} />
            </td>
        </tr>
        </tbody>
      {meta.touched && meta.error ? (
          <div className={classes.error}>{meta.error}</div>
      ) : null }
      </table>
    )
}

const CustomPassword = ({label, ...props }) => {
    const [field, meta] = useField(props);
    const classes = useStyles();
    return (
        <table>
            <tbody>
            <tr>
                <td>
                 <label htmlFor = {props.id || props.name}>{label}</label>
                </td>
            </tr>
            <tr>
                <td>

                 <input {...field} {...props} />
                </td>
            </tr>
            </tbody>
          {meta.touched && meta.error ? (
              <p className={classes.error}>{meta.error}</p>
          ) : null }
          </table>
    )
}
const Login = () => {
    const [snackBar, setSnackBar] = useState({
        snackbarOpen: false, 
        snackbarMsg: ''
    });
    const snackbarClose = (event) => {
        setSnackBar({snackbarOpen : false });
    };

    const useApi =authservice();
    const classes = useStyles();
    // const [person, setPerson] = useState({});
    // useApi(person);

    return (
        <Formik
            initialValues = {{
                email: '',
                password: ''
            }}
            validationSchema = {Yup.object({
                email: Yup.string()
                .email('Invalid Email Address')
                .required('Please Enter Your Email Address'),
                password: Yup.string()
                .matches(
                    /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
                    "Password must contain at least 8 characters, one uppercase, one number and one special case character"
                  )
                .required('Please Enter The Password')
            })}
            
            onSubmit={(values, { setSubmitting, resetForm }) => {
                
                // setTimeout( () => {
                    // if(values.email === 'reactdev@ateamindia.com' && values.password === 'Hunt@123'){
                           setSnackBar({ ...snackBar, snackbarOpen : true, snackbarMsg: 'Submitted Successfully '});                 
                    resetForm();
                    setSubmitting(false);
                    // localStorage.setItem(values.email, values.password);

                   useApi(values);

                //     }
                //     else {
                //         setSnackBar({ ...snackBar, snackbarOpen : true, snackbarMsg: 'You are not authorized'});
                //         resetForm();
                //         setSubmitting(false);  
                //     }
                        
                // },1000)
            }}
            >
            {props => (
                <Form >
                    <h1>Login</h1>
                    <CustomEmailInput label='Email :' name = 'email' type='email' placehoder="john@gmail.com" />
                    <CustomPassword label='Password :' name = 'password' type='text' placehoder='Enter your password' />
                    <Button variant="contained" color="primary" type='submit'>{props.isSubmitting ? 'Loading...' : 'Submit'}</Button>
                    <Snackbar open={snackBar.snackbarOpen} autoHideDuration={6000} onClose={snackbarClose} 
                        message={<span>{snackBar.snackbarMsg}</span> } className={classes.bgColor}
                        action = {[
                            <IconButton key='close' aria-label='Close' color = 'inherit' onClick={snackbarClose}>
                                x
                            </IconButton>
                        ]} />  
                </Form>
            )}
        </Formik>
    )
}

export default Login;