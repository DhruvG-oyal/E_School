import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LogoutP = ({ userDetails }) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => { if (ref.current && !ref.current.contains(e.target)) setIsOpen(false); };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    navigate('/login');
  };

  const initials = `${userDetails?.firstName?.[0] || ''}${userDetails?.lastName?.[0] || ''}`;

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setIsOpen((p) => !p)}
        className="w-8 h-8 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[12px] font-bold flex items-center justify-center transition cursor-pointer flex-shrink-0"
      >
        {initials || '?'}
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 bg-[#0f172a] border border-[#1e2a45] rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="px-4 py-4 border-b border-[#1e2a45]">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-600 text-white text-[13px] font-bold flex items-center justify-center flex-shrink-0">
                {initials || '?'}
              </div>
              <div className="min-w-0">
                <div className="text-white font-semibold text-[14px] truncate">
                  {userDetails?.firstName} {userDetails?.lastName}
                </div>
                <div className="text-gray-500 text-[12px] truncate">{userDetails?.username}</div>
              </div>
            </div>
          </div>
          <div className="p-2">
            <button
              onClick={handleLogout}
              className="w-full text-left px-3 py-2 text-[13px] text-red-400 hover:bg-red-900/20 rounded-lg transition cursor-pointer"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LogoutP;
