import React, { useState } from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';

const NavbarL = ({ userDetails, toggleSidebar, onSearchTermChange }) => {
  const [searchTermTitle, setSearchTermTitle] = useState("");

  const handleSearchTitle = (e) => {
    setSearchTermTitle(e.target.value);
    onSearchTermChange(searchTermTitle);
  };

  const navigate = useNavigate();

  const handleViewDashboard = () => {
    navigate(`/dashboards/${userDetails.user_id}`);
  };

  return (
    <nav className="bg-black drop-shadow-[0_0_2.4px_#5C2E00] flex items-center justify-between h-16 sticky">
      <div className="text-2xl font-bold ml-4 text-white">E-LEARNING SCHOOL</div>
      <button
        onClick={handleViewDashboard}
        className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer m-3 rounded-md"
      >
        View My Dashboard
      </button>
      <div className="flex items-center space-x-4 mr-6">
        <input
          type="text"
          placeholder="Search by Title"
          value={searchTermTitle}
          onChange={handleSearchTitle}
          className="px-4 py-2 mr-8 rounded-md placeholder-gray-100 bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] text-white focus:outline-none focus:ring-2 focus:ring-gray-300"
        />
        <button onClick={toggleSidebar} className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">
          Chat
        </button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarL;
