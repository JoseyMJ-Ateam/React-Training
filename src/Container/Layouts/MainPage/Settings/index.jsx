import React from 'react';
import { AppBar, CssBaseline,Button, Toolbar, Typography } from "@material-ui/core";
import { useDispatch } from 'react-redux';
import { colorSettingsSuccess } from '../../../../redux/actions/colorSettingsActions';
import { ChromePicker } from 'react-color';
import { useState } from 'react';


const Settings = () => {
    const dispatch = useDispatch();
      const [color, setColor] = useState('#fff');
      const [showColorPicker, setShowColorPicker]= useState(false);
      dispatch(colorSettingsSuccess(color));
    return (
        <div>            
              <AppBar position="static">
                <Toolbar variant="dense">
                  <Typography variant="h6" color="inherit">
                    Select Your Theme
                  </Typography>
                </Toolbar>
              </AppBar>
                <CssBaseline />
              <Button onClick={()=>setShowColorPicker(showColorPicker=>!showColorPicker)}>
                  {showColorPicker ?'Close color picker' : 'Choose your theme color'}</Button>
                  {showColorPicker && (
            <ChromePicker
                color={color}
                onChange={updatedColor => setColor(updatedColor.hex)}/>
                  )} 
        </div>       
    )
}

export default Settings;