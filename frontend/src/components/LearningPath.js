import React, { useState, useEffect } from 'react';

const LearningPaths = ({ onSearchTagChange, cards }) => {
  const [selected, setSelected] = useState('');
  const [topTags, setTopTags] = useState([]);

  useEffect(() => {
    const freq = {};
    cards.forEach((card) => card.tags.forEach((tag) => { freq[tag] = (freq[tag] || 0) + 1; }));
    const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a]);
    setTopTags(sorted.slice(0, 8));
  }, [cards]);

  const handleClick = (tag) => {
    const next = tag === selected ? '' : tag;
    setSelected(next);
    onSearchTagChange(next);
  };

  if (!topTags.length) return null;

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-slate-500 text-[12px] font-medium mr-1">Tags:</span>
      {topTags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={`text-[12px] px-3 py-1 rounded-full border transition cursor-pointer font-medium ${
            selected === tag
              ? 'bg-blue-600 border-blue-500 text-white'
              : 'bg-[#0f172a] border-[#1e2a45] text-slate-300 hover:border-blue-600 hover:text-white'
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
};

export default LearningPaths;
