import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RequestsIndexContainer = props => {
  const [newRequest, setNewRequest] = useState({
    type: 0,
    description: "",
  })

  const handleTypeClick = event => {
    setNewRequest({
      ...newRequest,
      type: event.currentTarget.id
    })
  }

  return (
    <div>
    <div className="grid-x grid-padding-x" id="new-form">
    <div className="cell">
      <h2>Maintenance Request</h2>
    </div>
    <div className="cell">
    </div>
    <div className="container" id="type-buttons">
      <form className="callout">
        <label htmlFor="type">
          Type of Maintenance:
          <div className="type-plumbing" onClick={handleTypeClick} id="plumbing">
            <i className="fa fa-shower"></i>
            Plumbing
          </div>
          <div className="type-electric" onClick={handleTypeClick} id="electric">
            <i className="fas fa-lightbulb"></i>
            Electric
          </div>
          <div className="type-hvac" onClick={handleTypeClick} id="HVAC">
            <i className="fas fa-thermometer-half"></i>
            HVAC
          </div>
          <div className="type-capentry" onClick={handleTypeClick} id="carpentry">
            <i className="fas fa-hammer"></i>
            Carpentry
          </div>
        </label>

        <label htmlFor="description">
          Description of maintenance needed:
          <textarea type="text" id="description" name="description"/>
        </label>

        <input className="button" type="submit" value="Submit" />
      </form>
    </div>
  </div>
</div>
)
}


export default RequestsIndexContainer
