import React, { useEffect } from 'react'
import img from '../assets/Volkswagen Polo 1_0 TSi 2023.jpeg'
import { NavHashLink } from 'react-router-hash-link';

const Register = () => {
  useEffect(() => {
    // Load Google Sign-In API
    const loadGoogleSignInApi = () => {
      const script = document.createElement('script');
      script.src = 'https://accounts.google.com/gsi/client';
      script.async = true;
      document.body.appendChild(script);
    };

    // Initialize Google Sign-In
    const initializeGoogleSignIn = () => {
      window.google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleGoogleSignIn,
      });
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = (response) => {
      const { id_token, given_name, email } = response.credential;
      
      // Use the obtained user information for registration
      // Send the id_token, given_name, and email to your server for further processing
    };

    // Load and initialize Google Sign-In API
    loadGoogleSignInApi();
    window.addEventListener('load', initializeGoogleSignIn);

    return () => {
      window.removeEventListener('load', initializeGoogleSignIn);
    };
  }, []);
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
