import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';

const Course = ({ course }) => {
    const { name, instructor, ratings, img } = course;
    return (
        <div className="card w-50  card-compact shadow-xl">
            <figure><img src={img} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-muted text-lg'>{instructor}</p>
                <div className='flex flex-row justify-start items-center text-lg text-indigo-500'>
                    <span className='mr-3 '>{ratings} </span>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarFill></BsStarFill>
                    <BsStarHalf></BsStarHalf>
                </div>


                <div className="card-actions justify-center">
                    <button className="btn btn-accent btn-outline rounded-full">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;