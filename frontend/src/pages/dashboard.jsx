import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarL from "../components/Navbars/NavbarL";
import axios from 'axios';
import Cards from '../components/LearningCard/Cards';
import Sidebar from '../components/Side/Sidebar';
import MessageContainer from '../components/Message/MessageContainer';
import { MessageContextProvider } from '../context/messageContext';
import { SocketContextProvider } from '../context/SocketContext';
import Footer from '../components/Footer';

const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  const fetchSession = async (token) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/session`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data;
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) { navigate('/login'); return; }
    fetchSession(token)
      .then((data) => setUserDetails(data))
      .catch(() => navigate('/login'));
  }, [navigate]);

  const handleConversationSelect = async (user) => {
    if (selectedConversation?._id === user._id) {
      setSelectedConversation(null);
      setShowMessage(false);
    } else {
      setSelectedConversation(user);
      setShowMessage(true);
    }
  };

  const tkn = localStorage.getItem('jwtToken');

  return (
    <SocketContextProvider user={userDetails}>
      <MessageContextProvider>
        <div className="bg-[#080c18] min-h-screen flex flex-col">
          <NavbarL
            userDetails={userDetails}
            toggleSidebar={() => setShowSidebar((p) => !p)}
            onSearchTermChange={setSearchTerm}
          />

          <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
            {/* page header */}
            <div className="mb-6">
              <h1 className="text-white font-bold text-[28px]">Course Library</h1>
              <p className="text-slate-300 text-[14px] mt-1">
                {userDetails.firstName ? `Welcome back, ${userDetails.firstName}.` : ''} Pick up where you left off.
              </p>
            </div>

            <div className="flex gap-6">
              {/* main content */}
              <div className="flex-1 min-w-0">
                <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
                  <Cards
                    searchTerm={searchTerm}
                    buttonTag=""
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    setTotalPages={setTotalPages}
                  />
                </div>
              </div>

              {/* chat panel */}
              {showSidebar && (
                <div className="w-72 flex-shrink-0 flex flex-col gap-4">
                  <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#1e2a45]">
                      <h2 className="text-white font-semibold text-[14px]">Learners online</h2>
                    </div>
                    <div className="max-h-[500px] overflow-y-auto">
                      <Sidebar tkn={tkn} onConversationSelect={handleConversationSelect} />
                    </div>
                  </div>

                  {showMessage && selectedConversation && (
                    <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
                      <MessageContainer user={selectedConversation} curruser={userDetails} tkn={tkn} />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <Footer />
        </div>
      </MessageContextProvider>
    </SocketContextProvider>
  );
};

export default Dashboard;
