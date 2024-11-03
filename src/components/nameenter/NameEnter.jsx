import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import gif from '../gifs/STK-20241031-WA0002 (2).webp';
import left from '../images/left.jpeg';

const NameEnter = ({ setTinku }) => {
  const [inputName, setInputName] = useState(''); // Local state for the input field
  const [showGif, setShowGif] = useState(false); // State to show GIF when input is empty
  const [showLeftImage, setShowLeftImage] = useState(false);

  useEffect(() => {
    const leftTimer = setTimeout(() => {
      setShowLeftImage(true);
    }, 2000);

    // Clear the timeout if the component unmounts or if inputName changes
    return () => clearTimeout(leftTimer);
  }, [inputName]); // Run effect when inputName changes

  const handleInputChange = (e) => {
    setInputName(e.target.value);
    if (showGif) setShowGif(false); // Hide GIF when user starts typing
  };

  const handleButtonClick = () => {
    if (inputName.trim() === '') {
      setShowGif(true); // Show GIF if input is empty
    } else {
      setTinku(inputName); // Update the name in App.js if input is not empty
    }
  };

  return (
    <div className='bg-black h-screen flex items-center justify-center'>
      <div className='text-center w-2/3'>
        <h1 className='text-yellow-300 text-5xl font-extrabold'>First, What can I call you?</h1>
        <input
          className='mt-10 w-[20rem] py-2 rounded-[0.5rem] px-3 outline-none bg-black border-yellow-300 border text-white'
          type="text"
          placeholder='one and only (e.g., Mr./Mrs. Tinku)'
          value={inputName}
          onChange={handleInputChange}
        />
        <Link to={inputName.trim() === '' ? '#' : '/count'}>
          <button 
            className='py-2 ml-2 px-5 bg-yellow-400 rounded-md'
            onClick={handleButtonClick}
          >
            Go With UhOhIq 🤯
          </button>
        </Link>
        {/* Display the GIF if showGif is true */}
        {showGif && (
          <div className="mt-5">
            <img
              src={gif} // Replace with your GIF URL
              alt="Funny GIF for empty input"
              className="w-60 h-60 mx-auto"
            />
            <p className='mt-2 font-semibold text-yellow-400'>“A blank box? Very original. Now, try again! 😆”</p>
          </div>
        )}
      </div>

      {showLeftImage && (
        <img src={left} alt="Left" className='absolute left-0 top-1/2 transform -translate-y-1/2 w-[120px] z-10' />
      )}
    </div>
  );
};

export default NameEnter;
