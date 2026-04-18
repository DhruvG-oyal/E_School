import React from 'react';

const HowToAddContentForAModule = () => {
  return (
    <div className="w-full py-16 px-8 flex justify-center bg-gray-50">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-10">

        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[28px] font-bold text-blue-900 mb-3">How to Add Content for a Module</h2>
          <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-3">
            Adding content is designed to be easy. Follow these steps to get your material live:
          </p>
          <ol className="text-gray-700 text-[16px] space-y-2 list-decimal list-inside">
            <li>Navigate to the module in your dashboard</li>
            <li>Click the Add Content button to open the editor</li>
            <li>Enter text, images, code snippets, or thinkboxes</li>
            <li>Save and review — make adjustments as needed</li>
            <li>Publish to make content available to all users</li>
          </ol>
        </div>
        
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <img 
            src="/Contentcreation.png" 
            alt="Content Creation"
            className="rounded-xl shadow-lg w-full object-cover"
          />
          <img 
            src="/previewofcontent.png" 
            alt="Content Preview"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default HowToAddContentForAModule;
