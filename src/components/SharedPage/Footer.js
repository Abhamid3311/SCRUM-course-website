import React from 'react';
import { BsFacebook, BsYoutube, BsTwitter, BsInstagram, BsWhatsapp } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-gray-800 text-white'>
            <footer class="footer p-10  ">
                <div>
                    <span class="footer-title">Services</span>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span class="footer-title">Company</span>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </div>
                <div>
                    <span class="footer-title">Legal</span>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer class="footer px-10 py-4 border-t flex flex-row-reverse  border-base-300 justify-between">
                <div class="items-center grid-flow-col">
                    <p>© 2000-2022 | All right reserved </p>
                </div>
                <div class="md:place-self-center md:justify-self-end">
                    <div class="grid grid-flow-col gap-4 text-xl ">
                        <a><BsFacebook></BsFacebook></a>
                        <a><BsYoutube></BsYoutube></a>
                        <a><BsTwitter></BsTwitter></a>
                        <a><BsInstagram></BsInstagram></a>
                        <a><BsWhatsapp></BsWhatsapp></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;