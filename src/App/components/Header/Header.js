import React from 'react';

import './Header.css';

import Navbar from './Navbar/Navbar.js';

const Header = () => {
    return (
        <div className='header-wrapper'>
            <h1>Personal Portfolio</h1>
            <Navbar />
        </div>
    );
}

export default Header;
