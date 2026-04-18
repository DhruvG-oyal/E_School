import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate(`/dashboard/${card.id}`, { state: { title: card.title } });
  };

  return (
    <div
      className="group bg-[#0f172a] border border-[#1e2a45] rounded-xl overflow-hidden hover:border-blue-700/60 hover:shadow-[0_0_24px_rgba(37,99,235,0.08)] transition-all duration-200 cursor-pointer"
      onClick={handleStartClick}
    >
      <div className="p-5 flex gap-4">
        {/* icon */}
        <div className="w-12 h-12 flex-shrink-0 bg-[#0a0f1e] rounded-xl flex items-center justify-center p-2 border border-[#1e2a45]">
          <img src={card.image} alt={card.title} className="w-7 h-7 object-contain" />
        </div>

        {/* text */}
        <div className="flex-1 min-w-0">
          <h3 className="text-white font-semibold text-[15px] mb-1 group-hover:text-blue-400 transition truncate">
            {card.title}
          </h3>
          <p className="text-slate-400 text-[12px] leading-relaxed line-clamp-2 mb-3">
            {card.description}
          </p>

          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-1">
              {card.tags.map((tag, i) => (
                <span key={i} className="text-[10px] font-medium text-blue-400 bg-blue-900/30 border border-blue-800/40 px-2 py-0.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            <span className="text-[12px] text-blue-400 font-medium flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform">
              Start →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
