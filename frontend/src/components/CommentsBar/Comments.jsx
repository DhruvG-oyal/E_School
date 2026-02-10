import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';
import useStore from '../../zustand/useStore';

const Comments = ({ courseId, trigger }) => {
  const { comments, setComments } = useStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const extractTime = (dateString) => {
    if (!dateString) return 'N/A';
    const timePart = dateString.split('T')[1]?.split('+')[0];
    return timePart ? timePart.split('.')[0] : 'N/A';
  };

  const calculateDaysAgo = (dateString) => {
    if (!dateString) return 'N/A';
    const currentDate = new Date();
    const commentDate = new Date(dateString);
    if (isNaN(commentDate)) return 'N/A';
    const differenceInTime = currentDate - commentDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));
    return differenceInDays === 0 ? 'Today' : `${differenceInDays} days ago`;
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comment/${courseId}`);
        if (response.data) {
          const sortedComments = response.data.sort((a, b) => new Date(b.time) - new Date(a.time));
          setComments(sortedComments);
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchComments();
  }, [courseId, trigger, setComments]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen">
      <div className="max-h-[600px] overflow-y-auto border p-1">
        {comments.map((comment, index) => (
          <Comment
            key={index}
            username={comment.username}
            comment={comment.comment}
            time={extractTime(comment.time)}
            email={comment.email}
            daysAgo={calculateDaysAgo(comment.time)}
          />
        ))}
      </div>
    </div>
  );
};

export default Comments;
