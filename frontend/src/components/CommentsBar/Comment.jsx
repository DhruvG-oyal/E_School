import React from 'react';

const Comment = ({ username, comment, time, email, daysAgo }) => {
  return (
    <div className="border-b border-gray-200 overflow-hidden">
      <div className="flex items-center rounded">
        <div className="rounded-full bg-[#ec407a] w-6 h-6 mt-2 ml-0 mr-1 text-white flex items-center justify-center">
          {username?.[0]}
        </div>
        <div className="flex ml-4 flex-col flex-1">
          <div className="flex">
            <span className="text-sm mt-2 mr-2 text-gray-100 ml-2">{email}</span>
          </div>
        </div>
      </div>
      <div className="mt-3 ml-5  text-base">{comment}</div>
      <div className="mt-4 ml-5 text-gray-100 flex justify-between text-[12px]">
        <span>{daysAgo}</span>
        <span className="ml-4">{time}</span>
      </div>

      <div className="divider my-1 py-0 h-1" />
    </div>
  );
};

export default Comment;
