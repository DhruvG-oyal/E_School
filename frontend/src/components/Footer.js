import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] border border-solid text-white text-center py-4 border-t border-[#2c2e73] w-full">
      <div className="flex justify-around items-center">
        <div className="flex-1 flex items-center justify-center">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-500">
            <img 
              src="https://png.pngtree.com/template/20190927/ourlarge/pngtree-initials-letter-e-logo-vector-circle-template-image_310499.jpg" 
              alt="Footer Image" 
              className="w-10 h-10 rounded-full" 
            />
          </div>
          <div className='ml-1 font-bold text-[20px] text-white'>E-LEARNING SCHOOL</div>
        </div>

        <div className="flex-1">
          <h2 className=" text-white text-[25px] font-bold mb-2">CONNECT</h2>
          <div className="flex justify-center space-x-4">
            <a 
              href="https://www.linkedin.com/in/ayush-agarwal-b5b0b01a1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center"
            >
              <img 
                src="https://e7.pngegg.com/pngimages/524/809/png-clipart-computer-icons-resume-linkedin-logo-job-hunting-others-blue-angle-thumbnail.png" 
                alt="LinkedIn Logo" 
                className="w-8 h-8" 
              />
            </a>
            <a 
              href="https://github.com/ayush-1-2-0-5" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-10 h-10 flex items-center justify-center"
            >
              <img 
                src="https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png" 
                alt="GitHub Logo" 
                className="w-8 h-8" 
              />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-400 mt-4 pt-2 text-sm text-white">
        <p>&copy; {new Date().getFullYear()} E-Learning School. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
