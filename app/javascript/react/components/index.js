import React, { useState, useEffect } from 'react';

const Index = props => {
  const[currentUser, setCurrentUser] = useState({})

    useEffect(() => {
      fetch(`/api/v1/users`)
      .then(response => {
        if (response.ok){
          return response
        } else {
          throw new Error(`${response.status} ${response.statusText}`)
        }
      })
      .then(body => {
        return body.json()
      })
      .then(json => {
        setCurrentUser(json)
      })
    }, [])

  return (
    <div>
      <div className="jumbotron">
        <h1 className="display-4">Hello {currentUser.first_name}!</h1>
        <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
        <hr className="my-4"/>
        <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
      </div>
    </div>
  )
}

export default Index
