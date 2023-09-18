import React, { useRef } from "react";
import latestcar2 from "../assets/Grey Toyota Tacoma with off-road wheels.jpeg";
import latestcar3 from "../assets/Grey Toyota Tacoma with off-road wheels.jpeg";
import LatestCarCard from "./LatestCarCard";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation, A11y } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';



const LatestCar = () => {

  const sliderRef = useRef()
  const handleNext = ()=>{
    sliderRef.current.swiper.slideNext();
  }
  const handlePrev = ()=>{
    sliderRef.current.swiper.slidePrev();
  }

  return (
    <div className="h-full relative w-full flex">
      <div className="w-[90%] h-[80%] m-auto h-full flex flex-col gap-6">
        <div className="bg-white flex flex-col gap-4">
          <p className="text-[45px]  font-bold mt-10">OUR LATEST CARS</p>
          <p className="w-[auto] font-semibold text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            obcaecati cum omnis quam! Maiores, iure necessitatibus! Sequi, quo
            tempora?
          </p>
        </div>
        
        <div className="h-full">
        <Swiper
        loop={true}
        breakpoints={{
          1200: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 1,
          },
          0: {
            slidesPerView: 1,
          },}
        }
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        ref={sliderRef}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Navigation, A11y]}
        className="mySwiper h-[500px]">
            
            <SwiperSlide>
              <LatestCarCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCarCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCarCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCarCard />
            </SwiperSlide>
            <SwiperSlide>
              <LatestCarCard />
            </SwiperSlide>
          </Swiper>
          
        </div>
        <div className="slider-controller">
              <button className="bg-[#FF7A00] m-6 px-6 py-2 text-lg font-semibold text-white rounded-full cursor-pointer" onClick={handlePrev}>Prev</button>
              <button className="bg-[#FF7A00] m-6 px-6 py-2 text-lg font-semibold text-white rounded-full cursor-pointer" onClick={handleNext}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default LatestCar;
