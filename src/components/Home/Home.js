import React from 'react';
import NavBar from '../NavBar/NavBar';
import OurProducts from '../OurProducts/OurProducts';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <OurProducts page='home'></OurProducts>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;