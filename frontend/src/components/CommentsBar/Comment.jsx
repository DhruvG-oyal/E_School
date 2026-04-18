import React from 'react';

const Comment = ({ username, comment, time, email, daysAgo }) => {
  return (
    <div className="py-3 border-b border-[#1e2a45] last:border-0">
      <div className="flex items-center gap-2 mb-2">
        <div className="rounded-full bg-blue-600 w-7 h-7 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">
          {username?.[0]?.toUpperCase() || '?'}
        </div>
        <div>
          <div className="text-slate-200 text-[13px] font-medium">{username}</div>
          <div className="text-slate-500 text-[11px]">{email}</div>
        </div>
      </div>
      <p className="text-slate-300 text-[13px] leading-relaxed ml-9">{comment}</p>
      <div className="flex justify-between mt-2 ml-9 text-slate-500 text-[11px]">
        <span>{daysAgo}</span>
        <span>{time}</span>
      </div>
    </div>
  );
};

export default Comment;
