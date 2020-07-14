import React from 'react';
function getBusiness(props) {
    return (
    <div className="card">
        <div className="card-header" style={{backgroundColor: "#F8F9FA"}}>
          <i className="far fa-list-alt"></i> Search Parameters
        </div>
        <div className="card-body">
        <div className="input-group mb-3">
          <input type="text" 
          onChange={props.handleInputChange}
          value={props.value}
          name="term"
          autoComplete = "off" className="form-control" id="searchTerm1" placeholder="Store" />
        <input type="text" 
          onChange={props.handleInputChange}
          value={props.value}
          name="latitude"
          autoComplete = "off" className="form-control" id="searchTerm2" placeholder="Latitude" />
        <input type="text" 
          onChange={props.handleInputChange}
          value={props.value}
          name="longitude"
          autoComplete = "off" className="form-control" id="searchTerm3" placeholder="Longitude" />
        <input type="text" 
          onChange={props.handleInputChange}
          value={props.value}
          name="location"
          autoComplete = "off" className="form-control" id="searchTerm4" placeholder="Location" />
        </div>
        <table style={{width:"100%"}}>
          <tbody>
           <tr>
            <button type="submit" id="run-search" onClick={props.handleFormSubmit} className="btn btn-outline-dark" style={{width:"50%"}}><i className="fas fa-search"></i> Search</button>
            <button type="submit" id="clear-all" className="btn btn-light" style={{width:"50%"}}><i className="far fa-trash-alt"></i> Clear</button>
          </tr>
         </tbody> 
        </table>
      </div>
      </div>
    )
}
export default getBusiness;