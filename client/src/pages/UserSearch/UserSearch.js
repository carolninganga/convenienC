import React from 'react'

export default function UserSearch() {
    return (
        <React.Fragment>
        <div>
            <form className="form-inline my-2 my-lg-0">
                 <input id="myInput" className="form-control mr-sm-2" type="search" placeholder="Search Skills..." aria-label="Search" />
                 <button id="searchBtn" className="btn btn-outline-warning my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
        <div className="container">
            <div className="row mt-4">
                <div id="member_cards">
                <h2>Welcome <span className="member-name"></span></h2> 
            </div>
        </div>
        </div>
        </React.Fragment>

    )
}
