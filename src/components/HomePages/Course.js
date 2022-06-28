import React from 'react';

const Course = ({ course }) => {
    const { name, instructor, ratings, img } = course;
    return (
        <div class="card w-50 bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <p>{instructor}</p>
                <p><small>{ratings}</small></p>

                <div class="card-actions justify-center">
                    <button class="btn btn-accent btn-outline rounded-full">Enroll now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;