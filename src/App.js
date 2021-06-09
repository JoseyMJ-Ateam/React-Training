
import { BrowserRouter, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Login from './Forms/login';

function App() {

  return (
      <> 
      <BrowserRouter>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        <Login />
      </BrowserRouter>
      </>   
  );
}

export default App;
