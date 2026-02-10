import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarA from "../components/Navbars/NavbarA";
import CardForm from '../components/AdminCard/CardForm';
import CardList from '../components/AdminCard/CardList';

const Adminboard = () => {
  const [isCardFormVisible, setIsCardFormVisible] = useState(false);
  const [cards, setCards] = useState([]);

  const handleCardCreated = (newCard) => {
    setCards([...cards, newCard]);
  };

  const toggleCardFormVisibility = () => {
    setIsCardFormVisible(!isCardFormVisible);
  };

  return (
    <>
      <NavbarA />
      <div className='p-10'>
        {isCardFormVisible && (
            <div className='w-8/12 '>
          <CardForm onCardCreated={handleCardCreated} />
            </div>
        )}
        
        <button
          type="button"
          className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          onClick={toggleCardFormVisibility}
        >
          {isCardFormVisible ? 'Hide Card Form' : 'Create New Card'}
        </button>

        {/* <CardList cards={cards} /> */}
      </div>
    </>
  );
};

export default Adminboard;
