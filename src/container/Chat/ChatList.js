
import React from 'react'
import {ReceiveMessage} from '../../Socket';
import enhance from './HOCchat';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
import Header from "../../component/Header/Header";
import Footer from '../../component/Footer/'
import 'react-chat-widget/lib/styles.css';

const logo = 'https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-1/p80x80/26733809_1881889798519544_8274912306008201191_n.jpg?_nc_cat=0&_nc_eui2=v1%3AAeHxt4MsbWjrp5q752__BKgt6geCGToB4Qs181IpkM9rd30i4X6uKqXhJ3DJ88RlYkJAuViVn8DwK96_ths1da7LFiZDpEOZL1z1QhZP_ClNWQ&oh=3a0860136f4bbf7869e2d5e68547b77b&oe=5B61CD03'
const Chatlist = (props)=>{
  const {SendMessage} = props
    ReceiveMessage("kittinutPramhan",(err,data)=>{
      addResponseMessage(data.message);
    })
  
  return(
    <div>
      <Widget
        title="Kittinut Tourguide"
        subtitle="And my cool subtitle"
        profileAvatar={logo}
        handleNewUserMessage={SendMessage}
      />
      
    </div>
   
    
  )
}
export default enhance(Chatlist);