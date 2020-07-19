import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Get Skilled Up with SkillShareSquad</h5>
            <p>
              Please feel free to contact us.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <ul>
              <li className="list-unstyled">
                <a href="#!">Email: skillsharesquad@com</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Tel: 123-456-7890</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Address: 100 Broadway, New York, NY 10010 </a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="/#"> SkillShareSquad </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;