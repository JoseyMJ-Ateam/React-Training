import LoginForm from "./Container/Forms/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import Dashboard from "./Container/Dashboard";

function App(props) {


  return (
      <> 
      <Router>
        <Switch>
          <Route path='/Dashboard'>
            {props.user ? <Dashboard /> : <Redirect to="/" />}
          </Route>
          <Route path = '/'>
            {props.user ? (
              <Redirect to = '/Dashboard' />
            ) : (
              <LoginForm />
            )}
          </Route>
        </Switch>
      </Router>
    
    
      </>   
  );
}

const mapStateToProps = state => {
 
  return {
    user : state.authReducer.validUser
   
  }
}
export default connect(mapStateToProps)(App);
