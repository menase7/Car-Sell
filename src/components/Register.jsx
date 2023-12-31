import React, { useEffect, useState } from 'react'
import img from '../assets/Volkswagen Polo 1_0 TSi 2023.jpeg'
import { NavHashLink } from 'react-router-hash-link';
import axios from 'axios';

const Register = () => {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
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

    axios.post('http://localhost:8000/api/contact', formData)
      .then(response => {
        // Handle the success response here
        console.log(response.data);
        setIsMessageSent(true);
        setErrorMessage('');
        setFormData({
          contact_name: '',
          contact_email: '',
          contact_message: '',
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
          src={img}
          alt="Registration"
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-8">Registration Form</h1>
        <form className=' mr-[5%]'>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
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
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#FF7A00] text-white px-4 py-2 rounded-md"
            >
              Register
            </button>
            <NavHashLink smooth activeClassName="active" to="/login">
            <button
              type="button"
              className="bg-[#FF7A00] text-white mx-4 px-4 py-2 rounded-md"
            >
              Already have an account?
            </button>
            </NavHashLink>
          </div>
          <div className="text-center">
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
