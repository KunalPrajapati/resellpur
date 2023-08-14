import React from 'react';
import logo from "../assets/logo-rsp.png";
import { FaInstagram, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='bg-[#a8a3d2] py-6 md:py-4 lg:py-8 flex flex-col md:flex-row justify-evenly items-center md:items-start'>
      <img src={logo} alt="img" className='h-20 w-40 md:h-28 md:w-56' />
      <ul className='flex flex-col items-center md:items-start mt-4 md:mt-0'>
        <li className='text-sm md:text-base mb-2 cursor-pointer'>Careers</li>
        <li className='text-sm md:text-base mb-2 cursor-pointer'>About Us</li>
        <li className='text-sm md:text-base mb-2 cursor-pointer'>Become a Partner</li>
        <div>
            <ul className='flex gap-5'>
                <li><FaInstagram className='text-xl md:text-2xl mb-2 cursor-pointer' /></li>
                <li><FaFacebookSquare className='text-xl md:text-2xl cursor-pointer' /></li>
            </ul>
        </div>
      </ul>
    </div>
  )
}

export default Footer;
