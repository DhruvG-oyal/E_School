const WhatIsACard = () => {
    return (
      <div className="w-full  py-12 px-8 flex justify-center">


        <div className="flex flex-row-reverse items-center max-w-6xl w-full gap-8">

          <div className="w-full md:w-1/2  border border-solid  border-white p-2 text-left flex justify-center">
            <div className="max-w-md">
             <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">What Are Modules?</h2>
             <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
              A Module is a versatile UI element that encapsulates related content into a single, cohesive unit. 
              It typically includes elements such as images, text, and actions. Cards are used to organize and display 
              information in a clear and visually appealing way. They are commonly used in dashboards, profile pages, 
              and other interfaces to present data or interactive elements in a modular format.
            </p>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
              It is used to display topic tags of a module that a user wants to study.
            </p>
            </div>
          </div>
  
          {/* Left div for the image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/cards.png" // Update with the correct image path
              alt="Card Example"
              className="rounded-lg shadow-md w-full max-w-md md:max-w-md object-cover"
            />
          </div>

        </div>
      </div>
    );
  };
  
  export default WhatIsACard;
  