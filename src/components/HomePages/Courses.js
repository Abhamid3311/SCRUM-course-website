import React, { useEffect, useState, useRef } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Course from './Course';
import './Courses.css';


import { Navigation, Pagination } from "swiper";



const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <section id='course' className='mt-20 px-10'>
            <h3 className='font-bold text-3xl mb-1'>A broad range of courses</h3>
            <p className='text-lg font-semibold mb-12'>Choose from 100+ online video courses with new additions published every month</p>


            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                Navigation={true}
                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },

                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper">
                {
                    courses.map(course => <SwiperSlide><Course
                        key={course.id}
                        course={course}
                    ></Course></SwiperSlide>).slice(0, 6)
                }
            </Swiper>

        </section>
    );
};

export default Courses;