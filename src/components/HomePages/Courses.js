import React, { useEffect, useState } from 'react';
import Course from './Course';


const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);

    return (
        <div className='mt-20 px-10'>
            <h3 className='font-bold text-3xl mb-1'>A broad range of courses</h3>
            <p className='text-lg font-semibold'>Choose from 100+ online video courses with new additions published every month</p>

            <div className='grid grid-cols-4 gap-4 mt-9'>
                {
                    courses.map(course => <Course
                        key={course.id}
                        course={course}
                    ></Course>)
                }
            </div>

           



        </div>
    );
};

export default Courses;