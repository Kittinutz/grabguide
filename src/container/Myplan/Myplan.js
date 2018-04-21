import React, {Component} from 'react';
import enhance from './HOCMyplan'
import Footer from '../../component/Footer/index';
import Header from '../../component/Header/Header';
import _ from 'lodash';
import {connect} from 'react-redux';
import * as actions from '../../action/index'
import {
    Form, Select, Radio,
     DatePicker,Card,Avatar,Icon
} from 'antd';
import {Link} from 'react-router-dom'


const { Meta } = Card;


const Myplan =(props)=>{

    const {mytrip,HandleClickIcon} = props;
   
      return (
    
        <div>
            <Header icon="plus-circle-o" handleClick={HandleClickIcon}/>
            <div className="content animated fadeIn">
              <div className="content-header">
                <h1>My Booking Trips</h1>
              </div>
              {
                _.map(mytrip,data=>{
                  return(
                  <MyplanItem key={data.id} {...data}/>
              
                  )
                })
            
              }
            </div>
            <Footer/>
        </div>
      )
    
}
const MyplanItem = (props)=>{
  const {id,trip,name} = props
    return(
      <Card
        key={id}
        style={{ width: "100%" ,marginTop:"5%",marginBottom:"10%" }}
        cover={<img alt={name} src={trip.image} />}
        actions={[<Link to={`/myplan/${id}`}><Icon type="book" /></Link>, <Icon type="edit" />, <Icon type="ellipsis" />]}
      >
          <Meta
            avatar={<Avatar src={trip.guide.image} />}
            title={trip.name}
            description={trip.description}
          />
      </Card>
      
    )
}
export default enhance(Myplan)

//