import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const navigate = useNavigate();
  const apiUrl = process.env.REACT_APP_API_URL;
  console.log(apiUrl);

  const handleSignup = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/user/signup`, {
        username,
        password,
        firstName: firstname,
        lastName: lastname,
      });
      console.log('Signup successful:', response.data);
      navigate('/login');
    } catch (error) {
      console.error('Signup error:', error);
    }
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center"
         style={{ backgroundImage: 'url("https://wallpapercave.com/wp/wp9764009.jpg")' }}>
      <div className="w-full max-w-md border border-[#2c2e73] border-solid bg-[#030712]  p-8 rounded shadow-md">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mt-4">Signup</h2>
          <p className="text-sm text-white mb-4">Create your account in seconds</p>
        </div>
        
        <input
          type="text"
          placeholder="First Name"
          value={firstname}
          onChange={(e) => setFirstname(e.target.value)}
          className="w-full p-2 mb-4 border border-solid border-[#2c2e73] bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-[#2c2e73]"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
                   className="w-full p-2 mb-4 border border-solid border-[#2c2e73] bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-[#2c2e73]"
        />
        <input
          type="text"
          placeholder="Email Address"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
                   className="w-full p-2 mb-4 border border-solid border-[#2c2e73] bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-[#2c2e73]"
        />
        <input
          type="password"
          placeholder="Create Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 mb-4 border border-solid border-[#2c2e73] bg-[#030712] rounded placeholder-gray-100 text-white font-sans focus:outline-none f focus:border-[#2c2e73]"
        />
        
        {/* <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="keepLoggedIn"
            checked={keepLoggedIn}
            onChange={handleCheckboxChange}
            className="mr-2 text-white"
          />
          <label htmlFor="keepLoggedIn" className="text-sm text-white">
            I agree to the terms and privacy policy
          </label>
        </div>
         */}


        <button
          onClick={handleSignup}
          className="w-full ml-2 border border-solid border-[#2c2e73] bg-[#030712] text-white py-2 rounded hover:bg-gray-200 hover cursor-pointer transition"
        >
          Create an Account
        </button>
        
        <p className="mt-4 text-center text-sm text-white">
          Already a member?{' '}
          <a
            onClick={handleLoginClick}
            className="text-gray-100 cursor-pointer hover:underline"
          >
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
