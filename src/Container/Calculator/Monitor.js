import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
   
      monitor : {
        height: '60px',
        border: '1px solid black',
        width: '260px',
        backgroundColor: '#333',
        color: 'white',
        textAlign: 'right',
        lineHeight: '60px',
        paddingRight: '10px',
        fontSize: '2.5rem',
      },
  
      input : {
        backgroundColor: '#333',
        color: 'white',
        outline: 'none',
        width: '100%'
      },
    })

const Monitor = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.monitor}>
            <input type="text" value={props.result} className={classes.input}/>
        </div>
    )
  }
  
  export default Monitor;