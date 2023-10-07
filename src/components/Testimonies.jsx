import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/testimonies')
      .then(response => {
        setTestimonies(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div className='h-fit'>
      <div className='w-[90%] h-full mx-auto py-[5%]'>
        <div className='text-5xl font-bold mb-10'>TESTIMONIES</div>
        <div className='flex justify-between gap-5 overflow-auto'>  
          {testimonies.map(testimony => (
            <div className='bg-white h-[400px] w-[370px] flex flex-col justify-between items-center p-5 shadow-xl flex-shrink-0'>
            <div className='h-40 w-40 bg-black rounded-full overflow-hidden'>
              <img className='w-full h-full' src={testimony.image} alt="" />
              </div>
            <p className='text-3xl font-bold'>{testimony.name}</p>
            <p className='text-gray-500'>{testimony.message}</p>
          </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonies
