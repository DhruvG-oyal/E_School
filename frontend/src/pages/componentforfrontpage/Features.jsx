const Features = () => {
    return (
      <div className="w-full py-12 px-8 flex justify-center">
        <div className="flex flex-row items-center max-w-6xl w-full gap-8">
          
          <div className="w-full md:w-1/2 text-left  border border-solid  border-white p-2 flex justify-center">
            <div className="max-w-md">
            <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">Acess to Other Dashboard</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
              Our platform offers a range of features designed to enhance your learning experience. 
              You can easily access notes shared by other users, allowing you to learn from a diverse set of perspectives and grow your knowledge base. 
              Additionally, you can manage and access your own personalized dashboard, which provides a central location to organize your notes, track your progress, and stay engaged with your learning journey.
              </p>
            </div>
          </div>
          
         
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="Othersdashboard.png" 
              alt="Features"
                 className="rounded-lg shadow-md w-full max-w-lg md:max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default Features;
  