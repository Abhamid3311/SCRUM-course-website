import React, { useEffect, useState } from 'react';
import Course from '../HomePages/Course';

const AllCourse = () => {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('course.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    return (
        <div className='mt-10 px-10'>
            <h2 className='text-3xl font-bold  text-center'>Our Courses</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 my-10'>
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

export default AllCourse;