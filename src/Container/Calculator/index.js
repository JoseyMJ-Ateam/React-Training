
import Monitor from "./Monitor"
import Keyboard from "./Keyboard"
import {useState} from 'react'
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  main :{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    
    },          
    
      
  })

export default function Calculator() {
  const classes = useStyles();
  const [result, setResult] = useState("")

  const handleClick =(e) => {
      setResult(result.concat(e.target.name))
      
    }
    const clear = () => {
        setResult("")
    }
    const backspace = () => {
        setResult(result.slice(0,result.length -1))
    }
    const calc =() => {
      try{
        setResult(eval(result))

      } catch(err){
        setResult("Error")
      }
    }
  return (
   <div className={classes.main}>
      
      <Monitor result={result}  />
      <Keyboard onClick={handleClick} calc={calc} clear={clear} backspace={backspace}  />
     
   </div>
  );
}
