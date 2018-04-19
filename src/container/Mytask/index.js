import React from 'react';
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer'
import {Link} from 'react-router-dom';
import moment from 'moment'
import enhance from './HOCMytask';
import {
  Form, Select, Radio,
  DatePicker,Card,Avatar,Icon
} from 'antd';
import Spinner from "../../component/Spinner/index";
const { Meta } = Card;
const Mytask = (props) => {
  const {mytasks,authentication} = props;
  if(authentication.user) {
    return (
      <div>
        <Header icon="plus-circle-o"/>
        <div className="content animated fadeIn">
          <div className="content-header">
            <h1>My Booking Trips</h1>
          </div>
          {
            mytasks.map(data => {
              return (
                <MyTaskItem {...data} profile={props.authentication.user.avatar}/>
              )
            })
          }
        </div>
        <Footer/>
      </div>
  
    )
  }else{
    return <Spinner/>
  }
}
const MyTaskItem = (props)=>{
  const {id,trip,name,profile} = props
  return(
    <Card
      key={id}
      style={{ width: "100%" ,marginTop:"5%",marginBottom:"10%" }}
      actions={[<Link to={`/myplan/${id}`}><Icon type="book" /></Link>, <Icon type="edit" />, <Icon type="ellipsis" />]}
    >
      <Meta
        avatar={<Avatar src={profile} />}
        title={name}
        description={name}
      />
      Helloworld
    </Card>
  
  )
}
export default enhance(Mytask);