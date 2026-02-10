import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Otherpeoples from './otherpeoples';

const Sidebars = ({ tkn, onConversationSelect }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/allusers`, {
          headers: {
            Authorization: `Bearer ${tkn}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [tkn]);

  return (
    <div className='border-r bg-[#030712] drop-shadow-[0_0_2.4px_#5C2E00] max-h-screen flex flex-col'>
      <div className='text-center mb-5 mt-5 font-bold'>FIND OTHER DASHBOARDS</div>
      <div className='divider px-3'></div>
      <Otherpeoples users={users} onConversationSelect={onConversationSelect} tkn={tkn} />
    </div>
  );
};

export default Sidebars;
