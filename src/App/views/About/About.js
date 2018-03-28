// About.js

//dependencies
import React from 'react';

//styling
import './About.css';

//components
import Header from '../../components/Header/Header.js';


const About = () => {
    return (
        <div>
            <Header />
            <div className='about-wrapper'>
                About Page
            </div>
        </div>
    );
}

export default About;
