import React, { useState } from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';
import Adminboard from '../../pages/adminboard';

const NavbarP = ({ userDetails, toggleSidebar, onSearchTermChange,toggleotherdashboard }) => {
  const [searchTermTitle, setSearchTermTitle] = useState("");

  const handleSearchTitle = (e) => {
    setSearchTermTitle(e.target.value);
    onSearchTermChange(searchTermTitle);
  };

  const navigate = useNavigate();

  const handleViewDashboard = () => {
    navigate('/dashboard');
  };

  const handleCreatecard = () => {
    navigate(`/createCardboardP/${userDetails.user_id}`);
  };

  return (
    <nav className="bg-black drop-shadow-[0_0_2.4px_#5C2E00] flex items-center justify-between h-16 sticky">
      <div className="text-2xl font-bold ml-4 text-white">E-LEARNING SCHOOL</div>
      <button
        onClick={handleViewDashboard}
        className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] m-3 border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md"
      >
        View Dashboard
      </button>
      <div className="flex items-center space-x-4 mr-6">
        <button onClick={handleCreatecard} className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">
          Create Card
        </button>
        <button onClick={toggleSidebar} className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">
          Chat
        </button>
        <button onClick={toggleotherdashboard} className="bg-[#030712] border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid text-white px-4 py-2 hover cursor-pointer rounded-md">
          Other's dashboard
        </button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarP;
