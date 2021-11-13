import React from 'react';
import NavBar from '../NavBar/NavBar';
import OurProducts from '../OurProducts/OurProducts';

const Explore = () => {
    return (
        <div>
            <NavBar></NavBar>
            <OurProducts page='explore'></OurProducts>
        </div>
    );
};

export default Explore;