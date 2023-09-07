import React from 'react'
import logo from '../assets/logo.jpg'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='lg:h-[300px] max-lg:h-[500px]  w-full bg-black mt-20'>
      <div className='w-[90%] h-full mx-auto flex flex-col justify-around'>
        <div className='top grid max-lg:grid-cols-1 lg:grid-cols-2'>
          <div className='top-left logo flex items-center'>
            <img className='w-40 mb-7 h-auto' src={logo} alt="" />
          </div>
          <div className='top-right flex justify-between text-gray-300 flex-wrap'>
            <div>
              <p className='text-xl font-semibold text-white'>Office</p>
              <p>Abc BLDG 1st floor</p>
              <p>po. box 123</p>
              <p>+251994391330</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-white'>Get Help</p>
              <p>Order Status</p>
              <p>Returns</p>
              <p>Payment Option</p>
            </div>
            <div>
              <p className='text-xl font-semibold text-white'>Company</p>
              <p>About Us</p>
              <p>Contact us</p>
              <p>Privacy Policy</p>
            </div>
            <div className='flex flex-col gap-4 ml-14'>
              <button className='w-32 h-10 rounded-md bg-[#FF7A00] text-white'>Register</button>
              <button className='w-32 h-10 rounded-md bg-white border-2 border-[#FF7A00] text-[#FF7A00]'>Log in</button>
            </div>
          </div>
        </div>
        <div className='line h-[2px] w-full bg-[#FF7A00]'></div>
        <div className='bottom grid max-lg:grid-cols-1 lg:grid-cols-2'>
          <div className='bottom-left text-gray-300'>
            <p className='text-xl w-[350px]'>c All rights reserved, 2019. We love our users!</p>
          </div>
          <div className='bottom-right text-gray-300 flex md:justify-end max-lg:mt-10'>
            <div className='flex gap-5'>
              <p className='text-xl mr-3'>Follow Us: </p>
              <div className='bg-[#FF7A00] h-10 w-10 rounded-full flex justify-center items-center text-2xl'>
                <FaFacebook />
              </div>
              <div className='bg-[#FF7A00] h-10 w-10 rounded-full flex justify-center items-center text-2xl'>
                <FaTwitter />
              </div>
              <div className='bg-[#FF7A00] h-10 w-10 rounded-full flex justify-center items-center text-2xl'>
                <FaLinkedin />
              </div>
              <div className='bg-[#FF7A00] h-10 w-10 rounded-full flex justify-center items-center text-2xl'>
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
