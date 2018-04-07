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
                myplan.place.map(data => {
                  return (
                    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
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
}
export default enhance(Form)