import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './spinner.css';
import 'react-credit-cards/lib/styles.scss';
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
import {fetchmessage} from "./action/Authentication";
import Home from './container/Home/';
import Myplan from './container/Myplan/Myplan';
import Express from './container/Express/Express'
import Trip from './container/Trip/Trip';
import Bookingtrip from './container/Bookingtrip/Bookingtrip';
import FaceBook from "./container/Facebook/Facebook";
import {AUTH_USER} from "./action/type";
import Profile from "./container/Profile/Profile";
import Myplanselect from "./container/Myplan/Myplanselect";
import Createtrip from "./container/CreateTrip/index";
import Mytask from "./container/Mytask/index";
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const token = localStorage.getItem('token');
if(token) {
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render((

    <Provider store={store}>
        <BrowserRouter>
            <HashRouter>
                <Switch>

                    <Route path="/createtrip" component={Createtrip} />
                    <Route path="/login/facebook" component={FaceBook} />
                    <Route path="/booking/trip/:id" component={Bookingtrip}/>
                    <Route path="/trip/:id" component={Trip}/>
                    <Route path="/profile" component={Profile} />
                    <Route path="/myplan/:id" component={Myplanselect}/>
                    <Route path="/myplan" component={Myplan}/>
                    <Route path="/express" component={Mytask}/>
                    <Route path="/" component={Home} />

                </Switch>
            </HashRouter>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));
registerServiceWorker();
