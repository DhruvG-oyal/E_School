import React from 'react';
import { extractTime } from '../../utils/extractTime';

const Message = ({ curruser, user, message}) => {
  const fromMe = message.senderId === curruser.user_id;
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-300"; 
  const formattedTime = extractTime(message.createdAt);
  const textAlignClass = fromMe ? "text-right" : "text-left"
  const shakeClass=message.shouldShake?"shake":"";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className='chat-image'>
        <div className="rounded-full bg-[#ec407a] w-6 h-6 mt-2 ml-0 mr-1 text-white flex items-center justify-center">
          {fromMe ? curruser.firstName?.[0] : user.firstName?.[0]}
        </div>
      </div>
      <div className={`chat-bubble rounded-md p-1 text-white {fromMe?text-right:text-left} ${bubbleBgColor}  ${shakeClass} ${textAlignClass} pb-2 max-w-full min-w-[100px] break-words`}>
        {message.message}
      </div>
      <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>
        {formattedTime}
      </div>
    </div>
  );
}

export default Message;
