import React, { useEffect, useRef } from 'react';
import Message from './Message';
import { useMessageContext } from '../../context/messageContext';
import MessageSkeleton from '../Skeletons/messageskeleton';
import { useSocketContext } from '../../context/SocketContext';
import notificationSound from "./assets/sounds/simple-notification-152054.mp3"

const Messages = ({ user, curruser }) => {
  const { messages, setMessages, loading } = useMessageContext();
  const { socket } = useSocketContext();
  const lastMessageRef = useRef();
  const useListenMessages = () => {
    useEffect(() => {
      if (socket) {
        const handleNewMessage = (newMessage) => {
          newMessage.shouldShake = true;
          const sound=new Audio(notificationSound);
          sound.play()
          setMessages((prevMessages) => [...prevMessages, newMessage]);
        };
 
        socket.on('newMessage', handleNewMessage);

        return () => {
          socket.off('newMessage', handleNewMessage);
        };
      }
    }, [socket, setMessages]);
  };

  useListenMessages();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 10);
  }, [messages]);

  return (
    <div className="m-4 min-h-[300px] max-h-[600px] overflow-auto hide-scrollbar">
      <div className="px-4 flex-1">
        {!loading &&
          messages.length > 0 &&
          messages.map((message) => (
            <div key={message._id} ref={lastMessageRef}>
              <Message user={user} curruser={curruser} message={message} />
            </div>
          ))}
        {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      </div>
      {!loading && messages.length === 0 && (
        <p className="text-center text-[12px]">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
