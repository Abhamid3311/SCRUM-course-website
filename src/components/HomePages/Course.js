import React from 'react';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Course = ({ course }) => {
    const { id, name, instructor, ratings, img } = course;
    return (

        <div className="card w-50  card-compact shadow-lg hover:shadow-2xl">
            <figure><img src={img} alt="course" /></figure>
            <div className="card-body">
                <h2 className="card-title text-xl">{name}</h2>
                <p className='text-muted text-lg'>{instructor}</p>
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