import React from 'react';
import { AiFillPhone, AiOutlineHome, AiOutlineMail } from 'react-icons/ai';

const Contact = () => {
    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <section className='px-10  py-10 bg-indigo-100' id='contact'>
            <div className=' pl-5'>
                <h1 className='text-5xl text-center font-bold my-12'>Contacts</h1>
            </div>

            <div class="hero mt-10" >
                <div class="hero-content flex-col-reverse lg:flex-row-reverse ">

                    <div class="text-center  lg:text-left pl-5 " >
                        <h3 className='text-4xl font-semibold '>Our Address</h3>
                        <p class="py-6 ">Feel free to Send us an email if you think We can help you out with any of Our Tools or Service realated Problems.</p>
                        <div>
                            <div className='text-2xl flex flex-row items-center mb-3'>
                                <AiOutlineHome ></AiOutlineHome>
                                <p className='ml-3'>Dhaka, Bangladesh</p>
                            </div>
                            <div className='text-2xl flex flex-row items-center mb-3'>
                                <AiOutlineMail></AiOutlineMail>
                                <p className='ml-3'>unreal@outlook.com</p>
                            </div>
                            <div className='text-2xl flex flex-row items-center'>
                                <AiFillPhone></AiFillPhone>
                                <p className='ml-3'>310-437-2766</p>
                            </div>
                        </div>
                    </div>

                    <div class="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form class="card-body" onSubmit={handleSubmit}>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Name</span>
                                </label>
                                <input type='text' placeholder='name' class="input input-bordered input-primary w-full text-black" required />
                            </div>

                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type='email' placeholder='email' class="input input-bordered input-primary w-full text-black" required />
                            </div>


                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Message</span>
                                </label>
                                <textarea placeholder='message' class="textarea textarea-primary text-black" required />
                            </div>

                            <div class="form-control mt-6">
                                <button class="btn btn-primary" type="submit" >Submit</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default Contact;