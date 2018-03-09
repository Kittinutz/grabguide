import React, {Component} from 'react';
import _ from 'lodash';
class Communitybase extends Component {
    constructor(props){
        super(props);
    }
    renderComunitybase=()=>{
        return  _.map(this.props.trips,value => {
            return (
                <div className="trip-guide">
                    <img
                        className="img"
                        style={{backgroundImage: `url(${value.image})`}}

                        alt=""/>
                    <h4>{value.name}</h4>
                </div>
            )
        });
    };
    render() {
        return (

                <div className="trip-content">
                    <div className="placed-trip-guide">
                        {this.renderComunitybase()}
                    </div>
                </div>

        )
    }

}

export default Communitybase