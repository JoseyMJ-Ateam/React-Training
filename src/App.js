import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import {decrement, increment} from './actions';
import './App.css';

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();
  return (
      <> 
        <h1>Counter {counter}</h1>
        <Button 
        variant="contained" 
        color="primary"
        onClick = {() => dispatch(increment())} >
          Increment
        </Button>
        <Button 
        variant="contained" 
        color="secondary"
        onClick = {() => dispatch(decrement())} >
          Decrement
        </Button>
        {isLogged ? <h3>Valuable Information I shouldn't see</h3> : ''}
      </>   
  );
}

export default App;
