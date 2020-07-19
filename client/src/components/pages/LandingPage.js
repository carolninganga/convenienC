import React, { Component } from 'react'

 class LandingPage extends Component {
  render() {
    return (
      <div className="container landingpageContainer">
        <div className="text-center">
          <h3 className="businessName">{this.props.location.query.name}</h3>
          <ul className="list">
            <li><i className="fas fa-envelope-open" /> {this.props.location.query.email}</li>
            <li><i className="fas fa-phone" /> {this.props.location.query.phone}</li>
            <li><i className="fas fa-map-marker-smile" /> {this.props.location.zipcode}</li>
            {/* <li> 
            <ul>
            {items.map( item => <li>
            <i className="fas" /> {this.props.location.query.item.name}
            </li>)}
            </ul>
          </li> */}
          </ul> 

        </div>   
      </div>
    )
  }
}

export default LandingPage;

