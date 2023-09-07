import React from 'react'
import img1 from '../assets/testimony/download.jpeg'
import img2 from '../assets/testimony/download (2).jpeg'
import img3 from '../assets/testimony/download (1).jpeg'

const Testimonies = () => {
  return (
    <div className='h-fit'>
      <div className='w-[90%] h-full mx-auto py-[5%]'>
        <div className='text-5xl font-bold mb-10'>TESTIMONIES</div>
        <div className='flex justify-between gap-5 overflow-auto'>
          <div className='bg-white h-[400px] w-[370px] flex flex-col justify-between items-center p-5 shadow-xl flex-shrink-0'>
            <div className='h-40 w-40 bg-black rounded-full overflow-hidden'>
              <img className='w-full h-full' src={img1} alt="" />
              </div>
            <p className='text-3xl font-bold'>Melat Assefa</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, pariatur consequuntur! Omnis ad, voluptas dolores beatae voluptatum ipsum. Minus tempora praesentium vitae pariatur nam error aliquam eum, reiciendis fugiat doloremque!</p>
          </div>
          <div className='bg-white h-[400px] w-[370px] flex flex-col justify-between items-center p-5 shadow-xl flex-shrink-0'>
            <div className='h-40 w-40 bg-black rounded-full overflow-hidden'>
              <img className='w-full h-full' src={img2} alt="" />
              </div>
            <p className='text-3xl font-bold'>Anteneh Kebede</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, pariatur consequuntur! Omnis ad, voluptas dolores beatae voluptatum ipsum. Minus tempora praesentium vitae pariatur nam error aliquam eum, reiciendis fugiat doloremque!</p>
          </div>
          <div className='bg-white h-[400px] w-[370px] flex flex-col justify-between items-center p-5 shadow-xl flex-shrink-0'>
            <div className='h-40 w-40 bg-black rounded-full overflow-hidden'>
              <img className='w-full h-full' src={img3} alt="" />
              </div>
            <p className='text-3xl font-bold'>Abebe Chala</p>
            <p className='text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, pariatur consequuntur! Omnis ad, voluptas dolores beatae voluptatum ipsum. Minus tempora praesentium vitae pariatur nam error aliquam eum, reiciendis fugiat doloremque!</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonies
