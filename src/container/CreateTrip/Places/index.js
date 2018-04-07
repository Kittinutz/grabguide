import React from 'react'
import enhance from './HOCplaces'
import Spinner from "../../../component/Spinner/index";
import Header from "../../../component/Header/Header";
import Footer from '../../../component/Footer/'
import {
  Form, Select, Radio,
  DatePicker, Card, Avatar, Icon
} from 'antd';

const {Meta} = Card;

const Places = (props) => {
  const {places} = props;
  if (places) {
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
                  actions={[<Icon type="book"/>,
                    <Icon type="edit"/>,
                    <Icon type="ellipsis"/>]}
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
    return <Spinner/>
  }
}
export default enhance(Places);