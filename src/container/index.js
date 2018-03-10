import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from '../action';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Tripcontent from '../component/Tripcontent';
import Guidecontent from '../component/Guidecontent';
import Communitybase from '../component/Communitybase';
import logo from '../asset/image/grabguide.png';
class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.Gettripapi();
        this.props.Getguideapi();
    }

    render() {
        return (
            <div>
                <Header icon="search"/>
                <div className="content">
                    <div className="content header">
                        <img src={logo} alt=""/>
                    </div>
                    <Tripcontent trips={this.props.trip.trips}/>
                    <div className="container">
                        <div className="recommencetripbyguide">
                            <h2>Community Base Tourism</h2>
                        </div>
                        <Communitybase trips={this.props.trip.trips}/>

                        {/*Guide*/}
                        <Guidecontent guides={this.props.guide.guides}/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

function mapStateToProps({trip, guide}) {
    return {
        trip,
        guide
    }
}

export default connect(mapStateToProps, actions)(Home);