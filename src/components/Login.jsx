import React from 'react';
import { useState } from 'react';
import img from '../assets/Volkswagen Polo 1_0 TSi 2023.jpeg'
import axios from 'axios';
import { NavHashLink } from 'react-router-hash-link';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('/api/login', {
        email,
        password
      });
      
      // Handle successful login response
      console.log(response.data);
    } catch (error) {
      // Handle error response
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col md:flex-row mt-28">
      <div className="md:w-1/2 ml-[5%]">
        <img
          src={img}
          alt="Login"
          className="w-full h-full"
        />
      </div>
      <div className="md:w-1/2 p-8">
        <h1 className="text-2xl font-bold mb-8">Login Form</h1>
        <form onSubmit={handleSubmit} className="mr-[5%]">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="bg-[#FF7A00] text-white px-4 py-2 rounded-md"
            >
              Login
            </button>
            <NavHashLink smooth activeClassName="active" to="/register">
            <button
              type="button"
              className="bg-[#FF7A00] text-white mx-4 px-4 py-2 rounded-md"
            >
              Create an account
            </button>
            </NavHashLink>
            <NavHashLink smooth activeClassName="active" to="/forgetpassword">
            <p className='m-5'>forget account</p>
            </NavHashLink>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;