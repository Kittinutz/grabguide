import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../action';
import Footer from '../component/Footer';
import Header from '../component/Header';

const schedule = [];

class Trip extends Component {
    componentWillMount() {
        const {id} = this.props.match.params;
        this.props.SelectedTrip(id);
    }

    renderSchedule() {
        return _.map(this.props.tripseleted.tripseleted.schedules, value => {

            return (  <div className="shcedule-placed flex">
                    <div className="time">
                        <p>{value.time}</p>
                    </div>
                    <div className="description-time">
                        <p>{value.description}</p>
                    </div>
                </div>
            )

        });
    }


    render() {

        if (this.props.tripseleted.tripseleted) {
            return (
                <div>
                    <Header icon="plus-circle-o"/>
                    <div className="content">
                        <div className="container">
                            <div className="trip-image">
                                <img className="img"
                                     style={{backgroundImage: `url(${this.props.tripseleted.tripseleted.image})`}}
                                     alt=""/>
                            </div>
                            <div className="trip-name">
                                <h1>{this.props.tripseleted.tripseleted.name}</h1>
                            </div>
                            <div className="description">
                                <p>{this.props.tripseleted.tripseleted.description}</p>
                            </div>
                            <div className="schedule">
                                <h1>itinerary</h1>
                                <div className="shcedule-placed">
                                    {this.renderSchedule()}
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
        else {
            return (
                <div>
                    <Header icon="plus-circle-o"/>
                    <div className="content">
                        <div className="container">
                            <div>Loading ...</div>
                        </div>
                    </div>
                    <Footer/>
                </div>
            )
        }
    }
}

function mapStateToProps({tripseleted}) {
    return {
        tripseleted
    }
}

export default connect(mapStateToProps, actions)(Trip);