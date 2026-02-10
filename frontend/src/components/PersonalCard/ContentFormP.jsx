import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Content from '../../pages/Coursecontent/Content';

const ContentFormP = () => {
  const [length, setLength] = useState(0);
  const [contentItems, setContentItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();
  const { id } = useParams();

  const handleAddCodeSnippet = (currentIndex, descIndex) => {
    setContentItems((prevItems) => {
      const updatedItems = [...prevItems];
      const updatedDescriptions = [...updatedItems[currentIndex].description];
      const currentDescription = updatedDescriptions[descIndex];
      const updatedDescriptionWithoutThinkbox = currentDescription.startsWith('thinkbox ') 
        ? currentDescription.slice(9) 
        : currentDescription;
      const updatedDescriptionWithCode = `code ${updatedDescriptionWithoutThinkbox}`;
      
      updatedDescriptions[descIndex] = updatedDescriptionWithCode;
      updatedItems[currentIndex].description = updatedDescriptions;
      
      return updatedItems;
    });
  };
  
  const handleAddThinkbox = (currentIndex, descIndex) => {
    setContentItems((prevItems) => {
      const updatedItems = [...prevItems];
      const updatedDescriptions = [...updatedItems[currentIndex].description];
      const currentDescription = updatedDescriptions[descIndex];
      const updatedDescriptionWithoutCodeSnippet = currentDescription.startsWith('code ') 
      ? currentDescription.slice(5) 
      : currentDescription;

      const updatedDescription = `thinkbox ${updatedDescriptionWithoutCodeSnippet}`;
      updatedDescriptions[descIndex] = updatedDescription;
      updatedItems[currentIndex].description = updatedDescriptions;
      return updatedItems;
    });
  };

  const handleNormalSnippet = (currentIndex, descIndex) => {
    setContentItems((prevItems) => {
      const updatedItems = [...prevItems];
      const updatedDescriptions = [...updatedItems[currentIndex].description];
      let currentDescription = updatedDescriptions[descIndex];
      currentDescription = currentDescription.startsWith('code ') ? currentDescription.slice(5) : currentDescription;
      currentDescription = currentDescription.startsWith('thinkbox ') ? currentDescription.slice(9) : currentDescription;
      updatedDescriptions[descIndex] = currentDescription;
      updatedItems[currentIndex].description = updatedDescriptions;
      return updatedItems;
    });
  };
  


  const handleOptionChange = (e, currentIndex, descIndex) => {
    if (e.target.value === 'codeSnippet') {
      handleAddCodeSnippet(currentIndex, descIndex);
    }
    if (e.target.value === 'thinkbox') {
      handleAddThinkbox(currentIndex, descIndex);
    }
    if(e.target.value==='default')
    {
      handleNormalSnippet(currentIndex,descIndex);
    }

  };
  

  useEffect(() => {
    const newContentItems = Array.from({ length }, (_, index) => ({
      maintitle: contentItems[index]?.maintitle || '',
      title: contentItems[index]?.title || [''],
      description: contentItems[index]?.description || [''],
      image: contentItems[index]?.image || ['']
    }));
    setContentItems(newContentItems);
  }, [length]);

  const handleContentItemChange = (index, field, subIndex, value) => {
    const newContentItems = [...contentItems];
    newContentItems[index][field][subIndex] = value;
    setContentItems(newContentItems);
  };

  const handleMainTitleChange = (index, value) => {
    const newContentItems = [...contentItems];
    newContentItems[index].maintitle = value;
    setContentItems(newContentItems);
  };

  const handleAddField = (index, field) => {
    const newContentItems = [...contentItems];
    newContentItems[index][field].push('');
    setContentItems(newContentItems);
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < contentItems.length-1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleSubmit = async (e) => {
    console.log(contentItems);
    e.preventDefault();
    try {
      await axios.post(`${process.env.REACT_APP_API_URL}/content`, {
        length: parseInt(length, 10),
        id,
        content: contentItems
      });
      navigate(`/dashboard`);
    } catch (err) {
      console.error('Error creating content:', err);
    }
  };

  return (
    <div className='border border-solid border-[#2c2e73] bg-[#030712]'>
      <div className='text-center mt-2 text-[24px] font-bold text-gray-100'>CREATE CONTENT FOR COURSE {id}</div>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
            <div className="flex flex-col space-y-2">
              <div className="text-left">
                <label htmlFor="length" className="block text-[20px] mt-5 mb-1 font-medium text-white">Enter how many Pages you want</label>
                <input
                  type="number"
                  id="length"
                  className="w-6/12 border-solid mb-8 placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Length"
                  value={length}
                  onChange={(e) => setLength(parseInt(e.target.value, 10))}
                  required
                />
              </div>

              {contentItems.length > 0 && (
                <>
                  <div className='text-center text-[18px]  font-semibold'>CONTENT FOR PAGE {currentIndex + 1}</div>

                  <div className="flex justify-between mt-4">
                    <button
                      type="button"
                      onClick={handlePrev}
                      className={`bg-[#030712] max-h-[100px] border border-solid border-[#2c2e73] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-blue-400 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={currentIndex === 0}
                    >
                      Previous
                    </button>

                    <div className="text-left w-[600px] max-h-[800px] overflow-auto border border-solid border-[#2c2e73] p-4 bg-[#1a1c23] rounded-md">

                      <label htmlFor={`maintitle-${currentIndex}`} className="block text-[20px] ml-2 mt-5 mb-1 font-medium text-white">Enter Page Title</label>
                      <input
                        type="text"
                        id={`maintitle-${currentIndex}`}
                        className="w-9/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        placeholder={`Step ${currentIndex + 1} - Enter Page Title`}
                        value={contentItems[currentIndex].maintitle}
                        onChange={(e) => handleMainTitleChange(currentIndex, e.target.value)}
                        required
                      />
                      <div className='mt-20'></div>

                      {contentItems[currentIndex].title.map((title, titleIndex) => (
                        <div key={titleIndex}>
                          <label htmlFor={`title-${currentIndex}-${titleIndex}`} className="block text-[20px] mt-5 ml-2 mb-1 font-medium text-white">{titleIndex+1}-Enter Sub-Titles</label>
                          <input
                            type="text"
                            id={`title-${currentIndex}-${titleIndex}`}
                            className="w-9/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2  border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder={`Title ${titleIndex + 1}`}
                            value={title}
                            onChange={(e) => handleContentItemChange(currentIndex, 'title', titleIndex, e.target.value)}
                            required
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddField(currentIndex, 'title')}
                        className="  cursor-pointer border bg-blue-400 border-solid border-[#2c2e73] mt-2 text-white  py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                      >
                        Add <b>SubTitle</b>
                      </button>

                      <div className='mt-20'></div>

                      {contentItems[currentIndex].description.map((description, descIndex) => (
  <div key={descIndex}>
    <label
      htmlFor={`description-${currentIndex}-${descIndex}`}
      className="block text-[20px] mt-5 mb-1 font-medium text-white"
    >
      {descIndex+1} - Enter SubTitle Description/Code Snippet
    </label>
    <div className='flex justify-around '>
    <textarea
      id={`description-${currentIndex}-${descIndex}`}
      className="w-9/12 placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder={`Description ${descIndex + 1} (Multiple <li> Separated by "/n Enter" and paragraph separated by "@#")`}
      value={description}
      onChange={(e) => handleContentItemChange(currentIndex, 'description', descIndex, e.target.value)}
      required
    />
     <select
        onChange={(e) => handleOptionChange(e, currentIndex, descIndex)}
        className="p-2 cursor-pointer text-center text-[12px] ml-2  bg-[#030712] text-white focus:outline-none focus:ring-2 focus:ring-gray-300 border border-[#2c2e73] border-solid rounded"
     >
                              <option value="default">Normal</option>
                              <option value="codeSnippet">Code Snippet</option>
                              <option value="thinkbox">ThinkBox</option>
    </select>
    </div>
  </div>
))}
<button
  type="button"
  onClick={() => handleAddField(currentIndex, 'description')}
  className="bg-[#030712] mt-4 order border-solid border-[#2c2e73]  text-white py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
>
  Add antoher <b>Paragraph/Codeblock</b>
</button>

      <div className='mt-20'></div>

                      {contentItems[currentIndex].image.map((image, imgIndex) => (
                        <div key={imgIndex}>
                          <label htmlFor={`image-${currentIndex}-${imgIndex}`} className="block text-[20px] mt-5 mb-1 font-medium text-white">Enter Image URL for perticular subtitle</label>
                          <input
                            type="text"
                            id={`image-${currentIndex}-${imgIndex}`}
                            className="w-9/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                            placeholder={`Image URL ${imgIndex + 1} (Multiple Seprated by "!#")`}
                            value={image}
                            onChange={(e) => handleContentItemChange(currentIndex, 'image', imgIndex, e.target.value)}
                          />
                        </div>
                      ))}
                      <button
                        type="button"
                        onClick={() => handleAddField(currentIndex, 'image')}
                        className="bg-blue-400  border border-solid border-[#2c2e73] mt-2 text-white font-bold py-1 px-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
                      >
                        Add Image
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={handleNext}
                      className={`bg-[#030712] max-h-[100px] border border-solid border-[#2c2e73] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-blue-400 ${currentIndex === contentItems.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      disabled={currentIndex === contentItems.length-1 }
                    >
                      Next
                    </button>
                  </div>
                </>
              )}

            </div>
          </div>
          <div className='flex justify-center'>
            <button type="submit" className="bg-[#030712] border border-solid border-[#2c2e73] text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-blue-400">Create Content</button>
          </div>
        </form>
      </div>
     
      {contentItems.length > 0 && currentIndex >= 0 && (
  <div className='mr-20 ml-20 p-4 mt-10 mb-5 max-h-[1000px] overflow-y-auto bg-[#2F3437]'>
    <div className='flex justify-center'>PREVIEW OF PAGE {currentIndex + 1}</div>
    <Content content={contentItems[currentIndex]} page={currentIndex + 1} />
  </div>
)}
    </div>
  );
};

export default ContentFormP;
