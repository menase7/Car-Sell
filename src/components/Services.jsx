import React from 'react'

const Services = () => {
  return (
    <div className='h-full mt-40' id='Services'>
      <div className='w-[90%] mx-auto my-[5%]'>
      <div className='text-5xl font-bold text-center'>OUR SERVICES</div>
      <div className='grid max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3  gap-10 mt-20'>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200 flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>Car Selling</p>
          <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cupiditate dignissimos, voluptates animi aliquid quidem eius alias. Omnis, perferendis laborum?</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200 flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>Parts Repair</p>
          <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cupiditate dignissimos, voluptates animi aliquid quidem eius alias. Omnis, perferendis laborum?</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
        <div className='h-[300px] p-6 w-full shadow-lg rounded-3xl bg-gray-200  flex flex-col justify-between items-center'>
          <p className='text-2xl font-bold text-center'>24/7 Support</p>
          <p className='text-xl text-gray-600'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda cupiditate dignissimos, voluptates animi aliquid quidem eius alias. Omnis, perferendis laborum?</p>
          <button className='bg-[#FF7A00] w-52 h-10 rounded-full text-xl text-white justify-self-center'>Read More</button>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services
