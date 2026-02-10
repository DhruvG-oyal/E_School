import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavbarP from '../Navbars/NavbarP';
import CardForm from './CardForm';
import NavbarA from '../Navbars/NavbarA';


const CreateCardboardP = () => {
  const [isCardFormVisible, setIsCardFormVisible] = useState(false);
  const [cards, setCards] = useState([]);
  const handleCardCreated = (newCard) => {
    setCards([newCard,...cards]);
  };
  const toggleCardFormVisibility = () => {
    setIsCardFormVisible(!isCardFormVisible);
  }
  
  const extractUserIdFromUrl = () => {
    const pathname = location.pathname;
    const userId = pathname.split('/').pop();
    return userId;
  };
  const userid=extractUserIdFromUrl();

  

  return (
    <>
      <div className=''>
      <NavbarA/>
        {isCardFormVisible && (
            <div className='w-8/12 ml-5 mt-20 '>
          <CardForm onCardCreated={handleCardCreated} userid={userid}/>
            </div>
        )}
        <button
          type="button"
          className="bg-blue-500  hover:bg-blue-700 ml-5 mt-8 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
          onClick={toggleCardFormVisibility}
        >
          {isCardFormVisible ? 'Hide Card Form' : 'Create New Card'}
        </button>
      </div>
    </>
  );
};

export default CreateCardboardP;
