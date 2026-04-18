import React from 'react';

const HowOurContentPageLooks = () => {
  return (
    <div className="w-full py-16 px-8 flex justify-center bg-white">
      <div className="flex flex-col md:flex-row items-start max-w-6xl w-full gap-10">

        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="w-full flex justify-center">
            <img 
              src="/Contentnavbar.png" 
              alt="Content Navbar"
              className="rounded-xl shadow-lg w-full object-cover"
            />
          </div>
          <div className="flex flex-row gap-4">
            <img 
              src="/imagesandthikbox.png" 
              alt="Images and Thinkbox"
              className="rounded-xl shadow-md w-1/2 object-cover"
            />
            <img 
              src="/cddcodesnippit.png" 
              alt="Code Snippets"
              className="rounded-xl shadow-md w-1/2 object-cover"
            />
          </div>
          <div className="flex flex-row gap-4">
            <img 
              src="/Commentbar.png" 
              alt="Comment Bar"
              className="rounded-xl shadow-md w-1/2 object-cover"
            />
            <img 
              src="/easynavigation.png" 
              alt="Easy Navigation"
              className="rounded-xl shadow-md w-1/2 object-cover"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 text-left">
          <h2 className="text-[28px] font-bold text-blue-900 mb-3">How Our Content Page Looks</h2>
          <div className="w-12 h-1 bg-blue-700 mb-4 rounded"></div>
          <p className="text-gray-700 text-[17px] leading-relaxed mb-4">
            The content page is built for a seamless reading experience with clear navigation and rich formatting options.
          </p>
          <ul className="text-gray-700 text-[16px] space-y-3">
            <li><strong className="text-blue-900">Module Navigation:</strong> Use the Jump To button in the navbar to jump between pages instantly.</li>
            <li><strong className="text-blue-900">Navbar:</strong> Includes Prev/Next buttons, page counter, comments toggle, and logout.</li>
            <li><strong className="text-blue-900">Page Structure:</strong> Each page has a main title, subtitles, descriptions, and optional images.</li>
            <li><strong className="text-blue-900">Description Types:</strong> Normal text, syntax-highlighted code snippets, and styled Thinkboxes for key insights.</li>
            <li><strong className="text-blue-900">Comment Bar:</strong> Leave comments per course to engage with the community and ask questions.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HowOurContentPageLooks;
