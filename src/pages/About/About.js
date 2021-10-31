import React from 'react';
import about from '../../images/team.png'

const About = () => {
    return (
        <div className="d-flex justify-content-center my-5">
            <div>
                <h2 className="text-uppercase mb-5">About us</h2>
                <p>We are ready to help you to book attractive picnic spot. You may contact us if you want us to help you</p>
                <img src={about} alt="" />
            </div>
        </div>
    );
};

export default About;