import React from 'react';
import { Link } from 'react-router-dom'

const RequestTile = props => {
  return(
    <div className="cell small-12 large-6">
      <div className="card location-tile">
        <div className="card-section grid-x grid-padding-x">
          <div className="cell small-10 large-8">
            <h3>{props.description}</h3>
            <p className="location-index-citystate">{props.city}, {props.state}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestTile
