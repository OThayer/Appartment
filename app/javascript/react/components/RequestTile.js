import React from 'react';
import { Link } from 'react-router-dom'

const RequestTile = props => {

  let workSymbol = ""
  if (props.worktype == "plumbing") {
    workSymbol = "fa fa-shower"
  } else if (props.worktype == "electric") {
    workSymbol = "fas fa-lightbulb"
  } else if (props.worktype == "HVAC") {
    workSymbol = "fas fa-thermometer-half"
  } else if (props.worktype == "carpentry") {
    workSymbol = "fas fa-hammer"
  } else if (props.worktype == "misc") {
    workSymbol = "fas fa-question-circle"
  }

  return(
    <div className="cell small-12 large-6">
      <div className="card location-tile">
        <div className="card-section">
          <div id="my-requests-tile">
            <i className={workSymbol} id="work-symbol"></i>
            <p>{props.description}</p>
            <p  id="work-time" className="text-right">Submitted on: {props.time}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RequestTile
