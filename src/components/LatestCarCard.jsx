import React from "react";
import latestcar1 from "../assets/Grey Toyota Tacoma with off-road wheels.jpeg";

const LatestCarCard = (car) => {
  const {name ,description, images} = car.data;
  return (
    <div className="h-fit w-fit max-sm:ml-16 max-lg:ml-40">
      <div className="card w-fit relative">
        <div className="absolute py-12 bg-black w-[auto] opacity-40">
        </div>
        <p className="text-3xl absolute font-semibold text-white mx-3 opacity-100" >Luxgrious Auto Mobile</p>
        <p className="text-gray-200 absolute top-10  mx-3 w-[370px]">
         {description}
        </p>
        <img className="object-cover h-[450px] w-[400px]" src={images} alt="" />
        <p className="absolute bottom-5 left-32 text-2xl font-bold text-[#FF7A00]">{name}</p>
      </div>
    </div>
  );
};

export default LatestCarCard;
