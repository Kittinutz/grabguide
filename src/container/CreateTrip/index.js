import React from 'react';
import {Input, Timeline} from 'antd';
import Header from "../../component/Header/Header";
import Footer from "../../component/Footer/"
import {
    Switch,
    Route,
    Redirect,
    Link
} from 'react-router-dom';
import Form from "./Form/index";
import Activities from './Activities/index';

const Createtrip = (props) => {
    return (
        <div>
            <Header {...props}/>
            <Switch>

                 <Route path="/createtrip/add" component={Activities}/>
                 <Route path="/" component={Form}/>
            </Switch>
            <Footer/>
        </div>
    )
}
export default Createtrip;