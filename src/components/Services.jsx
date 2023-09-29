import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Services = () => {
  const [serviceData, setServiceData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/service'); // Replace with your API endpoint
      setServiceData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (serviceData.length === 0) {
    return <div>Loading...</div>;
  }

  const data1 = serviceData[0];
  const data2 = serviceData[1];
  const data3 = serviceData[2];
  return (
    <div className='h-full mt-40' id='Services'>
      <div className='w-[90%] mx-auto my-[5%]'>
      <div className='text-5xl font-bold text-center'>OUR SERVICES</div>
      <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3  gap-10 mt-20'>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200 flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>{data1.service_heading}</p>
          <p className='text-xl text-gray-600'>{data1.service_description}</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200 flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>{data2.service_heading}</p>
          <p className='text-xl text-gray-600'>{data2.service_description}</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200  flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>{data3.service_heading}</p>
          <p className='text-xl text-gray-600'>{data3.service_description}</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services
