import React from 'react';

const Featured = () => {
    return (
        <div>
            <div class="hero min-h-screen ">
                <div class="hero-content flex-col lg:flex-row">
                    <img src="https://api.lorem.space/image/movie?w=260&h=400" class="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 class="text-5xl font-bold">Start learning with us right now!</h1>
                        <p class="py-6">Choose from 100+ online video courses with new updates.</p>
                        <button className="btn btn-accent btn-outline rounded-full">ENROLL NOW</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;