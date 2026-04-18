import React, { useEffect, useRef } from 'react';
import Message from './Message';
import { useMessageContext } from '../../context/messageContext';
import { useSocketContext } from '../../context/SocketContext';
import notificationSound from './assets/sounds/simple-notification-152054.mp3';

const Messages = ({ user, curruser }) => {
  const { messages, setMessages, loading } = useMessageContext();
  const { socket } = useSocketContext();
  const bottomRef = useRef(null);

  // listen for incoming messages
  useEffect(() => {
    if (!socket) return;
    const handleNewMessage = (newMessage) => {
      newMessage.shouldShake = true;
      try { new Audio(notificationSound).play(); } catch {}
      setMessages((prev) => [...prev, newMessage]);
    };
    socket.on('newMessage', handleNewMessage);
    return () => socket.off('newMessage', handleNewMessage);
  }, [socket, setMessages]);

  // scroll to bottom on new message
  useEffect(() => {
    setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: 'smooth' }), 50);
  }, [messages]);

  if (loading) return (
    <div className="flex justify-center py-6">
      <div className="w-5 h-5 border-2 border-blue-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (!messages.length) return (
    <p className="text-slate-600 text-[12px] text-center py-6">No messages yet. Say hello!</p>
  );

  return (
    <div>
      {messages.map((msg) => (
        <Message key={msg._id} user={user} curruser={curruser} message={msg} />
      ))}
      <div ref={bottomRef} />
    </div>
  );
};

export default Messages;
