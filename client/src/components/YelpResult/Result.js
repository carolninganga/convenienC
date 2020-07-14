import React from 'react'
function Result(props) {
    return (     
        <div className="card mt-3 mb-3">
        <div className="card-header" style={{backgroundColor: "#F8F9FA"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>
        <div id="article-section" className="card-body">
        {props.result ? props.result.map((item) => { 
          return(
              <li className='list-group-item' key={item.id}>
              <h5>{item.name}</h5>
              <p>Phone: {item.display_phone}</p>
              <p>Location: {item.location.address1}, {item.location.city}, {item.location.state} {item.location}</p>
              <p>Link: <a href={item.url}>View More on Yelp</a></p>
              </li>  
            )
          }): <p>No stores available!</p>}
        </div>
        </div>
    )
}
export default Result;