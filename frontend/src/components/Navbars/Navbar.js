import React from 'react';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <header className="self-stretch  border-solid  border-white p-2 bg-gradient-to-r  from-blue-800  to-blue-800 flex flex-row items-center justify-between py-4 px-8 box-border top-0 z-[99] sticky max-w-full text-base text-white font-domine shadow-lg border-4 border-transparent border-animation">
      <div className="flex items-center cursor-pointer">
        <img
          src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-initials-letter-e-logo-vector-circle-template-image_310499.jpg"
          alt="E-Learning School Logo"
          className="w-10 h-10 rounded-full"
        />
        <div className="ml-5 text-[30px] text-white font-bold">E-Learning School</div>
      </div>

      <button
        onClick={handleLoginClick}
        className="py-2 px-6 bg-sandybrown rounded-lg text-white hover:bg-sienna transition duration-300 ease-in-out"
      >
        Login
      </button>
    </header>
  );
};

export default Navbar;
