import React, { Component } from "react";
import styles from "./businessSignUp-style.css";
import { user as userAPI } from "../../utils/API";
import { Redirect } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid/Grid";
import { Input } from "../../components/Form/Form";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

class BusinessSignUp extends Component {
  state = {
      email: "",
      username: "",
      password: "",
      passwordConf: "",
    };
  

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.email && this.state.username && this.state.password, this.state.passwordConf)

    // validate all fields
    if (!this.state.email || !this.state.password || !this.state.passwordConf) {
      this.props.setLoading(false);
      // set error alert to user
      return this.props.setAlertInfo({
        theme: "warning",
        message: "Please fill all required fields",
      });
    }

    // validate pass === to pass confirmation.
    if (this.state.password.trim() !== this.state.passwordConf.trim()) {
      this.props.setLoading(false);
      // set error alert to user
      return this.props.setAlertInfo({
        theme: "warning",
        message: "Your password fields do not match.",
      });
    }

    // if good to go
    userAPI
      .signup({
        username: this.state.username.trim(),
        email: this.state.email.trim(),
        password: this.state.password.trim(),
        passwordConf: this.state.passwordConf.trim(),
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
    console.log(this.props)
    return (
      <div className="input-form">
        <Container fluid>
          <Row>
            <Col size="12">
              <Card title="SIGNUP">
                <form className={styles.form}>
                  <Input
                    value={this.state.username}
                    onChange={this.handleInputChange}
                    name="username"
                    placeholder="username (required)"
                  />
                  <Input
                    value={this.state.email}
                    onChange={this.handleInputChange}
                    name="email"
                    placeholder="email (required)"
                  />
                  <Input
                    value={this.state.password}
                    onChange={this.handleInputChange}
                    name="password"
                    placeholder="(required)"
                    type="password"
                  />
                  <Input
                    value={this.state.passwordConf}
                    onChange={this.handleInputChange}
                    name="passwordConf"
                    placeholder="(required)"
                    type="password"
                  />
                  <span className="linkBtn">
                  <div>
                    <Link to="/businessConfirmation">
                        <div className="btn waves-effect waves-light white-text">
                          Business Confirmation
                        </div>
                    </Link>
                  </div>
                      {/* Confirm Business
                    </ClickBtn> */}
                  </span>
                </form>
              </Card>
            </Col>
          </Row>
          {/* redirect on authenticated */}
          {this.props.user && this.props.user._id ? (
            <Redirect to="/Login" />
          ) : (
            <div></div>
          )}
        </Container>
      </div>
    );
  }
}

export default BusinessSignUp;
