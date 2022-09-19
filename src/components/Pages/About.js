import React from 'react';
import img1 from '../../images/Mystery box-bro.png';
import img2 from '../../images/Online learning-amico.png';


const About = () => {
    return (
        <section className='px-10 bg-white'>
            <div>
                <h1 className='text-5xl text-center font-bold py-10'>About Us</h1>
            </div>

            <div className='mt-16'>
                <div class="card lg:card-side bg-indigo-100 shadow-xl">
                    <figure><img src={img1} className="w-4/6" alt="Movie" /></figure>

                    <div class="card-body w-fit">
                        <h2 class="card-title text-3xl pt-10">Experience Instructor</h2>
                        <p>In order to reduce trade risks for global buyers, all premium suppliers on Khulna Tools are verified on-site by SGS, Bureau Veritas or TÜV Rheinland, world's leading inspection companies. Global buyers can access to suppliers' Audit Reports online for free to check their authentic information.</p>
                    </div>
                </div>
            </div>

            <div className='mt-16'>
                <div class="card lg:card-side bg-red-100 shadow-xl">
                    <div class="card-body w-fit">
                        <h2 class="card-title text-3xl pt-10">Learn Easily and Effectivly</h2>
                        <p>We are designed to facilitate registered members to place, accept, conclude, manage and fulfill orders for the provision of products and services online.</p>
                    </div>

                    <figure><img src={img2} className="w-4/6" alt="Movie" /></figure>
                </div>
            </div>
        </section>
    );
};

export default About;