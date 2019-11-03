import React, { useState, useEffect } from 'react';

const MaintenanceInfoPage = props => {
  return (
    <div id="maintenance-info">
      <div>
        <h1>No More Instant Voicemail. No More Uncertainty.</h1>
        <h3>Habitate Makes Requesting Maintenance Easy</h3>
        <hr/>
      </div>
      <div>
        <p>Making maintenance requests has never been easier than with Habitate. Simply
        select what type of expert is needed to fix the issue, such as a plumber,
        electrician, HVAC Technician, etc. Provide some details about your problem
        in the form to help the issue get resolved as quickly as possible. Tenants also
        have the ability to provide photos of any damage to the dwelling, or faulty equipment
        in question to help identitfy the root of the problem.
        <br/>
        Forget constantly being sent to voicemail or trying to fix issues on your own anymore.
        Let Habitate take care of it.
        </p>
      </div>
    </div>
  )
}

export default MaintenanceInfoPage
