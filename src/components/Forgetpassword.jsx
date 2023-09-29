import React, { useState } from 'react';
import axios from 'axios';

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/forgot-password', {
        email
      });

      // Handle successful password reset request
      console.log(response.data);
      setIsSubmitted(true);
    } catch (error) {
      // Handle error response
      console.error(error);
    }
  };

  return (
    <div className='mt-32'>
      {isSubmitted ? (
        <div>
          <h1>Password Reset Requested</h1>
          <p>
            We have sent a verification code to your email. Please check your inbox and follow the instructions to reset your password.
          </p>
        </div>
      ) : (
        <div>
          <h1>Forgot Password</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button type="submit">Reset Password</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ForgotPasswordPage;