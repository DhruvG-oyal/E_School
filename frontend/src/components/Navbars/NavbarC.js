import React, { useState } from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';

const NavbarC = ({ userDetails, title, length, currentPage, onPageChange, maintitle, toggleSidebar }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedPage, setSelectedPage] = useState(currentPage);

  

  const handleNext = () => {
    if (currentPage < length) {
      onPageChange(currentPage + 1);
    }
  };

  const navtoDashboard = () => {
    navigate('/dashboard');
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleJumpTo = (page) => {
    onPageChange(page);
    setSelectedPage(page);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const renderDropdown = () => {
    if (!showDropdown) return null;

    const pages = Array.from({ length }, (_, index) => index + 1);

    return (
      <div className="absolute bg-[#030712] shadow-md  w-48 border border-solid border-[#2c2e73]  max-h-[500px] overflow-auto z-10 top-[36px]">
        {pages.map((page) => (
          <div
            key={page}
            onClick={() => handleJumpTo(page)}
            className={`cursor-pointer rounded-lg px-3 py-2 text-white font-open-sans text-[14px] hover:bg-[#9898d3]  ${
              page === selectedPage ? ' bg-[#030712] font-sherif cursor-default text-[#7b7d83]  hover:bg-[#030712]' : ''
            }`}
          >
            {page} - {maintitle[page - 1]}
          </div>
        ))}
      </div>
    );
  };

  return (
    <nav className="bg-black border border-white flex items-center justify-between px-4 py-2 h-16 top-0 relative">
      <div
        onClick={navtoDashboard}
        className="text-[22px] font-family:Times hover:cursor-pointer font-bold text-white"
      >
        E-LEARNING SCHOOL
      </div>

      <div className="text-white font-sans text-[16px] font-semibold">
        {title}  ({currentPage}/{length})
      </div>

      <div className="flex items-center space-x-4 relative">
        <div className="flex gap-2 mr-12">
          <button
            className={`hover:bg-gray-700 px-4 py-2 rounded-md bg-[#030712] border border-[#2c2e73] border-solid text-white focus:outline-none focus:ring-2 focus:ring-gray-300 ${
              currentPage === 1 ? 'cursor-not-allowed opacity-50' : 'hover:cursor-pointer'
            }`}
            onClick={handlePrev}
          >
            Prev
          </button>
          <button
            className={`hover:bg-gray-700 px-4 py-2 rounded-md bg-[#030712] border border-[#2c2e73] border-solid text-white focus:outline-none focus:ring-2 focus:ring-gray-300 ${
              currentPage === length ? 'cursor-not-allowed opacity-50' : 'hover:cursor-pointer'
            }`}
            onClick={handleNext}
          >
            Next
          </button>
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="hover:bg-gray-700  rounded-md bg-[#030712] border py-2 border-[#2c2e73] border-solid text-white focus:outline-none focus:ring-2 focus:ring-gray-300 hover:cursor-pointer flex flex-row"
            >
              <div> Jump To </div>

              <img
                src='https://static.vecteezy.com/system/resources/previews/015/152/841/large_2x/slant-arrow-geometric-line-for-modern-and-futuristic-design-element-png.png'
                className=" h-4 ml-2 "
                alt="Arrow Icon"
              />
            </button>

            {renderDropdown()}
          </div>
        </div>

        <button onClick={toggleSidebar} className="bg-[#030712] border border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">Comments</button>

        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarC;
