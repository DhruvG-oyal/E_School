import React, { useState } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { format } from 'date-fns';
import useStore from '../../zustand/useStore';

const Postcomment = ({ userDetails, courseId,onPostComment }) => {
  const [comment, setComment] = useState('');
  const addComment = useStore((state) => state.addComment);

  const handleInputChange = (e) => {
    setComment(e.target.value);
  };

  const handleButtonClick = async (e) => {
    e.preventDefault();
    
    const commentData = {
      username: userDetails.firstName,
      email: userDetails.username,
      comment,
      time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
      courseId,
    };

    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/comment`, commentData);
      console.log('Success:', response.data);
      setComment('');
      addComment(response.data); 
      onPostComment();
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };

  return (
    <div className="post-comment">
      <form className="flex items-center">
        <input
          type="text"
          value={comment}
          onChange={handleInputChange}
          placeholder="Write a comment..."
          className="input text-white h-[26px] placeholder-white border-[1px] border-[#2c2e73] border-solid  bg-[#030712] rounded-md"
        />
        <button
          type="button"
          onClick={handleButtonClick}
          className="flex ml-2 items-center justify-center p-2 bg-blue-500 cursor-pointer text-white rounded-r"
        >
          <FontAwesomeIcon  icon={faPaperPlane} />
        </button>
      </form>
    </div>
  );
};

export default Postcomment;
