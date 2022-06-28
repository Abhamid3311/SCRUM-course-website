import React from 'react';
import Courses from './Courses';
import Testimonial from './Testimonial';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div >
            <TopBanner></TopBanner>
            <Courses></Courses>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;