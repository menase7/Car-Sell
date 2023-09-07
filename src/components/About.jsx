import React from 'react'
import aboutimg from '../assets/2015 Ford F-150 Customs_ SEMA 2014 Photo Gallery.jpeg'

const About = () => {
  return (
    <div className='w-full h-screen flex flex-shrink' id='About'>
      <div className='my-auto h-[80%] flex-col w-full grid lg:grid-cols-2 bg-white'>
        <div className='w-full h-full object-cover'>
          <img className='max-lg:h-[300px] h-full w-full object-cover max-md:h-[200px] mx-auto' src={aboutimg} alt="no img" />
        </div>
        <div className='flex flex-col justify-between ml-[5%] max-md:mr-[5%] mr-[10%]'>
          <p className='text-[#FF7A00] font-bold text-[40px] max-lg:text-center'>ABOUT US</p>
          <p className='text-lg max-md:text-md font-semibold'>Lorem ipsum dolor sit amet 
            consectetur adipisicing elit. 
            Culpa quis ex quisquam corrupti 
            voluptatibus, porro velit praesentium 
            nam natus!</p>
          <div className='text-[22px] flex flex-col gap-2 max-md:text-[20px]'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quia doloremque amet alias voluptatum nisi sequi ut. Facilis doloribus dolor, eum harum quibusdam consequuntur nulla ad ipsa?</p>
            <p className='max-lg:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat aut maiores aliquid exercitationem ut vero dicta, ipsa labore, corporis sed voluptate error facilis incidunt natus voluptas.</p>
          </div >
          <button className='bg-[#FF7A00] mt-5 text-center text-white h-12 w-[200px] text-xl rounded-lg'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
