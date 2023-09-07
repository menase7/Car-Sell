import React from "react";
import latestcar1 from "../assets/Grey Toyota Tacoma with off-road wheels.jpeg";

const LatestCarCard = () => {
  return (
    <div className="w-full h-full">
      <div className="card bg-red-500 w-fit">
        <div className="absolute py-12 bg-black lg:w-[400px] opacity-40">
        </div>
        <p className="text-3xl absolute font-semibold text-white mx-3 opacity-100" >Luxgrious Auto Mobile</p>
        <p className="text-gray-200 absolute top-60  mx-3 lg:w-[370px]">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, qui
          laudantium.
        </p>
        <img className="object-cover h-[450px] lg:w-[400px]" src={latestcar1} alt="" />
        <p className="absolute bottom-1 left-32 text-2xl font-bold text-[#FF7A00] bg-slate-400">HOT SEELS</p>
      </div>
    </div>
  );
};

export default LatestCarCard;
