import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#0a0f1e] border-b border-[#1e2a45] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">E</div>
          <span className="text-white font-semibold text-[17px] tracking-wide">E-School</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          <span className="hover:text-white cursor-pointer transition">Courses</span>
          <span className="hover:text-white cursor-pointer transition">Community</span>
          <span className="hover:text-white cursor-pointer transition">About</span>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/login')}
            className="text-sm text-gray-300 hover:text-white px-4 py-2 transition cursor-pointer"
          >
            Sign in
          </button>
          <button
            onClick={() => navigate('/signup')}
            className="text-sm bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg font-medium transition cursor-pointer"
          >
            Get started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
