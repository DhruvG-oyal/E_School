import React from 'react';

const HowOurContentPageLooks = () => {
  return (
    <div className="w-full  py-12 px-4 flex justify-center">
 <div className="flex flex-row items-center max-w-6xl w-full gap-8">
    
   <div className="w-full md:w-1/2 flex flex-col gap-3 justify-center">


        <div className="w-full flex justify-center">
          <img 
            src="/Contentnavbar.png" 
            alt="Top Example"
            className="rounded-lg shadow-md max-w-xl  object-cover"
          />
        </div>

      
        <div className="w-full flex flex-row gap-4"> 
          <div className="w-full flex justify-center">
            <img 
              src="/imagesandthikbox.png" 
              alt="Middle Example 1"
              className="rounded-lg shadow-md max-w-xs object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <img 
              src="/cddcodesnippit.png" 
              alt="Middle Example 2"
              className="rounded-lg shadow-md max-w-xs object-cover"
            />
          </div>
        </div>

        {/* Bottom image */}
        <div className="w-full flex flex-row gap-4"> {/* Reduced gap from gap-8 to gap-4 */}
          <div className="w-full flex justify-center">
            <img 
              src="/Commentbar.png" 
              alt="Bottom Example 1"
              className="rounded-lg shadow-md max-w-xs object-cover"
            />
          </div>
          <div className="w-full flex justify-center">
            <img 
              src="/easynavigation.png" 
              alt="Bottom Example 2"
              className="rounded-lg shadow-md max-w-xs object-cover"
            />
          </div>
        </div>



      </div>

      {/* Text section */}
      <div className="w-full border border-solid  border-white p-6 justify-center md:w-1/2 text-left">
        <div className="max-w-md mx-auto">
        <h2 className="text-[30px] flex justify-center font-bold text-blue-800 mb-4">
            How Our Content Page Looks
          </h2>
          <p className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            Our content page is meticulously designed to ensure a seamless user experience, providing an organized and interactive platform for accessing and engaging with content. The layout is crafted to support easy navigation and effective content presentation.
          </p>
          <ul className="text-transparent bg-clip-text bg-gradient-to-r from-black to-black text-[18px]">
            <li><strong>Module Navigation:</strong> Each module consists of several pages, which can be easily accessed through the 'JumpTo' button located in the navbar. This feature enhances user convenience by allowing quick navigation between different sections of a module.</li>
            <li><strong>Navbar Features:</strong> The navbar is equipped with various tools to improve the user experience. This includes buttons for commenting on content and navigation options for moving to the next or previous pages within the module. These features ensure users can efficiently interact with the content and explore it comprehensively.</li>
            <li><strong>Page Structure:</strong> Each page within a module is organized with a main title that clearly identifies the content. Under this title, there are various subtitles that help break down the content into manageable sections. Pages also include descriptions and images that provide additional context and visual appeal, aiding in a better understanding of the material.</li>
            <li><strong>Description Types:</strong> Descriptions on the pages come in three distinct types to cater to different needs: 
              <ul className="list-disc list-inside mt-2">
                <li><strong>Normal Text:</strong> Standard text for general information and explanations.</li>
                <li><strong>Code Snippets:</strong> Displayed within a formatted block to showcase code examples or technical details.</li>
                <li><strong>Thinkboxes:</strong> Specially styled boxes that highlight important concepts or thoughts, often used to draw attention to key insights or additional context.</li>
              </ul>
            </li>
            <li><strong>Comment Bar:</strong> The comment bar is a vital feature that enables users to engage with the content by leaving comments. This fosters community interaction and growth, as it allows users to share feedback, ask questions, and contribute additional insights or discussions related to the module. By promoting active communication, the comment bar helps build a collaborative learning environment.</li>
          </ul>
        </div>
      </div>
     </div>
     </div>
    
  );
};

export default HowOurContentPageLooks;
