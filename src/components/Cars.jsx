import React, { useEffect, useState } from 'react';
import card1 from '../assets/2021 Ford F-150 Gray Off-Road Build.jpeg'
import card2 from '../assets/Addition Of Hyundai Tucson To The Fleet Of Hyundai In Pakistan In 2020 - Fairwheels_com.jpeg'
import card3 from '../assets/Ford Raptor.jpeg'
import card4 from '../assets/BMW M850i Rendered in Widebody Guise, Looks Enticing.jpeg'
import card5 from '../assets/BMW Hypercar.jpeg'
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CarCard from './CarCard';
import { motion } from 'framer-motion';
import { Caritems } from '../Caritems';
import axios from 'axios';


const Cars = () => {

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/brands');
        setBrands(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  
  return (
    <div className='h-full relative w-full bg-gray-100 flex' id='Cars'>
      <div className='m-auto w-[90%] h-[90%]'>
        <div className='text-[#FF7A00] font-bold text-[40px]'>BRANDS</div>
        <div className='text-xl font-bold grid xl:grid-cols-7 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 max-sm:grid-cols-3 gap-3'>
          {brands.map(brand=>(
          <div
            key={brand.id}
            className='w-40 h-40 flex flex-col bg-white text-center rounded-xl shadow-lg flex flex-col items-center gap-1'>
            <img className='w-30 h-28' src={brand.logo_image} alt="logo" />
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
         autoplay={{delay:2000, disableOnInteraction: false}}
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

           { Caritems.map((items) => (
            <SwiperSlide className='flex justify-center'>
            <CarCard data={items} />
            </SwiperSlide>
           )) }
          
        </Swiper>

        </div>
      </div>
    </div>
  )
}

export default Cars
