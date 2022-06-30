import React from 'react';
import Navbar from '../SharedPage/Navbar';
import CountDown from './CountDown';
import { AiOutlineArrowRight } from 'react-icons/ai';
import img1 from '../../images/Ellipse 1.png';

const TopBanner = () => {
    return (
        <section className='text-white bg-gradient-to-r from-indigo-500 to-purple-500'>
            <Navbar></Navbar>
            <div className=" hero min-h-screen ">
                <div className=" hero-content flex-col lg:flex-row-reverse ">
                    <img src={img1} className='hidden lg:block w-1/3 relative left-20 ' alt="" />

                    <div className='text-center lg:text-left mr-5 '>
                        <span className="border-2 p-1 bg-white text-purple-500  font-semibold border-solid divide-white rounded-full">
                            #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                        </span>
                        <h2 className="py-6 text-4xl font-bold">Unleash Your SCRUM Skills, <br />
                            Grab More Attention To Résumé
                        </h2>

                        <button className=" text-white btn  btn-outline rounded-full ">Enroll Now <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>

                        <CountDown></CountDown>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopBanner;