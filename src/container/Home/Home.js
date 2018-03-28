import React from 'react'

import Footer from '../../component/Footer/index'
import Header from '../../component/Header/Header'
import Tripcontent from '../../component/Tripcontent/Tripcontent'
import Guidecontent from '../../component/Guidecontent/Guidecontent'
import Communitybase from '../../component/Communitybase/Communitybase'
import logo from '../../asset/image/grabguide.png'



const Home =(props)=>{
    return (
        <div>
            <Header icon="search"/>
            <div className="content">
                <div className="content header">
                    <img src={logo} alt=""/>
                </div>
                <Tripcontent trips={props.trips}/>
                <div className="container">
                    <div className="recommencetripbyguide">
                        <h2>Community Base Tourism</h2>
                    </div>
                    <Communitybase trips={props.trips}/>
                    <Guidecontent guides={props.guides}/>
                </div>
            </div>
            <Footer/>
        </div>

    )
};
export default Home;