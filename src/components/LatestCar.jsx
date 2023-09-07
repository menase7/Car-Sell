import React from 'react'
import latestcar2 from '../assets/Grey Toyota Tacoma with off-road wheels.jpeg'
import latestcar3 from '../assets/Grey Toyota Tacoma with off-road wheels.jpeg'
import LatestCarCard from './LatestCarCard'

const LatestCar = () => {
  return (
    <div className='h-full relative w-full flex'>
      <div className='w-[90%] h-[80%] m-auto h-screen flex flex-col gap-6'>
        <div className='bg-white flex flex-col gap-4'>
          <p className='text-[45px] font-bold mt-10'>OUR LATEST CARS</p>
          <p className='w-[600px] font-semibold text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum obcaecati cum omnis quam! Maiores, iure necessitatibus! Sequi, quo tempora?</p>
        </div>
        <div className='flex justify-center items-center h-full gap-2 overflow-auto'>
          <LatestCarCard />
          <LatestCarCard />
          <LatestCarCard />
        </div>
      </div>
    </div>
  )
}

export default LatestCar
