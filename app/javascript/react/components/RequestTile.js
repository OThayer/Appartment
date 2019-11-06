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
      <div className="card location-tile">
        <div className="card-section">
          <div id="my-requests-tile">
          <div className="col md-4">
            <i className={workSymbol} id="work-symbol"></i>
          </div>
          <div className="col md-4">
          <p  id="work-time">Submitted on: {props.time}</p>
          <p>Seen: <i className="far fa-check-circle"></i></p>
          </div>
          <div className="col md-4" className="work-response">
            <p id="work-desc">{props.description}</p>
          </div>
          </div>
        </div>
      </div>
  )
}

export default RequestTile
