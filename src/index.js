import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './globalStyles';
import { firebase } from './lib/firebase.prod';
import { firebaseContext } from './context/firebase';

ReactDOM.render(
  <firebaseContext.Provider value={{ firebase }}>
    <GlobalStyles />
    <App />
  </firebaseContext.Provider>,
  document.getElementById('root')
);
