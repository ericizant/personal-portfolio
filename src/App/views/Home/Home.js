// Home.js

//dependencies
import React from 'react';

//styling
import './Home.css';

//components
import Header from '../../components/Header/Header.js';


const Home = () => {
    return (
        <div>
            <Header />
            <div className='home-wrapper'>
                Home Page
            </div>
        </div>
    );
}

export default Home;
