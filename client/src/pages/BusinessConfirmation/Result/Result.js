import React from 'react';
//import './style.css';

const gridContainerStyle = {
  display: "grid",
  gridTemplateColumns: "auto auto",
  gridColumnGap: "3rem !important",
  gridRowGap: "3rem !important"
}

function Result(props) {
    return ( 

        <div className="card mt-3 mb-3">
        <div className="card-header" style={{backgroundColor: "#F8F9FA"}}>
          <i className="far fa-newspaper"></i> Stores Nearby
        </div>
        <div id="article-section" className="card-body">
        <div style={gridContainerStyle}>


        {props.result ? props.result.map((item) => { 
          return(
            
                <div className="card" style={{width: "25rem"}}>
                    <img src={item.image_url} className="card-img-top" alt="businessImage" style={{width:"100%", height:"250px"}} />
                        <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p>Phone: {item.display_phone}</p>
                        <p className="card-text">{item.location.address1} {item.location.city} {item.location.state} {item.location.zip_code}</p>
                        {/* <p className="card-text">{</p> */}
                        <span className="rating">Rating:{item.rating}</span>{"   "}<a href={item.url} className="btn btn-primary"><span>View More on Yelp</span></a>
                      </div>
                </div>
            )
          }): <p>No stores available!</p>}
          </div>
        </div>
        </div>
    )
}
export default Result;