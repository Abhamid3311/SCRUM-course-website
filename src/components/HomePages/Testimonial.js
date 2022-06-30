import React, { useEffect, useState } from 'react';
import Review from './Review';

const Testimonial = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(result => setReviews(result))
    }, []);
    return (
        <section className='mt-10 px-10'>
            <div className='flex flex-row'>
                <h2 className='text-3xl font-bold text-indigo-500'>Our Tesimonial</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mt-9'>
                {
                    reviews.map(review => <Review
                        key={review.id}
                        review={review}
                    ></Review>)
                }
            </div>


            <div data-aos='fade-left' className='w-full bg-indigo-500 lg:h-28 rounded-lg my-10 text-white flex flex-col lg:flex-row justify-between items-center px-5'>
                <div>
                    <h3 className='text-2xl font-bold'>Email Us</h3>
                    <p>Connect with us in case of any queries, complaints or feedbacks...</p>
                </div>
                <button className='btn btn-primary text-white'>CONTACT US</button>

            </div>







        </section>
    );
};

export default Testimonial;