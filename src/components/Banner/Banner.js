import React from 'react';
import { Button } from 'react-bootstrap';
import './Banner.css'
import img from '../../images/banner-4.png'

const Banner = () => {
    return (
        <div>
            <div className='mb-5 position-relative text-center'>
                <div>
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div className='info text-light'>
                    <p>BEST WIRELESS HEADPHONES FOR YOUR DAILY LIFE</p>
                    <h1>Shuffle Headphones</h1>
                    <Button id='btn-get-started' variant='light' className='m-0 mt-lg-3 w-50 text-uppercase'>Explore Now</Button>
                </div>
            </div>
        </div>
    );
};

export default Banner;