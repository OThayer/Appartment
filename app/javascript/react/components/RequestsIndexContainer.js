import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Dropzone from 'react-dropzone'
import RequestTile from './RequestTile'

const RequestsIndexContainer = props => {
  const [photoUpload, setPhotoUpload] = useState([])
  const [requests, setRequests] = useState([])
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

  const onDrop = (file) => {
    if(file.length == 1) {
      setPhotoUpload(file)
    } else {
      setMessage("You can only upload 1 photo")
    }
  }

  const handleChange = event => {
  setNewRequest({
    ...newRequest,
    [event.currentTarget.name]: event.currentTarget.value
  })
 }

 const onRequestSubmitted = event => {
      let submittedFields = new FormData()
      submittedFields.append("work_type", newRequest.work_type)
      submittedFields.append("description", newRequest.description)
      submittedFields.append("maintenance_pic", photoUpload[0])
    fetch(`/api/v1/requests.json`, {
      method: 'POST',
      credentials: "same-origin",
      body: submittedFields
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

    useEffect(() => {
    fetch('/api/v1/requests')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      setRequests(body)
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`))
  }, [])

  const RequestTiles = requests.map((request) => {
    return(
      <RequestTile
        key={request.id}
        id={request.id}
        description={request.description}
        worktype={request.work_type}
        userId={request.user_id}
        time={request.review_date}
        />
    )
  })

  return (
     <div id="maintenance-form">
      <div className="container col-md-auto" id="new-form">
        <div className="container" className="text-center">
          <h2>Maintenance Request</h2>
        </div>
        <div className="cell">
        <div className="container" id="type-buttons">
          <form className="callout" onSubmit={onRequestSubmitted}>
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
              <textarea placeholder="Please leave a detailed description of what needs fixed"
              type="text"
              id="description"
              name="description"
              cols="70"
              onChange={handleChange}/>

              <div>
              <section>
                  <div className="dropzone">
                    <Dropzone
                      className=""
                      multiple={false}
                      onDrop={file => onDrop(file)}
                    >
                      {({getRootProps, getInputProps}) => (
                          <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Click to upload photo / Drop your photo here</p>
                          </div>
                      )}
                    </Dropzone>
                  </div>
                  <aside>
                    <ul>
                      {
                        photoUpload.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
                      }
                    </ul>
                  </aside>
                </section>
                </div>

              <input className="btn btn-primary" type="submit" value="Submit"/>
            </label>
          </div>
        </form>
      </div>
    </div>
    <h2 className="text-center">
    My Requests
    {RequestTiles}
    </h2>
  </div>
</div>

  )
}


export default RequestsIndexContainer
