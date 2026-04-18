import React from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';

const ghostBtn = "text-[13px] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#1e2a45] transition cursor-pointer";

const NavbarP = ({ userDetails, toggleSidebar, onSearchTermChange, toggleotherdashboard }) => {
  const navigate = useNavigate();

  return (
    <nav className="bg-[#0a0f1e] border-b border-[#1e3a5f] flex items-center justify-between h-14 px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">E</div>
        <span className="text-white font-semibold text-[15px] tracking-wide">My Dashboard</span>
      </div>

      <div className="flex items-center gap-2">
        <button onClick={() => navigate('/dashboard')} className={ghostBtn} style={{ background: 'transparent' }}>
          All Courses
        </button>
        <button
          onClick={() => navigate(`/createCardboardP/${userDetails.user_id}`)}
          className="text-[13px] bg-blue-600 hover:bg-blue-500 text-white px-3 py-1.5 rounded-lg transition cursor-pointer font-medium"
          style={{ background: '#2563eb' }}
        >
          + New Card
        </button>
        <button onClick={toggleSidebar} className={ghostBtn} style={{ background: 'transparent' }}>
          💬 Chat
        </button>
        <button onClick={toggleotherdashboard} className={ghostBtn} style={{ background: 'transparent' }}>
          Others
        </button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarP;
