import React from 'react';

const HowToAddACard = () => {
  return (
    <div className="w-full py-16 px-8 flex justify-center bg-white">
      <div className="flex flex-col md:flex-row items-center max-w-6xl w-full gap-10">

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[28px] font-bold text-blue-900 mb-3">How to Add a Module</h2>
          <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-3">
            Adding a module is straightforward. Fill in the details and your module appears on the dashboard instantly.
          </p>
          <ul className="text-gray-700 text-[16px] space-y-2 list-disc list-inside">
            <li>Set the title of your module</li>
            <li>Add comma-separated tags for categorisation</li>
            <li>Write a short description</li>
            <li>Provide an image URL</li>
          </ul>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/Cardcreation.png"
            alt="How to Add a Card"
            className="rounded-xl shadow-lg w-full max-w-md object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default HowToAddACard;
