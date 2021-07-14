import LoginForm from "./Container/Authentication/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import MainPage from "./Container/MainPage";
import Profile from "./Container/Profile/Profile";
import Settings from "./Container/Settings";

function App(props) {


  return (
      <> 
      <Router>
        <Switch>
            
      <Route path='/dashboard/profile'><Profile /></Route>
          <Route path='/dashboard'>
            {props.user ? <MainPage/> : <Redirect to="/" />}
          </Route> 
    <Route path = '/'>
            {props.user ? (
              <Redirect to = '/dashboard' />
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
    user : state.authReducer.isLogged  
  }
}
export default connect(mapStateToProps)(App);
