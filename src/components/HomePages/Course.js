import React, { useState } from 'react';
import { BsStarFill, BsStarHalf, BsBookmarkHeart } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

import './Courses.css';

const Course = ({ course }) => {
    const { id, name, instructor, ratings, img } = course;
    const [marked, setMarked] = useState(false);
    
    const handleBookMark = (id) => {
        setMarked(!marked)
    };

    return (
        <div className="card w-80 card-con card-compact shadow-lg hover:shadow-2xl">
            <figure><img src={img} alt="course" /></figure>
            <div className="card-body text-left">
                <div className='flex flex-row justify-between items-top'>
                    <h2 className="card-title text-xl">{name}</h2>
                    <BsBookmarkHeart onClick={() => handleBookMark(id)}
                        className={(marked ? 'text-red-500 text-5xl' : 'text-black text-5xl')}
                    ></BsBookmarkHeart>
                </div>

                <p className='text-muted text-lg text-left'>{instructor}</p>
                <div className='flex flex-row justify-start items-center text-lg text-indigo-500'>
                    <span className='mr-3 font-bold'>{ratings} </span>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                </div>
                <div className="card-actions justify-center">
                    <button className="btn btn-accent btn-outline rounded-full">Enroll now <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
                </div>
            </div>









        </div>

    );
};

export default Course;