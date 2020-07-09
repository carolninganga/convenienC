import React, { Component } from "react";
import styles from "./businessConfirmation-style.css";
import { user as userAPI } from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input } from "../../components/Form/Form";
import Login from "../../pages/Login/Login";
import Card from "../../components/Card/Card";

class BusinessConfirmation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      zipcode: "",
      city: "",
    };
  }

  componentDidMount() {}

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.setLoading(true);

    // validate all fields
    if (!this.state.name || !this.state.zipcode || !this.state.city) {
      this.props.setLoading(false);
      // set error alert to user
      return this.props.setAlertInfo({
        theme: "warning",
        message: "Please fill all required fields",
      });
    }

    // // validate pass === to pass confirmation.
    // if(this.state.password.trim() !== this.state.passwordConf.trim()) {
    // 	  this.props.setLoading(false);
    //   // set error alert to user
    //   return this.props.setAlertInfo({theme:"warning", message:"Your password fields do not match."})
    // }

    // if good to go
    userAPI
      .confirmation({
        username: this.state.name.trim(),
        zipcode: this.state.zipcode.trim(),
        city: this.state.city.trim(),
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.props.setUser(res.data);
          this.props.setLoading(false);
          return <Redirect to="/home" />;
        } else {
          this.props.setLoading(false);
          this.props.setAlertInfo({
            theme: "warning",
            message: res.response.data,
          });
        }
      })
      .catch((err) => {
        this.props.setLoading(false);
        console.log(err.response.data);
        this.props.setAlertInfo({
          theme: "warning",
          message: err.response.data,
        });
      });
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="12">
            <Card title="Business Confirmation">
              <form className={styles.form} onSubmit={this.handleFormSubmit}>
                <Input
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  placeholder="enter name"
                  type="text"
                />
                <Input
                  value={this.state.zipcode}
                  onChange={this.handleInputChange}
                  name="zipcode"
                  placeholder="enter zipcode"
                  type="text"
                />
                <Input
                  value={this.state.city}
                  onChange={this.handleInputChange}
                  name="city"
                  placeholder="enter city"
                  type="text"
                />

                <Login
                  disabled={
                    !(
                      this.state.email &&
                      this.state.password &&
                      this.state.passwordConf
                    )
                  }
                  theme="primary"
                  onClick={this.handleFormSubmit}
                >
                  Login
                </Login>
              </form>
            </Card>
          </Col>
        </Row>
        {/* redirect on authenticated */}
        {this.props.user && this.props.user._id ? (
          <Redirect to="/home" />
        ) : (
          <div></div>
        )}
      </Container>
    );
  }
}

export default BusinessConfirmation;
