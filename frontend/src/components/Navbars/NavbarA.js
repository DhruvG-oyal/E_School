import React,{useState,useEffect} from 'react';

import { useNavigate } from 'react-router-dom';

const NavbarA = ({userDetails}) => {
  const navigate = useNavigate();

  const navtoHome = () => {
    navigate('/');
  }; 

    return (
    <nav className="bg-black border-b border-white flex items-center justify-between px-4 py-2 h-16 sticky top-0 z-50"> 
      <div
        onClick={navtoHome}
        className="text-[22px] font-family:Times hover:cursor-pointer font-bold text-white"
      >
        E-LEARNING SCHOOL
      </div>
   
    </nav>
  );
};

export default NavbarA;
