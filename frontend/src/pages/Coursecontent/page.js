import React, { useEffect, useState } from 'react';
import { useNavigate, useParams, useLocation } from 'react-router-dom';
import axios from 'axios';
import NavbarC from '../../components/Navbars/NavbarC';
import Content from './Content';
import CommentBar from '../../components/CommentsBar/CommentBar';
import { SocketContextProvider } from '../../context/SocketContext';

const Page = () => {
  const [userDetails, setUserDetails] = useState({});
  const [contentPages, setContentPages] = useState([]);
  const [contentLength, setContentLength] = useState(0);
  const [currpage, setCurrPage] = useState(1);
  const [titles, setTitles] = useState([]);
  const [showComments, setShowComments] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { title } = location.state || {};

  useEffect(() => {
    const token = localStorage.getItem('jwtToken');
    if (!token) { navigate('/login'); return; }
    axios.get(`${process.env.REACT_APP_API_URL}/user/session`, {
      headers: { Authorization: `Bearer ${token}` },
    }).then((r) => setUserDetails(r.data)).catch(console.error);
  }, [navigate]);

  useEffect(() => {
    if (!id) return;
    axios.get(`${process.env.REACT_APP_API_URL}/content/${id}`)
      .then((r) => {
        const pages = r.data?.content || [];
        setContentPages(pages);
        setContentLength(pages.length);
        setTitles(pages.map((p) => p.maintitle));
      })
      .catch(console.error);
  }, [id]);

  return (
    <SocketContextProvider user={userDetails}>
      <div className="bg-[#080c18] min-h-screen flex flex-col">
        <NavbarC
          userDetails={userDetails}
          title={title}
          length={contentLength}
          currentPage={currpage}
          onPageChange={setCurrPage}
          maintitle={titles}
          toggleSidebar={() => setShowComments((p) => !p)}
        />

        <div className="flex flex-1 max-w-7xl w-full mx-auto px-6 py-8 gap-6">
          {/* main content */}
          <div className="flex-1 min-w-0">
            <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden">
              <div className="p-8">
                {contentPages.length > 0 ? (
                  <Content content={contentPages[currpage - 1]} page={currpage} />
                ) : (
                  <div className="flex flex-col items-center justify-center min-h-[300px] text-slate-500">
                    <div className="w-8 h-8 border-2 border-blue-600 border-t-transparent rounded-full animate-spin mb-4" />
                    <p className="text-[14px]">Loading content…</p>
                  </div>
                )}
              </div>
            </div>

            {/* page navigation bottom */}
            {contentLength > 0 && (
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={() => setCurrPage((p) => Math.max(p - 1, 1))}
                  disabled={currpage === 1}
                  className="px-4 py-2 text-[13px] rounded-lg border border-[#1e2a45] bg-[#0d1424] text-slate-200 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  ← Previous page
                </button>
                <span className="text-slate-300 text-[13px]">{currpage} / {contentLength}</span>
                <button
                  onClick={() => setCurrPage((p) => Math.min(p + 1, contentLength))}
                  disabled={currpage === contentLength}
                  className="px-4 py-2 text-[13px] rounded-lg border border-[#1e2a45] bg-[#0d1424] text-slate-200 hover:text-white hover:border-blue-600 disabled:opacity-30 disabled:cursor-not-allowed transition cursor-pointer"
                >
                  Next page →
                </button>
              </div>
            )}
          </div>

          {/* comments panel */}
          {showComments && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-[#0a0f1e] border border-[#1e2a45] rounded-2xl overflow-hidden sticky top-20">
                <div className="px-4 py-3 border-b border-[#1e2a45]">
                  <h2 className="text-white font-semibold text-[14px]">Comments</h2>
                </div>
                <div className="p-4">
                  <CommentBar userdetail={userDetails} id={id} />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </SocketContextProvider>
  );
};

export default Page;
