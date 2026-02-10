import React from 'react';

const HowToAddContentForAModule = () => {
  return (
    <div className="w-full py-12 px-8 flex flex-row justify-center">
      <div className="w-full max-w-6xl  flex flex-row md:flex-row gap-8">
        {/* Text Section */}
        <div className="w-full md:w-1/2 border border-solid  border-white p-2 flex flex-col justify-center">
        <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">How to Add Content for a Module</h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            Adding content to a module is a straightforward process designed to make it easy for users to manage their materials. Follow these steps to add new content effectively:
          </p>
          <ol className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            <li><strong>Access the Module:</strong> Navigate to the module where you want to add content. You can find your modules in the dashboard or through the module navigation menu.</li>
            <li><strong>Open the Content Editor:</strong> Click on the 'Add Content' button or similar option available in the module interface. This will open the content editor where you can input new information.</li>
            <li><strong>Input Content:</strong> Enter the content into the designated fields. You can add text, images, and other media as needed. Ensure that your content is organized and formatted according to the module’s guidelines.</li>
            <li><strong>Save and Review:</strong> Once you have added the content, save your changes and review the module to ensure that everything appears as expected. Make any necessary adjustments before finalizing.</li>
            <li><strong>Publish or Submit:</strong> After reviewing, publish or submit the content to make it available to other users. Ensure that all required fields are completed and that the content meets the module’s standards.</li>
          </ol>
        </div>
        
        {/* Image Section */}
        <div className="w-full flex flex-col gap-8">
          <div className="w-full flex justify-center">
            <img 
              src="/Contentcreation.png" 
              alt="Middle Example 1"
                className="rounded-lg shadow-md w-full max-w-lg  object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <img 
              src="/previewofcontent.png" 
              alt="Middle Example 2"
            className="rounded-lg shadow-md w-full max-w-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToAddContentForAModule;
