import LoginForm from "./Container/Authentication/loginForm";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import {connect} from 'react-redux';
import MainPage from "./Container/Layouts/MainPage";
import Users from "./Container/Layouts/SidebarMenus/Dashboard/users";
import Album from "./Container/Layouts/SidebarMenus/album";

function App(props) {


  return (
      <> 
      <Router>
        <Switch>
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
            <Route path = 'dashboard/users' component ={Users} exact />
            <Route path = 'dashboard/album' component ={Album} exact />
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
