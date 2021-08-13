
 import { useDispatch } from 'react-redux';
 import { updatePrimaryColor } from '../../redux/actions/colorSettingsActions';
 import { updateSecondaryColor } from '../../redux/actions/colorSettingsActions';
 import React, { useState } from "react";
 import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';

 const useStyles = makeStyles({
   container:{
    padding:'25px',
   },
   divStyle : { 
    marginTop:'20px'
   },
  })

const Settings = () => {


  const dispatch = useDispatch();
  const [primaryColor, setPrimaryColor] = useState("#891a1a");
  const [secondaryColor, setSecondaryColor] = useState("#891a1a");
  const classes = useStyles();
  const handlePrimaryColor = e => {
    setPrimaryColor(e.target.value);
  };

  const handleSecondaryColor = e => {
    setSecondaryColor(e.target.value);
  };
  dispatch(updatePrimaryColor(primaryColor));
  dispatch(updateSecondaryColor(secondaryColor));

  return (
    <>
    <Grid container spacing={1} component={Paper} className={classes.container}>
    <Typography variant='h3'>Change Theme</Typography>
      <Grid item container className={classes.divStyle}>
      <Grid item md={3} sm={6} xs={12}>
      <Typography variant='h5'>Primary Colour</Typography> 
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
      <input type='color' onChange={handlePrimaryColor} value={primaryColor} />
      </Grid>
      </Grid>
      <Grid item container>
      <Grid item md={3} sm={6} xs={12}>
      <Typography variant='h5'>Secondary Colour</Typography> 
      </Grid>
      <Grid item md={2} sm={6} xs={12}>
      <input type='color' onChange={handleSecondaryColor} value={secondaryColor} />
      </Grid>
      </Grid>
    </Grid>
    </>
  );
}



 export default Settings;