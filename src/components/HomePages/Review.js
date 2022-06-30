import React from 'react';


const Review = ({ review }) => {
    const { name, designation, comment, img } = review;
    return (

        <div className="card card-compact bg-base-100 shadow-lg hover:shadow-2xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="person" className="rounded-xl w-1/3" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-accent">{name}</h2>
                <p className=' text-accent mb-3 -mt-2'>{designation}</p>
                <p className='text-muted'>{comment}</p>
            </div>
        </div>
    );
};

export default Review;