import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import allReducers from './Redux/reducers';
import reportWebVitals from './reportWebVitals';
import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';
import Profile from './Container/Layouts/MainPage/Profile/Profile';
const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  const theme = createMuiTheme({
    palette: {
      primary: {
        main: red[500],
      },
      secondary: {
        main: '#11cb5f',
      },
    },
  });

ReactDOM.render(
   <Provider store = {store}> 
   <ThemeProvider theme = {theme}> 
    <React.StrictMode>
      <App/>       
    </React.StrictMode>
    </ThemeProvider>
   </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
