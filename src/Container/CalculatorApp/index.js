
import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";
import { makeStyles } from "@material-ui/core";
import clsx from 'clsx';

const useStyles = makeStyles({
    root:{
        backgroundColor: '#42c0ff',
        display: 'grid',
        placeContent: 'center',
        height: '100vh',
        fontSize: '2rem',
    },
    container : {
        height: '80vh',
        width: '50vh',
        backgroundColor: 'white',
        borderRadius: '1rem',
        padding: '1rem',
         boxShadow: '7px 7px 5px 0px rgba(50, 50, 50, 0.75)'
      },
      wrapper : {
        display: 'grid',
        height: '100%',
        width: '100%',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(6, 1fr)',
        gap: '10px'
      },
      screen :{
        gridColumn: '1 / -1',
        textAlign: 'right',
        padding: '0.5rem',
        fontSize: '4rem',
        overflow: 'hidden'
      },
      btn : {
        display: 'grid',
        placeContent: 'center',
        backgroundColor: '#d7e8ef',
        color: 'black',
        cursor: 'pointer',
      '&:hover' : {
       
            backgroundColor: 'gray'
          },
      },
      lightBlue : {
        backgroundColor: '#b3ddef',
        color: '#69c5ec',
        '&:hover' : {
            backgroundColor: 'white',
        },
      
    },
      
      zero : {
        gridColumn: '1 / span 2',
        borderRadius: '25px',
        placeContent: 'unset',
        alignItems: 'center',
        textAlign: 'center',
    } 
    })

function CalculatorApp() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "*":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };

  const minusPlus = () => {
    if (curState.charAt(0) === "-") {
      setCurState(curState.substring(1));
    } else {
      setCurState("-" + curState);
    }
  };

  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  const classes = useStyles();
  return (
      <div className={classes.root}>
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.screen}>
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={reset}>
          C
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={minusPlus}>
          +/-
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={percent}>
          %
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={operatorType}>
          /
        </div>
        <div className={classes.btn} onClick={inputNum}>
          7
        </div>
        <div className={classes.btn} onClick={inputNum}>
          8
        </div>
        <div className={classes.btn} onClick={inputNum}>
          9
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={operatorType}>
          *
        </div>
        <div className={classes.btn} onClick={inputNum}>
          4
        </div>
        <div className={classes.btn} onClick={inputNum}>
          5
        </div>
        <div className={classes.btn} onClick={inputNum}>
          6
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={operatorType}>
          -
        </div>
        <div className={classes.btn} onClick={inputNum}>
          1
        </div>
        <div className={classes.btn} onClick={inputNum}>
          2
        </div>
        <div className={classes.btn} onClick={inputNum}>
          3
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={operatorType}>
          +
        </div>
        <div className={clsx(classes.btn, classes.zero)} onClick={inputNum}>
          0
        </div>
        <div className={classes.btn} onClick={inputNum}>
          .
        </div>
        <div className={clsx(classes.btn, classes.lightBlue)} onClick={equals}>
          =
        </div>
      </div>
    </div>
    </div>
  );
}

export default CalculatorApp;