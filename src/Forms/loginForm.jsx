import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Grid, makeStyles,Card } from '@material-ui/core';

const useStyles = makeStyles(() => ({
    ht: {
        height:550
    },
    pg:{
        padding:70,
        boxShadow: "3px 3px 3px 3px #9E9E9E"
    },   
    ct: {
        margin:50
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

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  const classes = useStyles();

  return (
      <Grid 
        container 
        direction="column" 
        spacing={2}
        justify="center"
        alignItems="center" 
        className={classes.ht}
       >
        <Card className={classes.pg}>
            <form onSubmit={formik.handleSubmit} >
                <Grid item xs={12} >
                    <TextField
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
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
                <Grid item xs={12}>
                    <Button color="primary" variant="contained" type="submit" className={classes.ct}>
                    Submit
                    </Button>
                </Grid>
            </form>
        </Card>
    </Grid>
  );
};

export default LoginForm;