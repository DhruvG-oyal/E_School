import React from 'react';
import { extractTime } from '../../utils/extractTime';

const Message = ({ curruser, user, message }) => {
  const fromMe = message.senderId === curruser.user_id;
  const formattedTime = extractTime(message.createdAt);
  const shakeClass = message.shouldShake ? 'shake' : '';

  return (
    <div className={`flex gap-2 mb-3 ${fromMe ? 'flex-row-reverse' : 'flex-row'}`}>
      {/* avatar */}
      <div className="w-7 h-7 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-1">
        {fromMe ? curruser.firstName?.[0] : user.firstName?.[0]}
      </div>

      {/* bubble */}
      <div className={`max-w-[75%] ${shakeClass}`}>
        <div className={`px-3 py-2 rounded-2xl text-[13px] leading-relaxed break-words ${
          fromMe
            ? 'bg-blue-600 text-white rounded-tr-sm'
            : 'bg-[#1e2a45] text-slate-200 rounded-tl-sm'
        }`}>
          {message.message}
        </div>
        <div className={`text-slate-600 text-[10px] mt-1 ${fromMe ? 'text-right' : 'text-left'}`}>
          {formattedTime}
        </div>
      </div>
    </div>
  );
};

export default Message;
