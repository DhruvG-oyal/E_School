import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavbarC from '../../components/Navbars/NavbarC';
import Content from './Content';
import CommentBar from '../../components/CommentsBar/CommentBar';
import { SocketContextProvider } from '../../context/SocketContext';

const Page = () => {
  const [userDetails, setUserDetails] = useState({});
  const [content, setContent] = useState(null);
  const [contenttt, setContentt] = useState([]);
  const [contentLength, setContentLength] = useState(null);
  const [currpage, setCurrPage] = useState(1);
  const [titles, setTitles] = useState([]);
  const [showSidebar, setShowSidebar] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  const toggleSidebar = () => {
    setShowSidebar(prevState => !prevState);
  };

  const handleData = async (token) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/user/session`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setUserDetails(response.data);
    } catch (error) {
      console.error('Data fetch error:', error);
    }
  };

  const fetchContent = async (id) => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/content/${id}`);
      setContent(response.data);

      if (response.data && response.data.content && Array.isArray(response.data.content)) {
        setContentt(response.data.content);
        setContentLength(response.data.content.length);
      } else {
        console.error('Content data is not an array');
      }
    } catch (error) {
      console.error('Error fetching content:', error);
    }
  };

  const onPageChange = (page) => {
    setCurrPage(page);
  };

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (token) {
      handleData(token);
    } else {
      navigate('/login');
    }
  }, [navigate]);

  useEffect(() => {
    if (id) {
      fetchContent(id);
    }
  }, [id]);

  useEffect(() => {
    if (content && content.content && Array.isArray(content.content)) {
      const titles = content.content.map(item => item.maintitle);
      setContentt(content.content);
      setTitles(titles);
    }
  }, [content]);

  return (
    <SocketContextProvider user={userDetails}>
    <div className='bg-[#2f3437]  min-h-screen flex flex-col'>
      <div className='w-full border border-solid  border-[#2c2e73] '>
        <NavbarC
          userDetails={userDetails}
          title={title}
          length={contentLength}
          currentPage={currpage}
          onPageChange={onPageChange}
          maintitle={titles}
          toggleSidebar={toggleSidebar}
        />
        </div>
         
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
      </div>

      
    </div>
    </SocketContextProvider>
  );
};

export default Page;
