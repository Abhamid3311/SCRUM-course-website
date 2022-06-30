import React from 'react';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram, BsWhatsapp, BsFillEnvelopeFill } from 'react-icons/bs';
import { BiPhoneCall } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className='bg-gray-800 text-white'>
            <div class="footer p-10 ">
                <div className='lg:border-r pr-8'>
                    <h2 className='text-3xl font-bold mb-3'>SCRUMVERSE</h2>
                    <p>We ara a lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididun.</p>
                    <div className='flex flex-col  lg:flex-row items-center justify-between mt-5'>
                        <div className='flex flex-row items-center mr-12'>
                            <BiPhoneCall className='text-4xl mr-3'></BiPhoneCall>
                            <div>
                                <p>Have a question?</p>
                                <p className='text-xl'>310-437-2766</p>
                            </div>
                        </div>
                        <div className='flex flex-row items-center mt-3'>
                            <BsFillEnvelopeFill className='text-4xl mr-3'></BsFillEnvelopeFill>
                            <div>
                                <p>Contact us at</p>
                                <p className='text-xl'>unreal@outlook.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='pl-10'>
                    <span class="footer-title">Newsletter</span>
                    <div class="form-control w-full">
                        <label class="label">
                            <span >Be the first one to know  about discounts, offers and events weekly in your mailbox. Unsubscribe whenever you like with one click.</span>
                        </label>
                        <div class="relative">
                            <input type="text" placeholder="enter your email" class="input input-bordered w-full bg-gray-700 pr-16" />
                            <button class="btn bg-indigo-500 absolute top-0 right-0 rounded-l-none">Submit</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="footer p-10  ">
                <div class="grid grid-flow-row lg:grid-flow-col pt-10 gap-4 w-full border-t  py-4 ">
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Blog</a>
                    <a class="link link-hover">Press</a>
                    <a class="link link-hover">FAQ</a>
                    <a class="link link-hover">Career</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Sitemap</a>
                    <a class="link link-hover">Terms of use</a>
                </div>
            </div>
            <div class="footer px-10  flex flex-col-reverse lg:flex-row-reverse  border-base-300 justify-between">
                <div class="items-center grid-flow-col">
                    <p>© 2000-2022 | All right reserved </p>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid  grid-flow-col gap-4 text-xl ">
                        <a><BsFacebook></BsFacebook></a>
                        <a><BsYoutube></BsYoutube></a>
                        <a><BsTwitter></BsTwitter></a>
                        <a><BsInstagram></BsInstagram></a>
                        <a><BsWhatsapp></BsWhatsapp></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;