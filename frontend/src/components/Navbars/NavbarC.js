import React, { useState } from 'react';
import LogoutP from './logoutpannel';
import { useNavigate } from 'react-router-dom';

const btn = "px-3 py-1.5 text-[13px] rounded-lg border border-[#1e3a5f] bg-[#0d1424] text-slate-200 hover:text-white hover:border-blue-500 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer";

const NavbarC = ({ userDetails, title, length, currentPage, onPageChange, maintitle, toggleSidebar }) => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-[#0a0f1e] border-b border-[#1e3a5f] flex items-center justify-between px-6 h-14 sticky top-0 z-50">
      {/* left */}
      <div className="flex items-center gap-4">
        <button
          onClick={() => navigate('/dashboard')}
          className="flex items-center gap-2 text-slate-300 hover:text-white text-[13px] transition cursor-pointer"
          style={{ background: 'transparent' }}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Courses
        </button>
        <div className="w-px h-4 bg-[#1e3a5f]" />
        <span className="text-white font-medium text-[14px] max-w-[260px] truncate">{title}</span>
      </div>

      {/* center — progress */}
      {length && (
        <div className="flex items-center gap-3">
          <span className="text-slate-300 text-[12px]">Page {currentPage} of {length}</span>
          <div className="w-32 h-1.5 bg-[#1e3a5f] rounded-full overflow-hidden">
            <div className="h-full bg-blue-500 rounded-full transition-all"
              style={{ width: `${(currentPage / length) * 100}%` }} />
          </div>
        </div>
      )}

      {/* right */}
      <div className="flex items-center gap-2">
        <button onClick={() => onPageChange(Math.max(currentPage - 1, 1))} disabled={currentPage === 1} className={btn}>
          ← Prev
        </button>
        <button onClick={() => onPageChange(Math.min(currentPage + 1, length))} disabled={currentPage === length} className={btn}>
          Next →
        </button>

        {/* jump to dropdown */}
        <div className="relative">
          <button onClick={() => setShowDropdown((p) => !p)} className={btn}>
            Jump to ▾
          </button>
          {showDropdown && (
            <div className="absolute right-0 top-full mt-1 w-56 bg-[#0d1424] border border-[#1e3a5f] rounded-xl shadow-2xl z-50 overflow-hidden max-h-64 overflow-y-auto">
              {Array.from({ length }, (_, i) => (
                <button
                  key={i}
                  onClick={() => { onPageChange(i + 1); setShowDropdown(false); }}
                  className={`w-full text-left px-4 py-2.5 text-[13px] transition cursor-pointer ${
                    i + 1 === currentPage
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'text-slate-200 hover:bg-[#1e3a5f] hover:text-white'
                  }`}
                >
                  <span className="text-slate-500 mr-2">{i + 1}.</span>
                  {maintitle?.[i] || `Page ${i + 1}`}
                </button>
              ))}
            </div>
          )}
        </div>

        <button onClick={toggleSidebar} className={btn}>
          💬 Comments
        </button>
        <LogoutP userDetails={userDetails} />
      </div>
    </nav>
  );
};

export default NavbarC;
