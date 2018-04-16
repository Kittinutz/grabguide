import React from 'react'
import enhance from './HOCProfile'
import {Button} from 'antd'
import Footer from '../../component/Footer/'
import Spinner from "../../component/Spinner/index";

const Profile = (props) => {
  const {authentication,handleLogout} = props;
  const {isAuth} = authentication
  if (isAuth) {
    return (
      <div>
       
        <Button onClick={handleLogout} type='primary' shape='circle' size='small' icon='poweroff'/>
        <Footer/>
      </div>
    )
  }else{
    return (
      <Spinner/>
    )
  }
};
export default enhance(Profile)