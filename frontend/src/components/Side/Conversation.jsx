import React from 'react';
import { useSocketContext } from '../../context/SocketContext';

const Conversation = ({ user, onClick, isActive }) => {
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-3 py-2.5 mx-2 my-1 rounded-xl cursor-pointer transition ${
        isActive
          ? 'bg-blue-600'
          : 'hover:bg-[#1e2a45]'
      }`}
    >
      {/* avatar with online dot */}
      <div className="relative flex-shrink-0">
        <div className="w-9 h-9 rounded-full bg-blue-700 text-white text-sm font-bold flex items-center justify-center">
          {user.firstName?.[0]?.toUpperCase()}
        </div>
        {isOnline && (
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-[#0a0f1e]" />
        )}
      </div>

      {/* text */}
      <div className="min-w-0 flex-1">
        <div className={`text-[13px] font-semibold truncate ${isActive ? 'text-white' : 'text-slate-200'}`}>
          {user.firstName} {user.lastName}
        </div>
        <div className={`text-[11px] truncate ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
          {user.username}
        </div>
      </div>

      {/* online badge */}
      {isOnline && !isActive && (
        <span className="text-[10px] text-green-400 font-medium flex-shrink-0">online</span>
      )}
    </div>
  );
};

export default Conversation;
