import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const LogoutP=({userDetails})=>{
    const navigate = useNavigate()

    const [isOpen, setIsOpen] = useState(false);
    
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  console.log(userDetails)
  return(
<>
    <div
    onClick={()=>setIsOpen(!isOpen)}
    className='rounded-full bg-[#ec407a] w-8 h-8 cursor-pointer text-white flex items-center justify-center'
  >
    {userDetails?.firstName?.[0]}{userDetails?.lastName?.[0]}
  </div>
  {
    isOpen? 
    
    <div className='absolute  rounded-lg top-full right-5  bg-[#030712] border border-[#2c2e73] border-solid flex flex-col gap-1 z-50 '>
       <div className='flex flex-row'>
       <div
    className='rounded-full bg-[#ec407a] w-6 h-6 mt-6 ml-2 mr-1 text-white flex items-center justify-center'
  >
    {userDetails?.firstName?.[0]}
  </div>
      <div className='ml-4 mr-4 mt-2' >

      <div className='font-semibold text-[20px] mt-2 mb-1  text-white'>
        {userDetails?.firstName + ' ' + userDetails?.lastName}
      </div>
      <div className='text-[14px] text-gray-100'>
        {userDetails?.username}
      </div>
      </div>
      </div>


      <div className="w-full h-px bg-gray-300"></div>

      <button
    onClick={handleLogout}
    className="px-6 py-2 bg-[#030712] m-2 text-white rounded-lg hover:cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
  >
    Logout
  </button>
  
    </div>: null
  }
</>
  );
}

export default LogoutP;