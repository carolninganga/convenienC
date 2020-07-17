import React from 'react';
import Businesses from '../businesses/Businesses';
import BusinessFilter from '../businesses/BusinessFilter';

const About = () => {
    return (
        <div>
            <h1>About This App</h1>
            <p className="my-1">
                    This is a Full Stack Application that allows local businesses to post and delete current available items            </p>
            <p className='bg-dark p'>
                <strong>Version: </strong> 1.0.0
            </p>
            <div>
                <BusinessFilter />
               <Businesses />
           </div>
        </div>
    )
}

export default About;