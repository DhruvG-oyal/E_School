import React, { useState, useEffect } from 'react';

// CSS for Loader
const loaderStyle = {
  border: '8px solid #f3f3f3', // Light grey
  borderTop: '8px solid #3498db', // Blue
  borderRadius: '50%',
  width: '50px',
  height: '50px',
  animation: 'spin 1s linear infinite',
  display: 'inline-block'
};

const LearningPaths = ({ onSearchTagChange, cards }) => {
  const [selectedButton, setSelectedButton] = useState('');
  const [topTags, setTopTags] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state
  const hoverColor = 'bg-gray-800';

  useEffect(() => {
    const fetchTags = () => {
      setLoading(true); // Start loading
      const tagFrequency = {};
      cards.forEach(card => {
        card.tags.forEach(tag => {
          if (tagFrequency[tag]) {
            tagFrequency[tag]++;
          } else {
            tagFrequency[tag] = 1;
          }
        });
      });

      const sortedTags = Object.keys(tagFrequency).sort((a, b) => tagFrequency[b] - tagFrequency[a]);
      setTopTags(sortedTags);
      setLoading(false); // End loading
    };

    fetchTags();
  }, [cards]);

  const handleClick = (buttonLabel) => {
    const newSelectedButton = buttonLabel === selectedButton ? '' : buttonLabel;
    setSelectedButton(newSelectedButton);
    onSearchTagChange(newSelectedButton);
  };


  const [numTags, setNumTags] = useState(3);

  useEffect(() => {
    const updateNumTags = () => {
      const width = window.innerWidth;
      if (width >= 1024) {
        setNumTags(6);
      } else {
        setNumTags(3);
      }
    };

    updateNumTags(); 
    window.addEventListener('resize', updateNumTags);

    return () => {
      window.removeEventListener('resize', updateNumTags); 
    };
  }, []);

  return (
    <div className="bg-[#030712] text-xl font-serif rounded-lg px-4 py-2 flex items-center gap-4 border drop-shadow-[0_0_2.4px_#5C2E00] border-[#2c2e73] border-solid">
      {loading ? (
        <div className="flex justify-center items-center min-h-[50px]">
          <div style={loaderStyle}></div>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          {topTags.slice(0, numTags).map((tag, index) => (
            <button
              key={index}
              className={`bg-[#030712] rounded-lg text-gray-100 py-2 px-4 font-medium focus:outline-none hover:${hoverColor} cursor-pointer ${
                selectedButton === tag ? hoverColor : ''
              }`}
              onClick={() => handleClick(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LearningPaths;
