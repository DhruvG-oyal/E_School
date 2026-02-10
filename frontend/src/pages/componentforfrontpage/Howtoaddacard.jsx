import React from 'react';

const HowToAddACard = () => {
  return (
    <div className="w-full py-12 px-8 flex justify-center">
      <div className="flex flex-row items-center max-w-6xl w-full gap-8">

        <div className="w-full border border-solid flex border-white p-2 justify-center md:w-1/2 text-left">
          <div className="max-w-md">
          <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">
              How to Add a Module
            </h2>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
              Adding a card is a simple process that enhances your interface by providing a modular way to display content. 
              Here’s how you can do it:
            </p>
            <ul className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            <li>You can set the title of your module.</li>
              <li>You can add tags (comma-separated) with each module.</li>
              <li>You can include a short description.</li>
              <li>You can add an image URL.</li>
            </ul>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src="/Cardcreation.png" // Replace with your image URL
            alt="How to Add a Card"
            className="rounded-lg shadow-md w-full max-w-md md:max-w-md object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default HowToAddACard;
