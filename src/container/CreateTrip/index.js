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
import Places from './Places/index';

const Createtrip = (props) => {
  return (
    <div>
      <Header {...props}/>
      <Switch>
        <Route path="/createtrip/activities/:name" component={Places}/>
        <Route path="/createtrip/add" component={Activities}/>
        <Route path="/" component={Form}/>
      </Switch>
      <Footer/>
    </div>
  )
}
export default Createtrip;