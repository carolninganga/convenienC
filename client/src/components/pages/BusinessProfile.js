import React, { useContext, Component }from 'react';
//import BusinessContext from '../../Business/businessContext';
import axios from 'axios';
class Business extends Component {
    state = {
        name: "",
        phone: "",
        city: "",
        zipcode: "",
        item1: "",
        item2: "",
        item3: "",
        Bio:""
    }
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = event => {
        event.preventDefault();
        const businessObj = {
            name: this.state.name,
            phone: this.state.phone,
            city: this.state.city,
            zipcode: this.state.zipcode,
            item1: this.state.item1,
            item2: this.state.item2,
            item3: this.state.item3,
            bio: this.state.bio,

        }
        console.log(businessObj)
        axios.post('/api/business',businessObj)
        this.setState({
            name: "",
            phone: "",
            city: "",
            zipcode: "",
            item1: "",
            item2: "",
            item3: "",
            Bio: ""
            
        })
    } 
    render() {
        return (
        <div class="container">
        <h3 class="text-center mt-3">Sign Up today for to spread the word</h3>
        <form id="survey-form">
            <div class="row">
            <div class="form-group col">
                <label id="name-label" for="name">Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} id="name" class="form-control" placeholder="Enter your Business Name" required />
            </div>
            <div class="form-group col">
                <label id="phone-label" for="phone">Phone</label>
                <input type="text" name="phone" value={this.state.phone} onChange={this.handleInputChange} id="phone" class="form-control" placeholder="Enter your Business Phone Number" required />
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
                <label id="city-label" for="city">City</label>
                <input type="text" name="city" value={this.state.city} onChange={this.handleInputChange} id="city" class="form-control" placeholder="Enter Your City Location" />
            </div>
            <div class="form-group col">
                <label id="zipcode-label" for="zipcode">Zip Code</label>
                <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleInputChange} id="zipcode" class="form-control" placeholder="Enter your Zip Code" required /> 
            </div>
            </div>
            <div class="row">
            <div class="form-group col">
                <p>Select grocery item1</p>
                <select id="item1" name="item1" value={this.state.item1} onChange={this.handleInputChange} class="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="Bleach">Bleach</option>
                <option value="Lysol">Lysol</option>
                <option value="Detergent">Detergent</option>
                <option value="Toothpaste">Toothpaste</option>
                </select>
            </div>
            <div class="form-group col">
                <p>
                Select grocery item 2
                </p>
                <select id="item2" name="item2" value={this.state.item2} onChange={this.handleInputChange} class="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="Pizza">Pizza</option>
                <option value="Water">Excel</option>
                <option value="Pepsi">Pepsi</option>
                <option value="Spaggetti">Spagettis</option> 
                </select>
            </div>
            <div class="form-group col">
                <p>
                Select grocery item 3
                </p>
                <select id="item3" name="item3" value={this.state.item3} onChange={this.handleInputChange} class="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="Toilet-paper">Toilet-paper</option>
                <option value="Lotion">Lotion</option>
                <option value="Batteries">Batteries</option>
                <option value="Spaggetti">Spagettis</option> 
                </select>
            </div>
            </div>
            <div class="form-group">
            <p>Bio</p>
            <textarea id="item2" class="input-textarea form-control" name="item2" value={this.state.bio} onChange={this.handleInputChange} placeholder="Tell us more about you"></textarea>
            </div>
            <div class="form-group center">
            <a href="/home" type="submit" id="submit" onClick={this.handleSubmit} class="btn btn-outline-dark mr-3">
                Submit
            </a>
            <a href="/" type="submit" class="btn btn-outline-dark">
                Home
            </a>
            </div>
        </form>
        </div>
        )
    }
}
export default Business;