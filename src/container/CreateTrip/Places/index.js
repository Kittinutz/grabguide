import React from 'react'
import enhance from './HOCplaces'
import Spinner from "../../../component/Spinner/index";
import Header from "../../../component/Header/Header";
import Footer from '../../../component/Footer/'
import {
  Form, Select, Radio,
  DatePicker, Card, Avatar, Icon, Button
} from 'antd';

const {Meta} = Card;

const Places = (props) => {
  const {handleClickAdd, places} = props;
  console.log(places)
  if (places.length > 0) {
    return (
      <div>
        <Header {...props}/>
        <div className="content">
          {
            places.map(data => {
              return (
                <Card
                  key={data.id}
                  style={{width: "100%", marginTop: "10%"}}
                  cover={<img alt={data.name} src={data.image}/>}
                  actions={[<Button id={data.id} onClick={handleClickAdd}><Icon type="folder-add"/>Add to my
                    plan</Button>]}
                >
                  <Meta
                    title={data.name}
                    description={data.description}
                  />
                </Card>
              
              )
            })
            
          }
        </div>
        <Footer/>
      </div>
    )
  } else {
    return (
      <div>
        <Header {...props}/>
        <div className="content">
          <div className="container">
            <h1>No more places ....</h1>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default enhance(Places);