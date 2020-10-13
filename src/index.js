import React from 'react';
import ReactDOM from 'react-dom';

// Describe state of app
import { Provider, connect } from 'react-redux';
import { createStore } from 'redux'

import './index.css';
// CARD DOES NOT NEED destructuring cuz default export
// import Card from './Card';
import App from './containers/App.js';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; 

// const store = createStore(rootReducer)

// Create own component: Hello
ReactDOM.render(
  <React.StrictMode>
    {/* Can now use greeting as a prop in Hello.js */}
    {/* Hello greeting={'Hello'+'React Ninja'} */}
    {/* Return multiple of same component (cards) */}
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
