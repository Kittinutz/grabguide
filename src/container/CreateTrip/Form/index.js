import React from 'react'
import enhance from './HOCForm';
import {Timeline, Input, InputNumber, Button, Icon, DatePicker,Select} from 'antd'
const Option = Select.Option;

const Form = (props) => {
  const {
    myplan,
    Add,
    Deleteplace,
    AdultNumber,
    ChildrenNumber,
    Appointment,
    onSubmit,
    DateState,
    NameState,
    LangState,
    AddName,
    PlaceState,
    languages,
    onSelect
  } = props;
  const children = [];
  for (let i = 10; i < 36; i++) {
    children.push(<Option key={i.toString(36) + i} value={i}>{i.toString(36) + i}</Option>);
  }
  //test commit test two
  return (
    <div className="content animated fadeIn">
      <div className="container">
        <div className="createtrip">
          <h3>Create your trip</h3>
          <label htmlFor="">Trip name</label>
          <Input placeholder="Trip name" style={{width: "50%"}} onChange={AddName}/>
          <label className="valid" >{NameState?"invalid Name":null}</label>
          <label htmlFor="">Date</label>
          <DatePicker style={{width: "50%"}}  onChange={Appointment} />
          <label className="valid" >{DateState?"invalid Appointment":null}</label>
          <label htmlFor="">Number of Adult</label>
          <InputNumber name="adult" min={1} max={10} defaultValue={1} onChange={AdultNumber}/>
          <label htmlFor="">Number of Children</label>
          <InputNumber name="children" min={0} max={10} defaultValue={0} onChange={ChildrenNumber}/>
          <label htmlFor="">Select you Languages</label>
          <Select
            mode="multiple"
            placeholder="Please select"
            onChange={(e)=>{onSelect(e)}}
            style={{ width: '100%' }}
            labelInValue={true}
            defaultValue={myplan.languages}
          >
            {
              languages.map(data=>{
                return (
                  <Option key={data.value.toString(36)+data.value} value={data.value}>{data.label}</Option>
                )
              })
            }
          </Select>
          <label className="valid">{LangState?"invalid Languages":null}</label>
          <h3>Select your place </h3>
          <label className="valid" >{PlaceState?"Places Select Places":null}</label>
          <div className="timeline">
            <Timeline>
              {
                myplan.place.map((data, index) => {
                  return (
                    <Timelineitem key={index} {...data} Deleteplace={Deleteplace}/>
                  )
                })
              }
              <Timeline.Item><Button onClick={Add} type="primary"><Icon type="plus"/>Add places</Button></Timeline.Item>
            </Timeline>
          </div>
          <Button onClick={onSubmit} type="primary"><Icon type="plus-circle"/>Commit</Button>
        </div>
      </div>
    </div>
  )
};
const Timelineitem = (props) => {
  const {image, name, id, Deleteplace} = props;
  return (
    <Timeline.Item>
      <div className="card-trip">
        <div className="card-trip-header">
          <div className="card-tripimage">
            <img className="image-place" src={image} alt=""/>
          </div>
          <div className="place-detail">
            <div className="name-trip">
              {name} <Icon id={id} onClick={Deleteplace} type="close" style={{color: "tomato", fontsize: 16}}/>
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