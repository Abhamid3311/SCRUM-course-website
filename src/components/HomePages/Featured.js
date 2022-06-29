import React from 'react';
import course from '../../images/course.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Featured = () => {
    return (
        <div className='px-10'>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src={course} class="w-4/6 h-full" alt='' />
                    <div>
                        <h1 class="text-4xl font-bold text-indigo-500">Start learning with us right now!</h1>
                        <p class="py-6">Choose from 100+ online video courses with new updates.</p>
                        <button className="btn btn-accent btn-outline rounded-full">ENROLL NOW <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;