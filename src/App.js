import LoginForm from "./Container/Authentication/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import MainPage from "./Container/Layouts/MainPage";
import Profile from "./Container/Layouts/MainPage/Profile/Profile";

function App(props) {


  return (
      <> 
      <Router>
        <Switch>
            
      <Route path='/dashboard/profile' component={Profile} />
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
