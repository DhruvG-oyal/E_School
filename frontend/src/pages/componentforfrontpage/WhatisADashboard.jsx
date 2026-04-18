const WhatisADashboard = () => {
  return (
    <div className="w-full py-16 px-8 flex justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">

        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/about.png" 
            alt="Dashboard"
            className="rounded-xl shadow-lg w-full max-w-lg object-cover"
          />
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[28px] font-bold text-blue-900 mb-3">What is a Dashboard?</h2>
          <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-3">
            A dashboard is an intuitive interface that provides a centralized view of your learning modules and interactions.
            It allows you to monitor, analyze, and manage content in real-time.
          </p>
          <p className="text-gray-700 text-[17px] leading-relaxed">
            The dashboard houses your learning cards, a real-time chat bar, and message panel. Save notes with tags for easy retrieval —
            organized across pages for a clean, structured experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhatisADashboard;
