import React from 'react'
import videobg from '../assets/car.mp4'
import { motion } from 'framer-motion'


const Main = () => { 

  return (
    <div className='h-screen w-full relative mt-[100px]' id='Main'>
      <div className='overlay -z-9 absolute bg-[rgba(0,0,0,.6)] w-full h-screen'></div>
      <video className='absolute max-lg:object-cover max-md:object-cover lg:object-cover -z-10 h-full w-full' src={videobg} autoPlay loop muted></video>
      <div className='w-[90%] mx-auto grid lg:grid-cols-2 max-lg:justify-center max-lg:text-center h-full'>
        <motion.div
        initial={{x:150, opacity: 0}}
        whileInView={{x:0, opacity: 1}}
        transition={{duration:0.5, ease: 'easeOut'}}
         className='left text-white z-0 flex flex-col sm:flex sm:flex-col justify-evenly h-screen'>
          <p className='lg:text-[60px] max-lg:text-[50px] w-[500px] font-semibold'>PERCHASE YOUR <span className='text-[#FF7A00]'>PERFECT</span> CAR</p>
          <div className=''>
            <p className='text-[35px] font-semibold'>Over 1000+ New Cars Available Here</p>
            <p className='text-xl w-[500px]'>Lorem ipsum, dolor sit amet consectetur elit adipisicing. Eveniet sit sunt excepturi fuga.</p>
          </div>
          <div className='flex gap-16'>
            <button className='btn text-[20px] w-[250px] h-[50px] rounded-lg bg-[#FF7A00]'>Explore More</button>
            <button className='btn text-[20px] w-[250px] h-[50px] rounded-lg border-[#FF7A00] border-[2px]'>See Cars</button>
          </div>
        </motion.div>
        <div className='right'></div>
      </div>
    </div>
  )
}

export default Main

