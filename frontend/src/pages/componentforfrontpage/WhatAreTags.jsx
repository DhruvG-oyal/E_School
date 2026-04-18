const WhatAreTags = () => {
    return (
      <div className="w-full py-16 px-8 flex justify-center bg-white">
        <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">
    
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/tags.png"
              alt="Tags"
              className="rounded-xl shadow-lg w-full max-w-lg object-cover"
            />
          </div>
    
          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[28px] font-bold text-blue-900 mb-3">What Are Tags?</h2>
            <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Tags are a powerful way to categorize and organize your notes and content. They let you group related
              information and make it easy to search and retrieve specific topics. With tags, you can quickly find
              relevant content, enhancing your overall experience on the platform.
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatAreTags;
  