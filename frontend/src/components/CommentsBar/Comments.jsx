import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Comment from './Comment';
import useStore from '../../zustand/useStore';

const Comments = ({ courseId, trigger }) => {
  const { comments, setComments } = useStore();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const extractTime = (dateString) => {
    if (!dateString) return '';
    const timePart = dateString.split('T')[1]?.split('+')[0];
    return timePart ? timePart.split('.')[0] : '';
  };

  const calculateDaysAgo = (dateString) => {
    if (!dateString) return '';
    const diff = Math.floor((new Date() - new Date(dateString)) / 86400000);
    return diff === 0 ? 'Today' : `${diff}d ago`;
  };

  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/comment/${courseId}`);
        if (response.data) {
          setComments(response.data.sort((a, b) => new Date(b.time) - new Date(a.time)));
        }
      } catch {
        setError('Could not load comments.');
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [courseId, trigger, setComments]);

  if (loading) return (
    <div className="flex justify-center py-8">
      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error) return <p className="text-slate-500 text-[13px] text-center py-4">{error}</p>;

  if (!comments.length) return (
    <p className="text-slate-500 text-[13px] text-center py-6">No comments yet. Be the first!</p>
  );

  return (
    <div className="max-h-[400px] overflow-y-auto pr-1">
      {comments.map((c, i) => (
        <Comment
          key={i}
          username={c.username}
          comment={c.comment}
          time={extractTime(c.time)}
          email={c.email}
          daysAgo={calculateDaysAgo(c.time)}
        />
      ))}
    </div>
  );
};

export default Comments;
