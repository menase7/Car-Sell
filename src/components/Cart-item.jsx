import React, { useContext } from 'react'
import { ShopContext } from '../Context/Shop-context';

export const CartItem = (props) => {
  const {cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  const {id, carName, price, carImage} = props.data;
  return <div className='cartItem bg-white my-10 h-[530px] w-[400px] rounded-2xl shadow-xl flex flex-col gap-2'>
            <img className='h-[400px] w-[400px] rounded-t-2xl' src={carImage} alt="" />
            <div className='mx-4'>
              <p className='font-bold text-2xl'>{carName}</p>
              <p className='text-lg'>${price}</p>
            </div>
            <div className='CountHandler flex justify-around bg-[#FF7A00] mx-10 py-2 rounded-full text-lg'>
              <button className='text-center font-bold text-[30px] text-white' onClick={() => removeFromCart(id)}> - </button>
              <input className='text-center outline-none' value={cartItems[id]} onChange={(e)=> updateCartItemCount(Number(e.target.value),id)} />
              <button className='text-center font-bold text-[30px] text-white' onClick={() => addToCart(id)}> + </button>
            </div>
         </div>
};

