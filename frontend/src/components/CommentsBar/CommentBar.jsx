import React, { useState } from 'react';
import Comments from './Comments';
import Postcomment from './Postcomment';

const CommentBar = ({ userdetail, id }) => {
  const [refreshTrigger, setRefreshTrigger] = useState(false);

  return (
    <div className="flex flex-col">
      <Comments courseId={id} trigger={refreshTrigger} />
      <Postcomment
        userDetails={userdetail}
        courseId={id}
        onPostComment={() => setRefreshTrigger((p) => !p)}
      />
    </div>
  );
};

export default CommentBar;
