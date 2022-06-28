import React from 'react';
import Navbar from '../SharedPage/Navbar';
import Testimonial from './Testimonial';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div className='text-white bg-gradient-to-r from-indigo-500 to-purple-500' >
            <Navbar></Navbar>
            <TopBanner></TopBanner>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;