const Features = () => {
    return (
      <div className="w-full py-16 px-8 flex justify-center bg-gray-50">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">
          
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[28px] font-bold text-blue-900 mb-3">Access Other Dashboards</h2>
            <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Our platform lets you easily access notes shared by other users, learning from diverse perspectives.
              You can also manage your own personalized dashboard to organize notes, track progress, and stay engaged
              with your learning journey.
            </p>
          </div>
          
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="Othersdashboard.png" 
              alt="Features"
              className="rounded-xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  