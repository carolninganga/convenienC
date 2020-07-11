import React, { Component } from "react";
import styles from "./businessConfirmation-style.css";
// import { user as userAPI } from "../../utils/API";
// import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input } from "../../components/Form/Form";
// import Login from "../../pages/Login/Login";
import Card from "../../components/Card/Card";
import SearchComponent from "../../components/YelpResult/Search";
import Result from "../../components/YelpResult/Result";
import API from "../../utils/YelpAPI";

// let businessSearch = [];
class Search extends React.Component {
  state = {
    result: [],
    term: "",
    location:""
  };

  searchStore = (term,location) => {
    API.search(term,location)
    .then(async res => console.log(res.data.businesses))
      .then(res => this.setState({ result: res.data.businesses })) 
      .catch(err => console.log(err));
  };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchStore(this.state.term,this.state.location);
  
    // // validate all fields
    // if (!this.state.name || !this.state.zipcode || !this.state.city) {
    //   this.props.setLoading(false);
    //   // set error alert to user
    //   return this.props.setAlertInfo({
    //     theme: "warning",
    //     message: "Please fill all required fields",
    //   });
    //}
  };

  // class BusinessConfirmation extends Component {
  //   constructor(props) {
  //     super(props);
  //     this.state = {
  //       name: "",
  //       zipcode: "",
  //       city: "",
  //     };
  //   }

  // componentDidMount() {}

  // // validate pass === to pass confirmation.
  // if(this.state.password.trim() !== this.state.passwordConf.trim()) {
  // 	  this.props.setLoading(false);
  //   // set error alert to user
  //   return this.props.setAlertInfo({theme:"warning", message:"Your password fields do not match."})
  // }

  // if good to go
  //   userAPI
  //     .confirmation({
  //       username: this.state.name.trim(),
  //       zipcode: this.state.zipcode.trim(),
  //       city: this.state.city.trim(),
  //     })
  //     .then((res) => {
  //       console.log(res);
  //       if (res.status === 200) {
  //         this.props.setUser(res.data);
  //         this.props.setLoading(false);
  //         return <Redirect to="/home" />;
  //       } else {
  //         this.props.setLoading(false);
  //         this.props.setAlertInfo({
  //           theme: "warning",
  //           message: res.response.data,
  //         });
  //       }
  //     })
  //     .catch((err) => {
  //       this.props.setLoading(false);
  //       console.log(err.response.data);
  //       this.props.setAlertInfo({
  //         theme: "warning",
  //         message: err.response.data,
  //       });
  //     });
  // };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Card title="Business Confirmation">
              <SearchComponent term={this.state.term}
                location={this.state.location}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}/>
        <Result 
          result = {this.state.result}/>
              
            </Card>
          </Col>
        </Row>
        {/* redirect on authenticated */}
        {/* {this.props.user && this.props.user._id ? (
          <Redirect to="/home" />
        ) : (
          <div></div>
        )} */}
      </Container>
    );
  }
}

export default Search;
