import React from 'react'
import {Timeline, Input, Button, Icon} from 'antd'
import enhance from './HOCForm';

const Form = (props) => {
  console.log(props);
  const {myplan, Add} = props;
  return (
    <div className="content">
      <div className="container">
        <div className="createtrip">
          <h3>Create your trip</h3>
          <label htmlFor="">Trip name</label>
          <Input placeholder="Basic usage" style={{width: "50%"}}/>
          <div className="timeline">
            <Timeline>
              {
                myplan.place.map((data,index) => {
                  return (
                    <Timelineitem key={index} {...data}/>
                  )
                })
              }
              <Timeline.Item><Button onClick={Add} type="primary"><Icon type="plus"/>Add places</Button></Timeline.Item>
            </Timeline>
          </div>
        </div>
      </div>
    </div>
  )
};
const Timelineitem = (props)=>{
  const {image,name} = props;
  return (
    <Timeline.Item>
      <div className="card-trip">
        <div className="card-trip-header">
          <div className="card-tripimage">
            <img className="image-place" src={image} alt=""/>
          </div>
          <div className="place-detail">
            <div className="name-trip">
              {name}
            </div>
          
          </div>
          
        </div>
      </div>
    </Timeline.Item>
  )
}
export default enhance(Form)