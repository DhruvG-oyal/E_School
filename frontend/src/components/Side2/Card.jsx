import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ user, onClick, isActive }) => {
  const navigate = useNavigate(); 

  const handleClick = () => {
    onClick();
    navigate(`/dashboards/${user._id}`); 
    // `location.reload()` is generally not recommended; you can manage state more effectively without refreshing
  };

  return (
    <div className='cursor-pointer'>
      <div
        className={`rounded-lg ${isActive ? 'bg-[#9898d3]' : 'bg-[#1e293b]'} hover:bg-[#9898d3] border border-solid border-gray-100`}
        onClick={handleClick}
      >
        <div className="flex justify-between ml-2 mt-2 rounded">
          <div className={`rounded-full ml-2 bg-[#ec407a] w-6 h-6 text-white flex items-center justify-center`}>
            {user.firstName?.[0]}
          </div>
          <div>
            <div className="flex">
              <span className="text-sm mt-2 mr-2 text-gray-100 ml-12">{user.username}</span>
            </div>
          </div>
        </div>

        <div className="mt-3 ml-4 mb-2 flex justify-start text-base font-open-sans text-white">
          {user.firstName}
        </div>
      </div>
      <div className="divider my-1 py-0 h-1" />
    </div>
  );
};

export default Card;
