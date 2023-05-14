import React from 'react'

const About = () => {
  return (
    <div><div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col">
      <div className="card h-100">
        
        <div className="card-body">
          <h5 className="About">About</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        
        <div className="card-body">
          <h5 className="Highlights">Highlights</h5>
          <p className="card-text">
            This card has supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">

        <div className="card-body">
          <h5 className="Recent News & Activity">Recent News & Activity</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This card has even longer content than the
            first to show that equal height action.
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default About