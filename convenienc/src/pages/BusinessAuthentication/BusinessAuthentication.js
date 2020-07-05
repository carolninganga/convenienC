import React, { Component } from 'react';
import { user as userAPI } from '../../utils/API';
import { Redirect } from 'react-router-dom';
import { Col, Row, Container } from '../../components/Grid';
import { Input, FormBtn } from '../../components/Form';
import Card from '../../components/Card';
import styles from './style.css';

class BusinessAuthentication extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '',
            zipcode: '',
            city: ''
		};
	}

	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value.trim()
		});
	};

	handleFormSubmit = event => {
		event.preventDefault();
		if (this.state.name && this.state.zipcode && this.state.city) {
			console.log(this.state.name);

			// set loading state
			this.props.setLoading(true);

			userAPI
				.yelpAuthentication({
					name: this.state.name,
                    zipcode: this.state.zipcode,
                    city: this.state.city
				})
				.then(res => {
					if (res.status === 200) {
						console.log(res.status);
						this.props.setLoading(false);
						this.props.setUser(res.data);
					}
				})
				.catch(err => {
					this.props.setLoading(false);
					console.warn(err.response.data);
					this.props.setAlertInfo({
						theme: 'warning',
						message: err.response.data
					});
				});
		}
	};

	render() {
		return (
			<Container fluid>
				<Row>
					<Col size='12'>
						<Card title='BusinessAuthentication'>
							<form className={styles.form} onSubmit={this.handleFormSubmit}>
								<Input
									value={this.state.name}
									onChange={this.handleInputChange}
									name='name'
									placeholder='name (required)'
								/>
								<Input
									value={this.state.zipcode}
									onChange={this.handleInputChange}
									name='zipcode'
									placeholder='(required)'
									type='num'
								/>
                                <Input
									value={this.state.city}
									onChange={this.handleInputChange}
									name='city'
									placeholder='(required)'
									type='text'
								/>

								<FormBtn
									disabled={!(this.state.name && this.state.zipcode && this.state.city)}
									onClick={this.handleFormSubmit}
								>
									Business Authentication
								</FormBtn>
							</form>
						</Card>
					</Col>
				</Row>

				{/* Redirect on authentication */}
				{this.props.user && this.props.user._id ? <Redirect to='/login' /> : <></>}
			</Container>
		);
	}
}

export default BusinessAuthentication;
