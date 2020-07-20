import React from 'react'
import Team from '../layout/Team/Team';
import ReactContactForm from 'react-mail-form';
import Footer from '../layout/Footer/Footer';

const About = () => {
    return (
        <div>
          <h1 className="text-center mt-3">About SkillShareSquad</h1>
          <p className="my-1">
          SkillShareSquad is an application that allows people around the world to share their known skills with one another.
          </p>

          <h1 className="text-center mt-4">Our Team</h1>
          <h4 className="text-center">Meet Our Awesome Team Members</h4>
          <div className="row">
          <div className="col-md-6">
          <Team />
          </div>
          <div className="col-md-6">
          <Team />
          </div>
  
          </div>

          {/* <h1 className="text-center mt-3">Questions? Comments? Contact Us!</h1>
          <ReactContactForm to = "josephine@funksoup.com" titlePlaceholder = "Subject" contentsPlaceholder = "Message" />
          <Footer /> */}
        </div>
    )
}

export default About;