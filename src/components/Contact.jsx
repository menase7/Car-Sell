import React from 'react'
import { FaPhone, FaEnvelope, FaMapMarker } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='h-full w-full'>
      <div className='w-[90%] mx-auto h-full flex flex-col gap-20'>
        <div>
          <p className='text-5xl font-bold text-center mt-10'>CONTACT US</p>
        </div>
        <div className='grid lg:grid-cols-2 gap-10'>
          <div className='left map flex'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.5274715208275!2d38.78711680000001!3d9.015552499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b8521d873d4b7%3A0x4da6e1c76b44dabd!2zQXlhdCBSZWFsIEVzdGF0ZSB8IOGKoOGLq-GJtSDhiKrhiI0g4Yql4Yi14Ym04Ym1!5e0!3m2!1sen!2set!4v1694037264460!5m2!1sen!2set"
           className='flex-shrink-0'
           width="100%" 
           height="660" 
           style={{border:0}} 
           allowfullscreen="" 
           loading="lazy" 
           referrerpolicy="no-referrer-when-downgrade">
          </iframe>     
          </div>
          <div className='right bg-gray-100 flex flex-col'>
            <div className='right-top flex flex-col p-5'>
              <form action="" className='flex flex-col font-semibold text-xl gap-2'>
                <label htmlFor="name">Name</label>
                <input placeholder='Menase Debel' className='font-normal outline-none' type="text" name='Name'/>
                <label htmlFor="email">Email</label>
                <input placeholder='menasedebel7@gmail.com' className='font-normal outline-none' type="email" name='email'/>
                <label htmlFor="message">Message</label>
                <textarea className='outline-none' name="message" id="" cols="30" rows="4"></textarea>
                <div className='btn cursor-pointer text-white h-10 w-60 mt-2 bg-[#FF7A00] text-center py-1 rounded-lg'>
                  <input type="submit" value='Send Message' />
                </div>
              </form>
            </div>
            <div className='right-buttom flex justify-around p-5 text-center'>
              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Phone</p>
                 <FaPhone className='text-[#FF7A00]' />
                </div>
                <p>+25194162 0480</p>
              </div>

              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Email</p>
                 <FaEnvelope className='text-[#FF7A00]' />
                </div>
                <p>Caropia7@ gmail.com</p>
              </div>

              <div className='bg-white rounded-2xl h-[200px] w-40 flex flex-col text-2xl flex-wrap justify-center items-center'>
                <div className='flex gap-3 justify-center'>
                 <p className='font-bold'>Address</p>
                 <FaMapMarker className='text-[#FF7A00]' />
                </div>
                <p>Addis Ababa, Ethiopia</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
