import React from 'react';
import Navbar from '../SharedPage/Navbar';
import CountDown from './CountDown';

const TopBanner = () => {
    return (
        <div className='text-white bg-gradient-to-r from-indigo-500 to-purple-500'>
            <Navbar></Navbar>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" className="max-w-sm rounded-lg shadow-2xl" alt='' />

                    <div className='text-left mr-5'>
                        <span className="border-2 p-1 bg-white text-purple-500  font-semibold border-solid divide-white rounded-full">
                            #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                        </span>

                        <h2 className="py-6 text-4xl font-bold">Unleash Your SCRUM Skills, <br />
                            Grab More Attention To Résumé
                        </h2>

                        <button className=" text-white btn  btn-outline rounded-full ">Enroll Now</button>

                        <CountDown></CountDown>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TopBanner;