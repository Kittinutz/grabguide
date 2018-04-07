import React from 'react'
import map from 'lodash/map'

export default (props) => {
  const {trips} = props
  return (
    
    <div className="trip-content">
      <div className="placed-trip-guide">
        {
          map(trips, (data, index) =>
            <CommunityItem
              key={data.id}
              id={data.name}
              name={data.name}
              imageUrl={data.image}/>)
        }
      </div>
    </div>
  
  )
  
}

const CommunityItem = (props) => {
  const {imageUrl, name} = props
  return (
    <div className="trip-guide">
      <img
        className="img"
        style={{backgroundImage: `url(${imageUrl})`}}
        alt=""/>
      <h4>{name}</h4>
    </div>
  )
}
