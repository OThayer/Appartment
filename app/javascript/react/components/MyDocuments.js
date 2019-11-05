import React, { useState, useEffect } from 'react';

const MyDocuments = props => {

  return(
    <div>
      <div id="document-submit">
        <h1>Submit a Document</h1>
        <input type="file" id="document"/>
        <input className="btn btn-primary" type="submit" value="Submit"/>
      </div>
      <div>
      <ul class="list-group">
        <li class="list-group-item active">Lease Agreement</li>
        <li class="list-group-item">Renters Insurance</li>
        <li class="list-group-item">Pet Policy</li>
      </ul>
      </div>
    </div>
  )
}
export default MyDocuments
