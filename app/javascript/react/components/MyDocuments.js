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
        <li class="list-group-item active">Cras justo odio</li>
        <li class="list-group-item">Dapibus ac facilisis in</li>
        <li class="list-group-item">Morbi leo risus</li>
        <li class="list-group-item">Porta ac consectetur ac</li>
        <li class="list-group-item">Vestibulum at eros</li>
      </ul>
      </div>
    </div>
  )
}
export default MyDocuments
