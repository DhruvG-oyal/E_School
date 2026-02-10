import React, { useState } from 'react';
import Card from './Card';

const Otherpeoples = ({ users, onConversationSelect, tkn }) => {
  const [isActive, setIsActive] = useState(null);
  return (
    <div className="flex flex-col  justify-center p-2 items-center w-9/12 mb-2 min-h-[300px] max-h-[600px]  overflow-auto">
      {users.map(user => (
        <Card
          key={user._id}
          user={user}
          onClick={() => setIsActive(user._id)}
          isActive={isActive === user._id}
        />
      ))}
    </div>
  );
};

export default Otherpeoples;
