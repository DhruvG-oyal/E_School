import React from 'react';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  return (
    <footer className="bg-[#080c18] border-t border-[#1e2a45] py-10 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-sm">E</div>
          <span className="text-white font-semibold text-[16px]">E-School</span>
        </div>

        <p className="text-slate-500 text-[13px] text-center">
          A full-stack MERN learning platform. Built with React, Node.js, Express & MongoDB.
        </p>

        <div className="flex items-center gap-4">
        </div>
      </div>
      <div className="border-t border-[#1e2a45] mt-8 pt-6 text-center text-slate-600 text-[12px]">
        © {new Date().getFullYear()} E-School. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
