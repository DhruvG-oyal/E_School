import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CardList = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await axios.get(`${process.env.REACT_APP_API_URL}/cards`);
        setCards(response.data);
      } catch (err) {
        console.error('Error fetching cards:', err);
      }
    };

    fetchCards();
  }, []);

  return (
    <div>
      {cards.map((card) => (
        <div key={card.id} className="card">
          <h2>{card.title}</h2>
          <p>{card.description}</p>
          <p>{card.tags}</p>
          {card.image && <img src={card.image} alt={card.title} />}
        </div>
      ))}
    </div>
  );
};

export default CardList;


//     <div className="p-4">
{/* <form onSubmit={handleSubmit}>
<div className="flex flex-col space-y-2">
  <div className="text-left">
    <label for="title" className="block text-sm font-medium *: text-gray-300">Title</label>
    <input
      type="text"
      id="title"
      className="w-full px-3 py-2 border border-[#2c2e73] text-black rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="Enter Title"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      required
    />
  </div>
  <div className="text-left">
    <label for="description" className="block text-sm font-medium text-gray-300">Description</label>
    <textarea
      id="description"
      className="w-full  text-black  px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      required
    ></textarea>
  </div>
  <div className="text-left">
    <label for="tags" className="block text-sm font-medium text-gray-300">Tags (comma separated)</label>
    <input
      type="text"
      id="tags"
      className="w-full  text-black  px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="Tags (comma separated)"
      value={tags}
      onChange={(e) => setTags(e.target.value)}
    />
  </div>
  <div className="text-left">
    <label for="image" className="block text-sm font-medium text-gray-300">Image URL</label>
    <input
      type="text"
      id="image"
      className="w-full text-black px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="Image URL"
      value={image}
      onChange={(e) => setImage(e.target.value)}
    />
  </div>
  <div className="text-left">
    <label for="id" className="block text-sm font-medium text-gray-300">ID</label>
    <input
      type="text"
      id="id"
      className="w-full text-black px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
      placeholder="ID"
      value={id}
      onChange={(e) => setId(e.target.value)}
      required
    />
  </div>
</div>
<button type="button" onClick={handlePreview} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Preview Card</button>
<button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-400">Create Card</button>
</form>
</div> */}
