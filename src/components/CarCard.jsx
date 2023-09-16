import React, { useContext } from "react";
import {ShopContext} from '../Context/Shop-context'

const CarCard = (items) => {
  const {id, carName, price, carImage} = items.data;
  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

  return (
    <div key={id} className="card h-80 w-[300px] rounded-2xl bg-white shadow-xl flex flex-col gap-2 max-md:ml-36 my-14 mx-14">
      <div className="">
        <img
          className="h-52 w-full object-cover rounded-t-2xl"
          src={carImage}
          alt="no img" />
      </div>
      <div className="font-bold">
        <p className="ml-6 text-xl">{carName}</p>
        <p className="ml-6">${price}</p>
      </div>
      <div className="bg-[#FF7A00] h-8 w-[260px] mx-auto rounded-full text-center text-white font-semibold text-xl">
        <button onClick={()=>addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  );
};

export default CarCard;
