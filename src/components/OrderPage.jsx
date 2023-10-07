import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    phone: '',
  });

  const [isMessageSent, setIsMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8000/api/order', formData)
      .then(response => {
        // Handle the success response here
        console.log(response.data);
        setIsMessageSent(true);
        setErrorMessage('');
        setFormData({
          name: '',
          email: '',
          address: '',
          phone: '',
        });
      })
      .catch(error => {
        // Handle any error that occurs during the request
        console.error(error);
        setIsMessageSent(false);
        setErrorMessage('Error: Failed to send message.');
      });
  };

  return (
    <div className="flex flex-col md:flex-row mt-28">
      <div className="md:w-1/2 ml-[5%]">
        <img
          src=''
          alt="Order"
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-8">Order Form</h1>
        <form className='mr-[5%]' onSubmit={handleSubmit}>
        {isMessageSent && (
            <p className="text-green-500">Order placed successfully!</p>
          )}
          {errorMessage && (
            <p className="text-red-500">{errorMessage}</p>
          )}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Phone
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.address}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#FF7A00] text-white px-4 py-2 rounded-md"
            >
              Place Order
            </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default OrderPage;