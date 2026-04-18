import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Conversations from './Conversations';

const Sidebar = ({ tkn, onConversationSelect }) => {
  const [users, setUsers] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    if (!tkn) return;
    axios.get(`${process.env.REACT_APP_API_URL}/allusers`, {
      headers: { Authorization: `Bearer ${tkn}` },
    })
      .then((res) => setUsers(res.data))
      .catch((err) => console.error('Error fetching users:', err));
  }, [tkn]);

  const filtered = users.filter(
    (u) =>
      u.firstName?.toLowerCase().includes(query.toLowerCase()) ||
      u.username?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <div className="p-3 border-b border-[#1e2a45]">
        <input
          type="text"
          placeholder="Search people…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-3 py-1.5 text-[12px] bg-[#080c18] border border-[#1e2a45] rounded-lg text-white placeholder-gray-600 focus:outline-none focus:border-blue-600 transition"
        />
      </div>
      <Conversations users={filtered} onConversationSelect={onConversationSelect} tkn={tkn} />
    </div>
  );
};

export default Sidebar;
