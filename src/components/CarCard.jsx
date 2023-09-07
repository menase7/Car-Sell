import React from "react";

const CarCard = (props) => {
  return (
    <div className="card h-80 w-[300px] rounded-2xl bg-white shadow-xl flex flex-col gap-2 my-14 mx-14">
      <div className="">
        <img
          className="h-52 w-full object-cover rounded-t-2xl"
          src={props.img}
          alt=""
        />
      </div>
      <div className="font-bold">
        <p className="ml-6 text-xl">{props.name}</p>
        <p className="ml-6">${props.price}</p>
      </div>
      <div className="bg-[#FF7A00] h-8 w-[260px] mx-auto rounded-full text-center text-white font-semibold text-xl">
        Add To Cart
      </div>
    </div>
  );
};

export default CarCard;
