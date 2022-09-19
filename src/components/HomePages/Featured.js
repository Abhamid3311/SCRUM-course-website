import course from '../../images/course.png';
import course2 from '../../images/Course app-pana.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Featured = () => {

    return (
        <div>
            <section>
                <div class="hero min-h-screen mt-10 px-10">
                    <div class="hero-content flex-col lg:flex-row-reverse px-10">
                        <img data-aos='fade-down' src={course} class="w-4/6 h-full" alt='' />
                        <div data-aos='fade-up'>
                            <h1 class="text-4xl font-bold text-indigo-500">Start learning with us right now!</h1>
                            <p class="py-6">Choose from 100+ online video courses with new updates.</p>
                            <button className="btn btn-accent btn-outline rounded-full">ENROLL NOW <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div class="hero min-h-screen bg-blue-100 mb-10">
                    <div class="hero-content flex-col lg:flex-row px-10">
                        <img data-aos='fade-down' src={course2} class="w-4/6 " alt='' />
                        <div data-aos='fade-up'>
                            <h1 class="text-4xl font-bold text-indigo-500">Take the next step toward your personal and professional goals with Coursera.</h1>
                            <p class="py-6">Join now to receive personalized recommendations from the full Coursera catalog.</p>
                            <button className="btn btn-accent btn-outline rounded-full">ENROLL NOW <AiOutlineArrowRight className='ml-1'></AiOutlineArrowRight></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Featured;