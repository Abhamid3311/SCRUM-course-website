import React from 'react';
import CountDown from './CountDown';

const TopBanner = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" alt='' />

                    <div className='text-left mr-5'>
                        <span class="border-2 p-1 bg-white text-purple-500  font-semibold border-solid divide-white rounded-full">
                            #MOST TRUSTED CERTIFICATIONS BY THE INDUSTRY
                        </span>

                        <h2 class="py-6 text-4xl font-bold">Unleash Your SCRUM Skills, <br />
                            Grab More Attention To Résumé
                        </h2>

                        <button class="btn btn-outline rounded-full text-white">Enroll Now</button>

                        <CountDown></CountDown>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default TopBanner;