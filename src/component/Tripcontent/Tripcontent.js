import React, {Component} from 'react';
import _ from 'lodash';
import {Link} from 'react-router-dom';

class Tripcontent extends Component {
  constructor(props) {
    super(props)
  }
  
  rendertrip = () => {
    
    return _.map(this.props.trips, value => {
      return (
        
        <div key={value.id} className="trip-guide">
          <Link to={`/trip/${value.id}`}>
            <img
              className="img"
              style={{backgroundImage: `url(${value.image})`}}
              
              alt=""/>
            <h1>{value.name}</h1>
          </Link>
        </div>
      
      )
    });
    
    
  };
  
  render() {
    if (this.props.trips) {
      this.rendertrip();
    }
    
    return (
      <div className="container">
        <div className="recommencetripbyguide">
          <h1>Recommended trips</h1>
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