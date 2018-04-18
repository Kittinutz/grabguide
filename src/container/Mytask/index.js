import React from 'react';
import Header from '../../component/Header/Header'
import Footer from '../../component/Footer'
import moment from 'moment'
import enhance from './HOCMytask';
const Mytask = (props) => {
  return (
    <div>
      <Header icon="plus-circle-o"/>
      <div className="content animated fadeIn">
        <div className="content-header">
          <h1>My Booking Trips</h1>
          Card HERE
          
        </div>
      </div>
      <Footer/>
    </div>
  
  )
}
export default enhance(Mytask);