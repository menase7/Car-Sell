import React, { useEffect, useState } from 'react'
import aboutimg from '../assets/2015 Ford F-150 Customs_ SEMA 2014 Photo Gallery.jpeg'
import axios from 'axios';

const About = () => {
  const [aboutData, setAboutData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/about'); // Replace with your API endpoint
      setAboutData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (aboutData.length === 0) {
    return <div>Loading...</div>;
  }

  const data = aboutData[0];
  return (
    <div className='w-full h-screen flex flex-shrink' id='About'>
      <div className='my-auto h-[80%] flex-col w-full grid lg:grid-cols-2 bg-white'>
        <div className='w-full h-full object-cover'>
          <img className='max-lg:h-[300px] h-full w-full object-cover max-md:h-[200px] mx-auto' src={data.about_image} alt="no img" />
        </div>
        <div className='flex flex-col justify-between ml-[5%] max-md:mr-[5%] mr-[10%]'>
          <p className='text-[#FF7A00] font-bold text-[40px] max-lg:text-center'>ABOUT US</p>
          <p className='text-lg max-md:text-md font-semibold'>{data.about_heading}</p>
          <div className='text-[22px] flex flex-col gap-2 max-md:text-[20px]'>
            <p>{data.about_description}</p>
            <p className='max-lg:hidden'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam placeat aut maiores aliquid exercitationem ut vero dicta, ipsa labore, corporis sed voluptate error facilis incidunt natus voluptas.</p>
          </div >
          <button className='bg-[#FF7A00] mt-5 text-center text-white h-12 w-[200px] text-xl rounded-lg'>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default About
