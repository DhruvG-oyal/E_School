const WhatAreTags = () => {
    return (
      <div className="w-full  py-12 px-8 flex justify-center">
        <div className="flex flex-row items-center max-w-6xl w-full gap-8">
    
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/tags.png"
              alt="Tags"
              className="rounded-lg shadow-md w-full max-w-lg md:max-w-md object-cover"
            />
          </div>
    
          <div className="w-full md:w-1/2 text-left flex border border-solid  border-white p-2 justify-center">
            <div className="max-w-md">
            <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">What Are Tags?</h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
                Tags are a powerful way to categorize and organize your notes and content. They provide a method for users to group related information
                and make it easier to search and retrieve specific topics. With tags, you can quickly find and access relevant content, enhancing
                your overall experience on the platform.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatAreTags;
  