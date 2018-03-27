import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import * as actions from '../../action/index';
import Footer from '../../component/Footer/Footer';
import Header from '../../component/Header/Header';
import {Button} from 'antd';


class Trip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            iconLoading: false,
        }
    }

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

    enterLoading = () => {
        this.setState({loading: true});
    };

    enterIconLoading = () => {
        this.setState({iconLoading: true},()=>{
            const {id} = this.props.match.params;
            return setTimeout(()=>{ this.props.history.push(`/booking/trip/${id}`) }, 1000);
        });
    };

    render() {

        if (this.props.tripseleted.tripseleted) {
            const guidename = this.props.tripseleted.tripseleted.guide.name;
            const guidesurname = this.props.tripseleted.tripseleted.guide.surname;
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
                            <div className="guide">
                                <h1>Guide</h1>
                                <div className="guideprofile">
                                    <img src="" className="img"
                                         style={{backgroundImage: 'url(\'https://www.drupal.org/files/profile_default.png\')'}}
                                         alt=""/>
                                    <p>{guidename} {guidesurname}</p>
                                </div>

                            </div>
                            <div className="bookingtrip">
                                <Button type="primary" icon="environment-o" loading={this.state.iconLoading}
                                        onClick={this.enterIconLoading}>
                                    BOOKING THIS TRIP
                                </Button>
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