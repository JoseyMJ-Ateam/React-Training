
 import { AppBar, Toolbar, Typography } from "@material-ui/core";
 import { useDispatch } from 'react-redux';
 import { colorSettingsSuccess } from '../../../../redux/actions/colorSettingsActions';

  import React, { useState } from "react";

const Settings = () => {


  const dispatch = useDispatch();
const ColorPicker = props => {
  return (
    <>
      <input type="color" {...props} />
      <input type="text" {...props} />
    </>
  );
};


  const [color, updateColor] = useState("#FFFFFF");

  const handleInput = e => {
    updateColor(e.target.value);
  };

  dispatch(colorSettingsSuccess(color));

  return (
    <div className="App">
       <AppBar position="static">
                 <Toolbar variant="dense">
                   <Typography variant="h6" color="inherit">
                     Select Your Theme
                   </Typography>
                 </Toolbar>
               </AppBar>
      <ColorPicker onChange={handleInput} value={color} />
    </div>
  );
}



 export default Settings;