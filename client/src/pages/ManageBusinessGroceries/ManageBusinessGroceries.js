import React from 'react'

export default function ManageBusinessGroceries() {
    return (
        <div>
            <div className="container">
               <h3 className="text-center mt-3">Manage My Account Today</h3>
               <form id="survey-form">
               <div className="row">
            <div className ="form-group col">
              <label id="name-label" for="name">Name</label>
              <input type="text" name="name" id="name" className ="form-control" placeholder="Enter your name" required />
           </div>
            </div>
            <div className ="row">
            <div className ="form-group col">
                <label id="city-label" for="city">City</label>
                <input type="text" name="city" id="city" className ="form-control" placeholder="Enter Your City Location" />
            </div>
        ​
            <div className ="form-group col">
                <label id="zipCode-label" for="email">Zip Code</label>
                <input type="text" name="zipCode" id="zipCode" className ="form-control" placeholder="Enter your Zip Code" required /> 
            </div>
        </div>
​
            <div className Name="row">
            <div className ="form-group col">
                <p>What grocery item would you like to add or update or delete</p>
                <select id="groceryItem" name="role" className ="form-control" required>
                <option disabled selected value>Select an option</option>
                <option value="JavaScript">Toilet Paper</option>
                <option value="Node.js">Bleach</option>
                <option value="Project Management">Lysol</option>
                <option value="SQL">Batteries</option>
                <option value="Python">Water</option>
                <option value="Skateboarding">Bananas</option>
                <option value="Access">Tomates</option>
                <option value="Excel">Pizza</option>
                </select>
            </div>
            </div>
                <div className ="form-group">
            <p>Bio</p>
            <textarea id="bio" className ="input-textarea form-control" name="comment" placeholder="Tell us more about you"></textarea>
            </div>
        ​
            <div className ="form-group center">
            <a href="/members" type="submit" id="submit" className ="btn btn-outline-dark mr-3">
                Submit
            </a>
            <a href="/members" type="submit" className ="btn btn-outline-dark">
                Home
            </a>
            </div>
        </form>
        </div>
            
        </div>
    )
}

