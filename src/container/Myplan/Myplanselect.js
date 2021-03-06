import React from 'react'
import Header from "../../component/Header/Header";
import Footer from '../../component/Footer'
import enhance from './HOCMyplanselect'
import dateformat from 'dateformat';
import _ from 'lodash'
import {Tabs, Tag} from 'antd';
import Chat from '../../component/Chat/ChatList';

const TabPane = Tabs.TabPane;

const Myplanselect = (props) => {
  const {bookingtripid, mode} = props;
  const date = "03-11-2014";
  const newdate = dateformat(bookingtripid.appointment, "dddd,mmmm.dS");
  const {trip} = bookingtripid
  console.log(props);
  if (bookingtripid.trip) {
    return (
      <div>
        <Header {...props}/>
        <Chat guide={trip.guide.name} avatar={trip.guide.image}/>
        <div className="content">
          <div className="container">
            <div className="trip-image">
              <img className="img"
                   style={{backgroundImage: `url(${trip.image})`}}
                   alt=""/>
            </div>
            <div className="trip-name">
              <h1>{trip.name}</h1>
            </div>
            <div className="description">
              <p>{trip.description}</p>
            </div>
            <div className="schedule">
              <h1>itinerary</h1>
              <div className="shcedule-placed">
                {
                  
                  _.map(trip.schedules, (data, index) =>
                    <Itinerary key={index} time={data.time}
                               description={data.description}/>
                  )
                }
              </div>
            </div>
            <div className="guide">
              <h1>Guide</h1>
              <div className="guideprofile">
                <img src="" className="img"
                     style={{backgroundImage: `url('${trip.guide.image}')`}}
                     alt=""/>
                <p>{trip.guide.name + " " + trip.guide.surname}</p>
              </div>
            </div>
            <div>
              <Tabs
                defaultActiveKey="1"
                tabPosition={mode}
                style={{height: "10%"}}
              >
                <TabPane tab="Booking" key="1">
                  <div className="tab-booking">
                    <p>Appointment : {newdate}</p>
                    <p>Location: Rabbitmansion</p>
                    <p>Number of Person:{bookingtripid.numberofAdult}</p>
                    <p>Number of Children:{bookingtripid.numberofchilde}</p>
                    <p>Price:{bookingtripid.price} THB</p>
                    {bookingtripid.trip.places.map(data => {
                      return <Tag key={data.id + data.id.toString(36)} color="#108ee9">{data.name}</Tag>
                    })}
                  </div>
                </TabPane>
              </Tabs>
            </div>
          
          </div>
        </div>
        <Footer/>
      </div>
    )
  } else {
    return (
      <div>
        <Spinner/>
      </div>
    )
  }
}
const Spinner = (props) => {
  return (
    <div className="spinner">
      <div className="double-bounce1"></div>
      <div className="double-bounce2"></div>
    </div>
  )
}
const Itinerary = (props) => {
  const {time, description} = props;
  return (  <div className="shcedule-placed flex">
      <div className="time">
        <p>{time}</p>
      </div>
      <div className="description-time">
        <p>{description}</p>
      </div>
    </div>
  )
  
};
export default enhance(Myplanselect)