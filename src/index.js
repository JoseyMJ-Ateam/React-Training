import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import App from './App';
import allReducers from './redux/reducers';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reportWebVitals from './reportWebVitals';
import SocketIO from './Container/Layouts/SidebarMenus/SocketIO';
 const store = createStore(allReducers, applyMiddleware(logger)
// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export function Index(){
  const themeSelector = useSelector(state => state.colorSettingReducer.themeColor);
 
  return (
     
    <ThemeProvider theme={createMuiTheme(
   {
     palette: {
       primary: { main: themeSelector },
     }
 })}> 
       <App />       
     </ThemeProvider>
  )
}

ReactDOM.render(
  <Provider store = {store}>
  <Index/>
    </Provider>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
