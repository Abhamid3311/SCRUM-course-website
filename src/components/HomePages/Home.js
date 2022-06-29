import React from 'react';
import Courses from './Courses';
import Featured from './Featured';
import Testimonial from './Testimonial';
import TopBanner from './TopBanner';

const Home = () => {
    return (
        <div >
            <TopBanner></TopBanner>
            <Courses></Courses>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;