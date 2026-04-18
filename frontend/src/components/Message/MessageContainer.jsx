import React from 'react';
import Messages from './Messages';
import MessageInput from './MessageInput';

const MessageContainer = ({ user, curruser, tkn }) => {
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="px-4 py-3 border-b border-[#1e2a45] flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-blue-600 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {user.firstName?.[0]}
        </div>
        <div>
          <div className="text-slate-200 text-[14px] font-semibold">{user.firstName} {user.lastName}</div>
          <div className="text-slate-500 text-[11px]">{user.username}</div>
        </div>
      </div>

      {/* messages */}
      <div className="flex-1 overflow-y-auto px-4 py-3 min-h-[200px] max-h-[360px]">
        <Messages user={user} curruser={curruser} />
      </div>

      {/* input */}
      <MessageInput userid={user._id} tkn={tkn} />
    </div>
  );
};

export default MessageContainer;
