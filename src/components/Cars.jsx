import React, { useEffect, useState } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarCard from './CarCard';
import { motion } from 'framer-motion';
import axios from 'axios';


const Cars = () => {

  const [brands, setBrands] = useState([]);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/cars')
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/brands')
      .then(response => {
        setBrands(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);
  
  return (
    <div className='h-full relative w-full bg-gray-100 flex' id='Cars'>
      <motion.div
      initial = {{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 2}} 
      className='m-auto w-[90%] h-[90%]'>
        <div className='text-[#FF7A00] font-bold text-[40px]'>BRANDS</div>
        <div className='text-xl font-bold grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-3 gap-3'>
          {brands.map(brand=>(
          <div
            key={brand.id}
            className='w-40 h-40 flex flex-col bg-white text-center rounded-xl shadow-lg flex flex-col items-center gap-1'>
            <img className='w-30 h-28' src={brand.logo_image} alt={brand.brand_name} />
            <p>{brand.brand_name}</p>
          </div>
          ))}
        </div>
        <div className='mt-10 flex gap-4 overflow-auto'>

         <Swiper 
         className='h-[450px] w-full'
         modules={[Navigation, Pagination, Scrollbar, Autoplay]}
         loop={true}
         navigation
         autoplay={{delay:3000, disableOnInteraction: false}}
         pagination={{ clickable: true }}
         breakpoints={{
          576: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
        }
      }
         >

            {cars.map(car => (
            <SwiperSlide key={car.id} className='flex justify-center'>
            <CarCard data={car} />
            </SwiperSlide>
           )) }
          
        </Swiper>

        </div>
      </motion.div>
    </div>
  )
}

export default Cars
