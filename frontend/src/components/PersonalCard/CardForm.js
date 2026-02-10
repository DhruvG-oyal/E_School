import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from '../LearningCard/Card';
import { useNavigate } from 'react-router-dom';

const CardForm = ({ onCardCreated, userid }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('');
  const [preview, setPreview] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const generateId = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < 15; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  };

  useEffect(() => {
    setId(generateId());
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/cards/${userid}`, { title, description, tags: tags.split(','), image, id });
      onCardCreated(response.data.card);
      setTitle('');
      setDescription('');
      setTags('');
      setImage('');
      setId(generateId());
      setPreview(false);
      console.log("Successfully created card");

      navigate(`/createContentP/${id}`);
    } catch (err) {
      console.error('Error creating card:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    setPreview(!preview);
  };

  return (
    <div className='border border-solid border-white bg-[#030712]'>
      <div className="p-4">
        <form onSubmit={handleSubmit}>
          <div className='p-4'>
            <div className="flex flex-col space-y-2">
              <div className="text-left">
                <label htmlFor="title" className="block text-[20px] mt-5 mb-1 font-medium text-white">Title</label>
                <input
                  type="text"
                  id="title"
                  className="w-6/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Enter Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>

              <div className="text-left">
                <label htmlFor="description" className="block text-[20px] mt-5 mb-1 font-medium text-white">Description</label>
                <textarea
                  id="description"
                  className="w-6/12 placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="text-left">
                <label htmlFor="tags" className="block text-[20px] mt-5 mb-1 font-medium text-white">Add Tags</label>
                <input
                  type="text"
                  id="tags"
                  className="w-6/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Tags (comma separated)"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                />
              </div>
              <div className="text-left">
                <label htmlFor="image" className="block text-[20px] mt-5 mb-1 font-medium text-white">Image URL</label>
                <input
                  type="text"
                  id="image"
                  className="w-6/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Image URL"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                />
              </div>
              <div className="text-left">
                <label htmlFor="id" className="block text-[20px] mt-5 mb-1 font-medium text-white">Course ID</label>
                <input
                  type="text"
                  id="id"
                  className="w-6/12 border-solid placeholder-gray-100 text-white bg-[#030712] px-3 py-2 border border-[#2c2e73] rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  value={id}
                  readOnly
                />
              </div>
            </div>
          </div>
          <div>
            <button type="button" onClick={handlePreview} className="bg-[#030712] border border-solid border-[#2c2e73] ml-20 text-white font-bold py-2 px-4 cursor-pointer rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400">Preview Card</button>
            {loading ? <button type="submit" className="bg-[#030712] border border-solid border-[#2c2e73] ml-20 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-blue-400">Creating card.... <div className="loader"></div></button> : <button type="submit" className="bg-[#030712] border border-solid border-[#2c2e73] ml-20 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer focus:ring-blue-400">Create Card</button>}
          </div>
        </form>
      </div>
      <div>
        {preview && (
          <div className="grid grid-cols-2 md:grid-cols-2 p-4 gap-8">
            <Card card={{ title, description, tags: tags.split(','), image, id }} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CardForm;
