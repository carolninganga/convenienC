import React, { Component } from 'react';
import Search from './Search';
import Result from './Result';
import API from '../../utils/YelpAPI';
import './App.css';
class App extends Component {
  state = {
    result: [],
    term: "",
    latitude: "",
    longitude: "",
    location:""
  };
  // componentDidMount() {
  //   this.searchStore('coffee',40,-120);
  // }
  searchStore = (term,latitude,longitude, location) => {
    API.search(term,latitude,longitude,location)
    .then(res => console.log(res.data.businesses))
      .then(res => this.setState({ result: res.data.businesses })) 
      .catch(err => console.log(err));
  };
  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState ({
      [name]: value
    });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStore(this.state.term, this.state.latitude,this.state.longitude,this.state.location);
  }
  render() {
    console.log("test",this.state.location)

    return (
      <div className="container h-100">  
      <div className="row h-100 justify-content-center align-items-center">
        <form className="col-10">
        <Search 
                term={this.state.term}
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                location={this.state.location}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
        <Result 
          result = {this.state.result}
        />
        </form>
      </div>
      </div>
    )
  }
}
export default App;