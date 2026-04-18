import React, { useState } from 'react';
import axios from 'axios';
import { format } from 'date-fns';
import useStore from '../../zustand/useStore';

const Postcomment = ({ userDetails, courseId, onPostComment }) => {
  const [comment, setComment] = useState('');
  const [loading, setLoading] = useState(false);
  const addComment = useStore((state) => state.addComment);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/comment`, {
        username: userDetails.firstName,
        email: userDetails.username,
        comment,
        time: format(new Date(), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx"),
        courseId,
      });
      setComment('');
      if (addComment) addComment(response.data);
      onPostComment();
    } catch (err) {
      console.error('Error posting comment:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mt-3 pt-3 border-t border-[#1e2a45]">
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment…"
        className="flex-1 px-3 py-2 text-[13px] bg-[#080c18] border border-[#1e2a45] rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition"
      />
      <button
        type="submit"
        disabled={loading || !comment.trim()}
        className="px-3 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition cursor-pointer text-[13px] flex-shrink-0"
      >
        {loading ? '…' : 'Post'}
      </button>
    </form>
  );
};

export default Postcomment;
