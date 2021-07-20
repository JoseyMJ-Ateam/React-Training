
 import { useDispatch } from 'react-redux';
 import { updatePrimaryColor } from '../../redux/actions/colorSettingsActions';
 import { updateSecondaryColor } from '../../redux/actions/colorSettingsActions';
 import React, { useState } from "react";
 import { makeStyles, Typography } from '@material-ui/core';

 const useStyles = makeStyles({
   divStyle : {
    display:'flex', 
    justifyContent:'space-around', 
    width:'30%', 
    marginTop:'20px'
   }
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
    <Typography variant='h3'>Change Theme</Typography>
    <div className={classes.divStyle}>
      <Typography variant='h5'>Primary Colour</Typography> 
      <input type='color' onChange={handlePrimaryColor} value={primaryColor} />
    </div>
    <div className={classes.divStyle}>
      <Typography variant='h5'>Secondary Colour</Typography> 
      <input type='color' onChange={handleSecondaryColor} value={secondaryColor} />
    </div>
    </>
  );
}



 export default Settings;