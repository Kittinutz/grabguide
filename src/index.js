import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
/*REDUX*/
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import {
    HashRouter,
    Route,
    Switch,
    BrowserRouter
} from 'react-router-dom';
/*REDUX*/

import Home from './container';
import Myplan from './container/Myplan';
import Express from './container/Express'

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <HashRouter>
                <Switch>
                    <Route path="/myplan" component={Myplan}/>
                    <Route path="/express" component={Express}/>
                    <Route path="/" component={Home} />
                </Switch>
            </HashRouter>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
