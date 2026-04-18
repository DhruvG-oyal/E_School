const WhatIsACard = () => {
    return (
      <div className="w-full py-16 px-8 flex justify-center bg-gray-50">
        <div className="flex flex-col md:flex-row-reverse items-center max-w-6xl w-full gap-10">

          <div className="w-full md:w-1/2 text-left">
            <h2 className="text-[28px] font-bold text-blue-900 mb-3">What Are Modules?</h2>
            <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
            <p className="text-gray-700 text-[17px] leading-relaxed mb-3">
              A Module is a UI element that encapsulates related content — images, text, and actions —
              into a cohesive unit. Modules are used to organize and display information clearly,
              commonly used in dashboards and profile pages.
            </p>
            <p className="text-gray-700 text-[17px] leading-relaxed">
              Each module displays the topic tags of a subject area so you can quickly identify and
              jump into the content you want to study.
            </p>
          </div>
  
          <div className="w-full md:w-1/2 flex justify-center">
            <img 
              src="/cards.png"
              alt="Card Example"
              className="rounded-xl shadow-lg w-full max-w-md object-cover"
            />
          </div>
        </div>
      </div>
    );
  };
  
  export default WhatIsACard;
  