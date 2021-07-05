import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, makeStyles,Card } from '@material-ui/core';
import * as authAction from '../../redux/actions/authAction';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
const useStyles = makeStyles(() => ({
    container: {
      direction:"column",
      alignItems:"center",
      justifyContent:"center" ,
      height:500   
    },
    cardContainer:{
        width:400,
        height:400,
        boxShadow: "3px 3px 3px 3px #9E9E9E"
      },  
    
    gridItem:{
      marginLeft:50,
      marginRight:50
    },
    btn: {
      justifyContent:'center',
      display:'flex' ,
      margin:0,
      position:'absolute',
      bottom:-25,
      left:150 
    },
    formContainer: {
      marginTop:100,
      minHeight:'200px',
      maxHeight: '90vh' ,
      position: 'relative'
    },
    error: {
        color: 'red',
        marginLeft:50
    }
}))

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

const LoginForm = (props) => {
  const [logged, setLogged] = useState(false);
const { actions} =props;
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      actions.authAction(values);
      setLogged(true);
    },
  });

  const classes = useStyles();
console.log(props.user)
  return (
      <Grid 
        container 
        className={classes.container}
       >
        <Card className={classes.cardContainer}>
            <form onSubmit={formik.handleSubmit} className={classes.formContainer} >
                <Grid item className={classes.gridItem} >
                    <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item className={classes.gridItem}>
                    <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>
                <Grid item className={classes.btn}>
                    <Button color="primary" variant="contained" type="submit" >
                    Submit
                    </Button>                   
                </Grid>
                <div>
                    {!props.user && logged ? <p className={classes.error}>Invalid Username or Password</p> : null}
                    </div>
            </form>
          
        </Card>
    </Grid>
  );

};

const mapStateToProps = state => {
 
   return {
     user : state.authReducer.isLogged
    
   }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Object.assign({}, authAction), dispatch)
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);