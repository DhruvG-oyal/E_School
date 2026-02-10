import React, { useState } from 'react';
import Comments from './Comments';
import Postcomment from './Postcomment';

const CommentBar = ({ userdetail, id }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  const handleRefresh = () => {
    setRefreshTrigger(!refreshTrigger);
  };

  return (
    <div className="comment-bar bg-[#030712] max-h-screen overflow-y flex flex-col">
      <div className="font-sans mb-5 text-center text-white">Comments</div>
      <div className="flex-grow overflow-hidden">
        <Comments courseId={id} trigger={refreshTrigger} />
      </div>
      <Postcomment userDetails={userdetail} courseId={id} onPostCommnet={handleRefresh} />
    </div>
  );
};

export default CommentBar;
