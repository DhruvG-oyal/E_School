import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"

const Card = ({ card }) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate(`/dashboard/${card.id}`, { state: { title: card.title } });
  };

  return (
    <div className="border max-h-[220px] border-[#2c2e73] border-solid overflow-auto rounded-lg bg-[#030712] drop-shadow-[0_0_2.4px_#5C2E00]">
      <div className="flex">
        <div className="flex-shrink-0 mr-6 ml-4 mt-4">
          <img
            src={card.image}
            alt={card.title}
            className="object-cover h-32 w-32 p-4 rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow mt-7">
          <div className="text-[30px] text-white font-sans font-bold">{card.title}</div>
          <p className="text-gray-100 font-mono text-[12px] text-ellipsis mr-10 max-h-10 mb-4">
            {card.description}
          </p>
          <div className="mt-4">
            {card.tags.map((tag, index) => (
              <span
                key={index}
                className="text-white text-[15px] font-semibold mr-2 rounded"
              >
                {tag}
                {index !== card.tags.length - 1 && <span className="ml-2">|</span>}
              </span>
            ))}
          </div>
          <button
            onClick={handleStartClick}
            className="bg-white cursor-pointer text-black hover:bg-gray-200  font-serif font-bold rounded m-2 self-end py-3 px-6 text-lg"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
