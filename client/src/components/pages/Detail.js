import React, { Component }from 'react';
import ProfileContext from '../../context/profile/profileContext';
import axios from 'axios';
import L from 'leaflet'




class Detail extends Component {

    componentDidMount(){

   fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=HbAqyAns3LoXacb0KaH60uoNyxmampoE&location=${this.props.location.query.zipcode}`)
      .then(response => response.json())
      .then(data => { 
          console.log(data)
         var {lat, lng} = data.results[0].locations[0].latLng    
         var mymap = L.map('mapid').setView([lat, lng], 13);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoic3RhcmR1c3QxOTEiLCJhIjoiY2thNjMzZzdlMDNtdTJ6bWptaTFqa3Y2MSJ9.VIX2KRmemtC5qDAMyL9Jug'
    }).addTo(mymap);
    
    var marker = L.marker([lat, lng]).addTo(mymap);
    
    var circle = L.circle([lat, lng], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(mymap);
    
    var polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(mymap);
        });
    }

    render() {
        return (
            <div className="container detailContainer">
            <div className="text-center">
              {/* <img className="img-avatar rounded-circle" src="https://api.adorable.io/avatars/285"/> */}
              <h1 className="userName">{this.props.location.query.firstname} {this.props.location.query.lastname}</h1>
 
            </div>
            <ul className="list-unstyled text-muted">
              <li id="location"><i className="fas fa-map-marker-alt" aria-hidden="true"></i> {this.props.location.query.city} {this.props.location.query.zipcode}</li>
              {/* <a href="#"><li id="contactEmail"><i className="fas fa-link" aria-hidden="true"></i> </li></a> */}
              {/* <li><i className="far fa-calendar-alt" aria-hidden="true"></i> Joined a year ago</li> */}
            </ul>
            <p id="bio">{this.props.location.query.bio}</p>

            <div id="mapid" className="mb-3">     
            </div>
          </div>
        )
    }
}


export default Detail;