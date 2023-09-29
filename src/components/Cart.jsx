import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Caritems } from '../Caritems';
import { CartItem } from './Cart-item';
import { ShopContext } from '../Context/Shop-context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, getTotalCartAmount, isLoggedIn } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    if (isLoggedIn) {
      // Send data to the API using axios
      axios.post('/api/checkout', cartItems)
        .then(response => {
          // Handle the response
          console.log(response.data);
          // Redirect to a success page
          navigate('/checkout-success');
        })
        .catch(error => {
          // Handle the error
          console.error(error);
        });
    } else {
      // Redirect to the register page
      navigate('/register');
    }
  };

  return (
    <div className='p-[10%]'>
      <div className='cartItems grid max-lg:grid-cols-1 lg:grid-cols-2'>
        {Caritems.map((item) => {
          if (cartItems[item.id] !== 0) {
            return <CartItem data={item} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className='checkout bg-[#FF7A00] w-[400px] h-[150px] flex flex-col justify-around rounded-2xl mt-10'>
          <p className='text-white text-center text-xl font-semibold'>Subtotal: ${totalAmount}</p>
          <div className='flex justify-around'>
            <button className='bg-black text-white rounded-full px-6 py-2 text-xl cursor-pointer' onClick={() => navigate('/')}>
              Continue Shopping
            </button>
            <button className='bg-black text-white rounded-full px-6 py-2 text-xl cursor-pointer' onClick={handleCheckout}>
              Checkout
            </button>
          </div>
        </div>
      ) : (
        <h1 className='text-center text-3xl font-semibold bg-slate-200 h-[100px] rounded-2xl flex justify-center items-center'>
          Your cart is empty
        </h1>
      )}
    </div>
  );
};

export default Cart;