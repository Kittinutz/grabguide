import React from 'react'
import {Timeline, Input, Button, Icon,DatePicker} from 'antd'

import enhance from './HOCForm';

const Form = (props) => {
  const {myplan, Add,Deleteplace} = props;
  return (
    <div className="content animated fadeIn">
      <div className="container">
        <div className="createtrip">
          <h3>Create your trip</h3>
          <label htmlFor="">Trip name</label>
          <Input placeholder="Trip name" style={{width: "50%"}}/>
          <label htmlFor="">Date</label>
          <DatePicker style={{width:"50%"}} />
          <h3>Select your place </h3>
          <div className="timeline">
            <Timeline>
              {
                myplan.place.map((data,index) => {
                  return (
                    <Timelineitem key={index} {...data} Deleteplace={Deleteplace}/>
                  )
                })
              }
              <Timeline.Item><Button onClick={Add} type="primary"><Icon type="plus"/>Add places</Button></Timeline.Item>
            </Timeline>
          </div>
          <Button onClick={Add} type="primary"><Icon type="plus-circle" />Commit</Button>
        </div>
      </div>
    </div>
  )
};
const Timelineitem = (props)=>{
  const {image,name,id,Deleteplace} = props;
  console.log(props)
  return (
    <Timeline.Item>
      <div className="card-trip">
        <div className="card-trip-header">
          <div className="card-tripimage">
            <img className="image-place" src={image} alt=""/>
          </div>
          <div className="place-detail">
            <div className="name-trip">
              {name} <Icon id={id} onClick={Deleteplace} type="close" style={{color:"tomato",fontsize:16}} />
            </div>
            <span className="trip-detail">
              description
            </span>
          
          </div>
          
        </div>
      </div>
    </Timeline.Item>
  )
}
export default enhance(Form)