import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import {ProductProvider} from './BusComponent/context'
import './index.css';
import App from './App';
import {InfoProvider} from './Components/context';
import * as serviceWorker from './serviceWorker';
import  BusApp from './BusApp';

ReactDOM.render(
  // <InfoProvider><App /></InfoProvider> 
  <ProductProvider>
    <Router><BusApp /></Router>
  </ProductProvider>
  
  ,
   document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
