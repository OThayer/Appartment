import React, { useState, useEffect } from 'react';
import Dropzone from 'react-dropzone'


const MyDocuments = props => {
  const [docPhotoUpload, setDocPhotoUpload] = useState([])
  const [newDocument, setNewDocument] = useState({
    title: ""
  })

  const handleChange = event => {
  setNewDocument({
    ...newDocument,
    [event.currentTarget.name]: event.currentTarget.value
  })
 }

 const onDrop = (file) => {
   if(file.length == 1) {
     setDocPhotoUpload(file)
   } else {
     setMessage("You can only upload 1 photo")
   }
 }

  const onDocumentSubmitted = event => {
       let submittedFields = new FormData()
       submittedFields.append("title", newDocument.title)
       submittedFields.append("body", docPhotoUpload[0])

     fetch(`/api/v1/documents.json`, {
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

  return(
    <div>
    <form className="callout" id="document-form" onSubmit={onDocumentSubmitted}>
      <div id="document-submit">
        <h1>Submit a Document</h1>
        <h4 id="document-title">Title of Document</h4>
        <div>
          <label htmlFor="title" id="title" value="title">
          <textarea placeholder="Title of Document"
          type="text"
          id="title"
          name="title"
          onChange={handleChange}/>
          </label>
        </div>
        <div>
        <section>
            <div className="dropzone">
              <Dropzone
                className="body"
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
                  docPhotoUpload.map(file => <li key={file.name}>{file.name} - {file.size} bytes</li>)
                }
              </ul>
            </aside>
          </section>
          </div>
          <div>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </div>
      </div>
      </form>
      <ul className="list-group">
        <li className="list-group-item active">Lease Agreement</li>
        <li className="list-group-item">Renters Insurance</li>
        <li className="list-group-item">Pet Policy</li>
      </ul>
      </div>
  )
}
export default MyDocuments
