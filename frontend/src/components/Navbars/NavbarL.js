import React, { useState } from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';

const NavbarL = ({ userDetails, toggleSidebar, onSearchTermChange }) => {
  const [searchTermTitle, setSearchTermTitle] = useState('');
  const navigate = useNavigate();

  const handleSearchTitle = (e) => {
    setSearchTermTitle(e.target.value);
    onSearchTermChange(e.target.value);
  };

  return (
    <nav className="bg-[#0a0f1e] border-b border-[#1e2a45] flex items-center justify-between h-14 px-6 sticky top-0 z-50">
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-blue-600 flex items-center justify-center text-white font-bold text-xs">E</div>
        <span className="text-white font-semibold text-[15px] tracking-wide">E-School</span>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search courses…"
            value={searchTermTitle}
            onChange={handleSearchTitle}
            className="pl-8 pr-4 py-1.5 text-[13px] rounded-lg bg-[#0f172a] border border-[#1e2a45] text-slate-200 placeholder-slate-500 focus:outline-none focus:border-blue-600 w-48 transition"
          />
          <svg className="absolute left-2.5 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
          </svg>
        </div>
        <button
          onClick={() => navigate(`/dashboards/${userDetails.user_id}`)}
          className="text-[13px] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#1e2a45] transition cursor-pointer"
          style={{ background: 'transparent' }}
        >
          My Dashboard
        </button>
        <button
          onClick={toggleSidebar}
          className="text-[13px] text-slate-300 hover:text-white px-3 py-1.5 rounded-lg hover:bg-[#1e2a45] transition cursor-pointer flex items-center gap-1.5"
          style={{ background: 'transparent' }}
        >
          <span className="text-base">💬</span> Chat
        </button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarL;
