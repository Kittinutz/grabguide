import React from 'react'
import enhance from './HOCProfile'
import {Button} from 'antd'
import Footer from '../../component/Footer/'
import Spinner from "../../component/Spinner/index";
import Header from "../../component/Header/Header";

const Profile = (props) => {
  const {authentication, handleLogout} = props;
  const {isAuth} = authentication;
  if(authentication.user) {
    return (
      <div>
        <Header/>
        <div className="content">
          <div className="container">
     
            <div className="profile">
              <h1>Profile</h1>
              <img src={authentication.user.avatar} alt=""/>
              <h3>{authentication.user.name}</h3>
              <h3>{authentication.user.email}</h3>
              <Button type="primary" icon="poweroff" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }else{
    return <Spinner/>
  }
  
};
export default enhance(Profile)