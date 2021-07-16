import { makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
    keyboard : {
        fontFamily: 'Space Mono'
      },
    isZero : {
        gridColumn: 'span 2'
      },
      typeNumber : {
        display: 'grid',
        gridTemplateColumns: 'repeat(4,1fr)',
        gridGap: '5px'
        },
        button : {
            outline: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '15px'
            
            }
})
const Keyboard = (props) => {
    const classes = useStyles();
  return (
    <div className={classes.keyboard}>
      <div className={classes.typeNumber}>
        <button onClick={props.clear} className={classes.button}>Clear</button>
        <button className={classes.button} >%</button>
        <button className={classes.button} name="C" onClick={props.backspace}>C</button>
        <button className={classes.button} name="/" onClick={props.onClick}>/</button>

        <button className={classes.button} name="7" onClick={props.onClick}>7</button>
        <button className={classes.button} name="8" onClick={props.onClick}>8</button>
        <button className={classes.button} name="9" onClick={props.onClick}>9</button>
        <button className={classes.button} name="*" onClick={props.onClick}>x</button>

        <button className={classes.button} name="4" onClick={props.onClick}>4</button>
        <button className={classes.button} name="5" onClick={props.onClick}>5</button>
        <button className={classes.button} name="6" onClick={props.onClick}>6</button>
        <button className={classes.button} name="-" onClick={props.onClick}>-</button>
       
        <button className={classes.button} name="1" onClick={props.onClick}>1</button>
        <button className={classes.button} name="2" onClick={props.onClick}>2</button>
        <button className={classes.button} name="3" onClick={props.onClick}>3</button>
        <button className={classes.button} name="+" onClick={props.onClick}>+</button>


        <button className={classes.button} name="0" onClick={props.onClick} className={classes.isZero}>0</button>
        <button className={classes.button} >.</button>
        <button className={classes.button} name="=" onClick={props.calc}>=</button>
     
      </div>
    
      
    </div>
  );
};
export default Keyboard;
