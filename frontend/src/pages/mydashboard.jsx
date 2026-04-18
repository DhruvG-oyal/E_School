import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import NavbarP from '../components/Navbars/NavbarP';
import axios from 'axios';
import CustomDashboardCards from '../components/LearningCard/CustomDashboardCards';
import Sidebar from '../components/Side/Sidebar';
import MessageContainer from '../components/Message/MessageContainer';
import { MessageContextProvider } from '../context/messageContext';
import { SocketContextProvider } from '../context/SocketContext';
import Footer from '../components/Footer';
import Sidebars from '../components/Side2/othersdashboradbar';

const MyDashboard = () => {
  const [showotherDash, setShowotherDash] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.pathname.split('/').pop();
  const tkn = localStorage.getItem('jwtToken');

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

  return (
    <SocketContextProvider user={userDetails}>
      <MessageContextProvider>
        <div className="bg-[#080c18] min-h-screen flex flex-col">
          <NavbarP
            userDetails={userDetails}
            toggleSidebar={() => setShowSidebar((p) => !p)}
            onSearchTermChange={setSearchTerm}
            toggleotherdashboard={() => setShowotherDash((p) => !p)}
          />

          <div className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">
            {/* header */}
            <div className="mb-6">
              <h1 className="text-white font-bold text-[28px]">My Learning Cards</h1>
              <p className="text-slate-300 text-[14px] mt-1">
                {userDetails.firstName ? `${userDetails.firstName}'s personal dashboard.` : 'Your personal knowledge base.'}
              </p>
            </div>

            <div className="flex gap-6">
              {/* main */}
              <div className="flex-1 min-w-0">
                <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
                  <CustomDashboardCards
                    searchTerm={searchTerm}
                    buttonTag=""
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                    setTotalPages={setTotalPages}
                    userid={userId}
                    user_id={userDetails.user_id}
                  />
                </div>

                {/* others dashboard */}
                {showotherDash && (
                  <div className="mt-6 bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-[#1e2a45]">
                      <h2 className="text-white font-semibold text-[14px]">Other learners</h2>
                    </div>
                    <Sidebars tkn={tkn} onConversationSelect={handleConversationSelect} />
                  </div>
                )}
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

export default MyDashboard;
