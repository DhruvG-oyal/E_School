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
import Sidebars from "../components/Side2/othersdashboradbar"

const MyDashboard = () => {
  const[showotherDash,setShowotherDash]=useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [userDetails, setUserDetails] = useState({});
  const [searchTerm, setSearchTerm] = useState("");
  const [searchTag, setSearchTag] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loadingUserDetails, setLoadingUserDetails] = useState(false);
  const [loadingConversation, setLoadingConversation] = useState(false);
 

  const navigate = useNavigate();
  const location = useLocation();
  const toggleSidebar = () => {
    
    setShowSidebar(prevState => !prevState);
    if(showSidebar==false){
      window.scrollTo({
        top: document.body.scrollHeight+200,
        behavior: 'smooth'
      });
    }
  }
  const toggleotherdashboard = () =>{
    if(showotherDash==false){
      window.scrollTo({
        top: document.body.scrollHeight*2,
        behavior: 'smooth'
      });
    }
    setShowotherDash(prevState => !prevState);
  } 
  console.log(showotherDash);
  const handleData = async (token) => {
    setLoadingUserDetails(true);
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/session`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Data fetch error:', error);
      throw error; 
    } finally {
      setLoadingUserDetails(false);
    }
  };

  const extractUserIdFromUrl = () => {
    const pathname = location.pathname;
    const userId = pathname.split('/').pop();
    return userId;
  };
  const userId=extractUserIdFromUrl();

  const handleSearchTermChange = (newSearchTerm) => setSearchTerm(newSearchTerm);

  const handleConversationSelect = async (user) => {
    if (selectedConversation && selectedConversation._id === user._id) {
      setSelectedConversation(null);
      setShowMessage(false);
    } else {
      setLoadingConversation(true);
      setSelectedConversation(user);
      setShowMessage(true);
      try {
        const token = localStorage.getItem('jwtToken');
        const userData = await handleData(token);
        setUserDetails(userData);
      } catch (error) {
        console.error('Error fetching user details:', error);
      } finally {
        setLoadingConversation(false);
      }
    }
  };



  const tkn = localStorage.getItem('jwtToken');

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token)
        .then(userData => setUserDetails(userData))
        .catch(error => console.error('Error fetching user details:', error));
    } else {
      navigate('/login');
    }
  }, [navigate]);

  
  const handlePageChange = (newPage) => setCurrentPage(newPage);

  return (
    <SocketContextProvider user={userDetails}>
      <MessageContextProvider>
        <div className='bg-[#030712] min-h-screen flex flex-col'>
          <div className='container mx-auto'>


            <div className='border-l border-r border-b ml-2 mr-4 border-solid border-[#2c2e73] items-center justify-center'>
              <NavbarP userDetails={userDetails} toggleSidebar={toggleSidebar} onSearchTermChange={handleSearchTermChange} toggleotherdashboard={toggleotherdashboard} />
            </div>


            <div className='flex flex-grow flex-col lg:flex-row'>

              <div className='flex-grow'>


                <div className='mt-12 text-[36px] font-bold text-white text-center'>
                  Learning Paths
                </div>


{/*              
<div className='flex flex-grow'>
  <div className='flex-grow overflow-auto'>
        <div className='mr-20 ml-20 mt-10'>
          {contenttt.length > 0 && <Content content={contenttt[currpage - 1]} page={currpage} />}
        </div>
      </div>

      {showSidebar && (
          <div className='w-72 text-white p-2 border-l rounded-[18px] border-[#2c2e73] border-solid bg-[#030712] relative ' style={{ maxHeight: '100vh' }}>
            <CommentBar userdetail={userDetails} id={id} />
          </div>
      )}
      </div> */}
                

                <CustomDashboardCards
                  searchTerm={searchTerm}
                  buttonTag={searchTag}
                  currentPage={currentPage}
                  onPageChange={handlePageChange}
                  setTotalPages={setTotalPages}
                  userid={userId} 
                  user_id={userDetails.user_id}
                />

             <div className='flex mr-10'>
                {showotherDash && (
                  <div className='w-full mr-1 mt-20 mb-10 drop-shadow-[0_0_2.4px_#5C2E00] text-white p-4 max-h-[700px]'>
                    <Sidebars  tkn={tkn} onConversationSelect={handleConversationSelect} />
                  </div>
                )}
              
              </div>
              </div>              
              <div className='flex mr-10'>
                {showSidebar && (
                  <div className='w-6/12 mr-1 mt-20 mb-10 drop-shadow-[0_0_2.4px_#5C2E00] text-white p-4 max-h-[700px]'>
                    <Sidebar tkn={tkn} onConversationSelect={handleConversationSelect} />
                  </div>
                )}
                {showMessage && selectedConversation && (
                  <div className="flex-grow w-5/12 mt-20 ml-1 mb-10 drop-shadow-[0_0_2.4px_#5C2E00] text-white p-4 border border-solid border-[#2c2e73] bg-[#030712]">
                    <MessageContainer user={selectedConversation} curruser={userDetails} tkn={tkn} />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className='mr-10 ml-2 mt-auto'>
            <Footer />
          </div>
        </div>
      </MessageContextProvider>
    </SocketContextProvider>
  );
};

export default MyDashboard;
