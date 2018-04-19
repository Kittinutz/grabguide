import React from 'react'
import enhance from './HOCProfile'
import {Button} from 'antd'
import Footer from '../../component/Footer/'
import Spinner from "../../component/Spinner/index";
import Header from "../../component/Header/Header";

const Profile = (props) => {
  const {authentication, handleLogout} = props;
  const {isAuth} = authentication;
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="container">
            <Button onClick={handleLogout} type='primary' shape='circle' size='small' icon='poweroff'/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  
};
export default enhance(Profile)