import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const RequestsIndexContainer = props => {
  const [newRequest, setNewRequest] = useState({
    work_type: "",
    description: ""
  })

  const handleTypeClick = event => {
    setNewRequest({
      ...newRequest,
      work_type: event.currentTarget.id
    })
  }

  const handleChange = event => {
  setNewRequest({
    ...newRequest,
    [event.currentTarget.name]: event.currentTarget.value
  })
 }

 const onRequestSubmitted = (payload) => {
    fetch(`/api/v1/requests`, {
      method: 'POST',
      credentials: "same-origin",
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        throw new Error(`${response.status} ${response.statusText}`)
      }
    })
    .then(body => {
      return body.json()
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

    const onSubmitHandler = (event) => {
      event.preventDefault()
      onRequestSubmitted(payload)
    }

    let payload = {
      work_type: newRequest.work_type,
      description: newRequest.description
    }

    let maintenanceType = ""
    if (newRequest.work_type == "plumbing") {
      maintenanceType = "Looks like you need a plumber to fix..."
    } else if (newRequest.work_type == "electric") {
      maintenanceType = "Looks like you need an electrician to fix..."
    } else if (newRequest.work_type == "HVAC") {
      maintenanceType = "Looks like you need an HVAC Technician to fix..."
    } else if (newRequest.work_type == "carpentry") {
      maintenanceType = "Looks like you need a carpenter to fix..."
    } else if (newRequest.work_type == "misc") {
      maintenanceType = "Looks like you have a miscellaneous issue..."
    }

  return (
    
    <div class="jumbotron-request" img="https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80">
    <div id="maintenance-form">
      <div className="container col-md-auto" id="new-form">
        <div className="container" className="text-center">
          <h2>Maintenance Request</h2>
        </div>
        <div className="cell">
        </div>
        <div className="container" id="type-buttons">
          <form className="callout" onSubmit={onSubmitHandler}>
            <label htmlFor="work-type" className="buttons">
            <div id="button-holder">
              <div className="buttons-hooray">
                <button type="button" className="btn btn-primary" onClick={handleTypeClick} id="plumbing">
                  <i className="fa fa-shower"></i>
                </button>
              </div>
              <div className="buttons-hooray">
                <button type="button" className="btn btn-primary" onClick={handleTypeClick} id="electric">
                  <i className="fas fa-lightbulb"></i>
                </button>
              </div>
              <div className="buttons-hooray">
              <button type="button" className="btn btn-primary" onClick={handleTypeClick} id="HVAC">
                <i className="fas fa-thermometer-half" id="thermometer"></i>
              </button>
              </div>
              <div className="buttons-hooray">
              <button type="button" className="btn btn-primary" onClick={handleTypeClick} id="carpentry">
                <i className="fas fa-hammer" id="hammer"></i>
              </button>
              </div>
              <div className="buttons-hooray">
              <button type="button" className="btn btn-primary" onClick={handleTypeClick} id="misc">
                <i className="fas fa-question-circle" id="misc"></i>
              </button>
              </div>
             </div>
          </label>
          <h4 id="maintenance-message">{maintenanceType}</h4>
          <div id="text-field">
            <label htmlFor="description" id="description" value="description" >
              <textarea placeholder="Please leave a detailed description of what needs fixed" type="text" id="description" name="description" cols="70" onChange={handleChange}/>
              <input className="btn btn-primary" type="submit" value="Submit"/>
            </label>
          </div>
        </form>
      </div>
    </div>
  </div>
  </div>
  )
}


export default RequestsIndexContainer
