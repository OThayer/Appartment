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
      <div className="jumbotron-index">
        <h1 className="display-4">Hello {currentUser.first_name}!</h1>
        <p className="lead">Habitate is the best new property management application for tenants and landlords</p>
        <hr className="my-4"/>
        <p>Simplify maintenance requests, monthly payments and document management in just a few clicks</p>
      </div>

    <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="10000">
            <img src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1873&q=80" className="d-block w-100" alt="..."/>
            <div class="carousel-caption d-none d-md-block" id="slide-1">
              <h3>Make Your Home Feel Like Home Again</h3>
              <p>Habitate makes renting easy. Control your experience with the touch of a few keys</p>
            </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1534398079543-7ae6d016b86a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block" id="slide-2">
            <h3>Place maintenance requests right from your computer</h3>
            <p>Forget always being sent to voicemail, place work requests for plumbers, electricians, and more.</p>
            <a className="btn btn-primary btn-lg" href="/MaintenanceInfoPage" role="button">Learn more</a>
          </div>
        </div>
        <div className="carousel-item">
          <img src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80" className="d-block w-100" alt="..."/>
          <div class="carousel-caption d-none d-md-block" id="slide-3">
            <h3>Never Miss a Rent Payment Again</h3>
            <p>With Stripe, setting up automated payments has never been easier.</p>
            <a className="btn btn-primary btn-lg" href="/paymentsinfo" role="button">Learn more</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Index
