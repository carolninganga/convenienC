import React from 'react';


function ConfirmationMessagePage() {
   
        return (
            <div>
                <div className="card" style={{width: "600px"}}>
                    <div className="card-body">
                        <h1 className="card-title">Your registration is on the way</h1>
                        <p className="card-text">If there is a valid email, address and phone number connected to this account you will recieve a link in your email to help manage the account.</p>
                        <Link to="/businessConfirmationMessage" className="btn btn-primary"><span>Click Here To Verify Business</span></Link>
                        <a href="/">click link to verify via email</a>
                        <p></p>
                        </div>
                        {/* <a href="#" class="card-link">Card link</a>
                        <a href="#" class="card-link">Another link</a> */}
                    </div>
                    </div>
        )
    }

export default ConfirmationMessagePage;


