import React, { useEffect, useState } from 'react'
import videobg from '../assets/car.mp4'
import { motion } from 'framer-motion'
import { NavHashLink } from 'react-router-hash-link'
import axios from 'axios'

const Main = () => { 

  const [homeData, setHomeData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/homes'); // Replace with your API endpoint
      setHomeData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (homeData.length === 0) {
    return <div>Loading...</div>;
  }

  const data = homeData[0];

  return (
    <div className='h-screen w-full relative mt-[100px]' id='Main'>
      <div className='overlay -z-9 absolute bg-[rgba(0,0,0,.6)] w-full h-screen'></div>
      <video className='absolute max-lg:object-cover max-md:object-cover lg:object-cover -z-10 h-full w-full'
        src={videobg} autoPlay loop muted>
      </video>
      <div className='w-[90%] mx-auto grid lg:grid-cols-2 max-lg:justify-center max-lg:text-center h-full'>
        <motion.div
        initial={{x:150, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{duration:0.5, ease: 'easeOut'}}
        viewport={{once: true}}
         className='left text-white z-0 flex flex-col sm:flex sm:flex-col justify-evenly h-screen'>
          <p className='lg:text-[60px] max-lg:text-[50px] w-[500px] font-semibold'>
          { 
          data.home_title
          } 
          <span className='text-[#FF7A00]'></span></p>
          <div className=''>
            <p className='text-[35px] font-semibold'>{data.home_heading}</p>
            <p className='text-xl w-[500px]'>{data.home_description}</p>
          </div>
          <div className='flex gap-16'>
            <button className='btn text-[20px] w-[250px] h-[50px] rounded-lg bg-[#FF7A00]'>Explore More</button>
             <NavHashLink smooth activeClassName="active" to="/#Cars">
             <button className='btn text-[20px] w-[250px] h-[50px] rounded-lg border-[#FF7A00] border-[2px]'>
               See Cars
               </button>
             </NavHashLink>
           </div>
        </motion.div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Main

