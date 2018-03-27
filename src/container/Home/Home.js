import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../../action/index';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import Tripcontent from '../../component/Tripcontent/Tripcontent';
import Guidecontent from '../../component/Guidecontent/Guidecontent';
import Communitybase from '../../component/Communitybase/Communitybase';
import logo from '../../asset/image/grabguide.png';
import composeHOC from './HOCHome';
// class Home extends Component {
//     constructor(props) {
//         super(props);
//     }
//
//     componentWillMount() {
//         this.props.Gettripapi();
//         this.props.Getguideapi();
//     }
//
//     render() {
//         return (
//             <div>
//                 <Header icon="search"/>
//                 <div className="content">
//                     <div className="content header">
//                         <img src={logo} alt=""/>
//                     </div>
//                     <Tripcontent trips={this.props.trip.trips}/>
//                     <div className="container">
//                         <div className="recommencetripbyguide">
//                             <h2>Community Base Tourism</h2>
//                         </div>
//                         <Communitybase trips={this.props.trip.trips}/>
//
//                         {/*Guide*/}
//                         <Guidecontent guides={this.props.guide.guides}/>
//                     </div>
//                 </div>
//                 <Footer/>
//             </div>
//         );
//     }
// }
//
// function mapStateToProps({trip, guide}) {
//     return {
//         trip,
//         guide
//     }
// }
//
// export default connect(mapStateToProps, actions)(Home);

const Home =(props)=>{
    console.log(props);
    return (
        <div>
            <Header icon="search"/>
            <div className="content">
                <div className="content header">
                    <img src={logo} alt=""/>
                </div>
                <Tripcontent trips={props.trip.trips}/>
                <div className="container">
                    <div className="recommencetripbyguide">
                        <h2>Community Base Tourism</h2>
                    </div>
                    <Communitybase trips={props.trip.trips}/>

                    {/*Guide*/}
                    <Guidecontent guides={props.guide.guides}/>
                </div>
            </div>
            <Footer/>
        </div>

    )
};
export default Home;