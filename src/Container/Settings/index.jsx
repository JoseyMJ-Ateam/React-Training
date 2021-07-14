
 import { useDispatch } from 'react-redux';
 import { colorSettingsSuccess } from '../../redux/actions/colorSettingsActions';

  import React, { useState } from "react";

const Settings = () => {


  const dispatch = useDispatch();
  const [color, updateColor] = useState("#891a1a");

  const handleInput = e => {
    updateColor(e.target.value);
  };

  dispatch(colorSettingsSuccess(color));

  return (
    <div >
      <input type="text" onChange={handleInput} value={color} />
      <input type='color' onChange={handleInput} value={color} />
    </div>
  );
}



 export default Settings;