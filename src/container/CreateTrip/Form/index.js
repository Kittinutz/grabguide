import React from 'react'
import {Timeline,Input} from 'antd'

const Form = (props)=>{
    return (
        <div className="content">
            <div className="container">
                <div className="createtrip">
                    <h3>Create your trip</h3>
                    <label htmlFor="">Trip name</label>
                    <Input placeholder="Basic usage" style={{ width: "50%" }}/>
                    <div className="timeline">
                        <Timeline>
                            <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                            <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                            <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                            <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                        </Timeline>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default Form;