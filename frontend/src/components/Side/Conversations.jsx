import React, { useState, useEffect } from 'react';
import Conversation from './Conversation';
import { useMessageContext } from '../../context/messageContext';
import axios from 'axios';
import { useSocketContext } from '../../context/SocketContext';

const Conversations = ({ users, onConversationSelect, tkn }) => {
  const [isActive, setIsActive] = useState(null);
  const { messages, setMessages, setLoading } = useMessageContext();
  const { onlineUsers } = useSocketContext();

  const sortedUsers = [...users].sort((userA, userB) => {
    const isOnlineA = onlineUsers.includes(userA._id);
    const isOnlineB = onlineUsers.includes(userB._id);

    if (isOnlineA && !isOnlineB) return -1;
    if (!isOnlineA && isOnlineB) return 1;
    return 0;
  });

  useEffect(() => {
    console.log('Online users:', onlineUsers);
    console.log('Sorted Users:', sortedUsers);
  }, [onlineUsers, users]);

  const getMessages = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/message/${isActive}`, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${tkn}`
        }
      });
      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isActive) {
      getMessages();
    }
  }, [isActive]);

  return (
    <div className="flex flex-col justify-center p-2 items-center w-9/12 mb-2 min-h-[300px] max-h-[600px] overflow-auto">
      {sortedUsers.map(user => (
        <Conversation
          key={user._id}
          user={user}
          onClick={() => {
            onConversationSelect(user);
            setMessages([]);
            setIsActive(isActive === user._id ? null : user._id);
          }}
          isActive={isActive === user._id}
        />
      ))}
    </div>
  );
};

export default Conversations;
