import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './container';
import registerServiceWorker from './registerServiceWorker';
/*REDUX*/
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
/*REDUX*/


ReactDOM.render(
    <Home />
    , document.getElementById('root'));
registerServiceWorker();
