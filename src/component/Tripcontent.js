import React, {Component} from 'react';
import _ from 'lodash';
class Tripcontent extends Component {
    constructor(props){
        super(props)
    }
    rendertrip=()=>{

          return  _.map(this.props.trips,value => {
                return (
                    <div className="trip-guide">
                        <img
                            className="img"
                            style={{backgroundImage: `url(${value.image})`}}

                            alt=""/>
                        <h1>{value.name}</h1>
                    </div>
                )
            });


    };
    render() {
        if(this.props.trips){
            this.rendertrip();
        }

        return (
            <div className="container">
                <div className="recommencetripbyguide">
                    <h1>Recommence Trip</h1>
                </div>
                <div className="trip-content">
                    <div className="placed-trip-guide">
                        {this.rendertrip()}

                    </div>
                </div>
            </div>
        )
    }
}

export default Tripcontent;