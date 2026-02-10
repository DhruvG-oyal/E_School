// src/components/WhatisADashboard.js

const WhatisADashboard = () => {
  return (
    <div className="w-full py-12 px-8 flex justify-center">
      <div className="flex flex-row items-center max-w-6xl w-full gap-8">

        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/about.png" 
            alt="Dashboard"
              className="rounded-lg shadow-md w-full max-w-lg md:max-w-md object-cover"
          />
        </div>

        <div className="w-full md:w-1/2  border border-solid  border-white p-2 text-left flex justify-center">
          <div className="max-w-md">
          <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">What is a Dashboard?</h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            A dashboard is an intuitive and interactive visual interface that provides a centralized view of key metrics and information. 
            It allows users to monitor, analyze, and manage data in real-time, offering insights that help in making informed decisions.
          </p>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            A dashboard is majorly used to store routes for card, a chat bar, and a message bar. It helps users to save notes with tags for future access,
            and the dashboard is divided into pages, which makes it cleaner and more organized.
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatisADashboard;
