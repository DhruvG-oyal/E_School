import React, { useState } from 'react';
import axios from 'axios';
import { useMessageContext } from '../../context/messageContext';

const MessageInput = ({ userid, tkn }) => {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { messages, setMessages } = useMessageContext();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setLoading(true);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/message/send/${userid}`,
        { message },
        { headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tkn}` } }
      );
      setMessages([...messages, response.data]);
      setMessage('');
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-3 border-t border-[#1e2a45]">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type a message…"
        className="flex-1 px-3 py-2 text-[13px] bg-[#080c18] border border-[#1e2a45] rounded-lg text-slate-200 placeholder-slate-600 focus:outline-none focus:border-blue-600 transition"
      />
      <button
        type="submit"
        disabled={loading || !message.trim()}
        className="px-3 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white rounded-lg transition cursor-pointer text-[13px] flex-shrink-0"
      >
        {loading ? '…' : '→'}
      </button>
    </form>
  );
};

export default MessageInput;
