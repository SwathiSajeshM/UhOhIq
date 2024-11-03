import React, { useState } from 'react';
import chaplin from '../images/charlie chaplin.jpg';
import chaplintwo from '../images/chaplintwo.jpg';
import emptygif2 from '../gifs/STK-20241103-WA0002.webp';
import difvdo2 from '../images/difvdo2.mp4';
import difvdo3 from '../images/difvdo3.mp4';
import { useNavigate } from 'react-router-dom';

const Difftwo = () => {
  const [inputValue, setInputValue] = useState('');
  const [showErrorGif, setShowErrorGif] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [videoSrc, setVideoSrc] = useState(null); // State for the video source
const navigate=useNavigate();
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowErrorGif(false);
  };

  const handleNext = () => {
    navigate('/final');
  };


  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setShowErrorGif(true);
    } else {
      // Check if input value is "1"
      setVideoSrc(inputValue.trim() === '1' ? difvdo2 : difvdo3); // Set appropriate video
      setShowVideo(true); // Show video when input is not empty
      setShowErrorGif(false);
    }
  };

  return (
    <div className='bg-black h-screen'>
      <h1 className='text-5xl font-medium text-yellow-300 text-center pt-10'>Find the Difference</h1>
      <div className='flex justify-around items-center pt-20'>
        <img src={chaplin} alt="" className='h-[30rem] rounded-lg' />

        <div className='flex flex-col items-center'>
          {showVideo ? (
            <>
              <video 
                autoPlay
                src={videoSrc}
                className='w-[30rem] h-[13rem] rounded-lg'
              />
              {/* Conditional rendering for the h1 and h2 based on the videoSrc */}
              {videoSrc === difvdo2 ? (
                <h1 className='text-yellow-300 pt-2'>"Ding, ding, ding! You spotted 1! The universe is applauding you! 👏"</h1>
              ) : (
                <h2 className='text-yellow-300 pt-2'>"Lost in the world of confusion! Can someone send a GPS? 😂"</h2>
              )}
            </>
          ) : (
            <input 
              min="1"
              type="number" 
              placeholder='How much is the difference??' 
              value={inputValue} 
              onChange={handleInputChange} 
              className='w-[20rem] py-2 rounded-[0.5rem] px-3 outline-none bg-black border-yellow-300 border text-white' 
            />
          )}

          <div className='text-center pt-5 flex flex-col items-center justify-center h-[17rem] w-[21rem] rounded-lg'>
            {showErrorGif ? (
              <>
                <img src={emptygif2} alt="Error GIF" className="h-[13rem] w-[13rem] rounded-lg" />
                <h1 className='text-yellow-300 text-center mt-4'>"Oops, missed again! Is your keyboard shy? 😆 Give it another go!"</h1>
              </>
            ) : (
              <button
              onClick={showVideo ? handleNext : handleSubmit}
                className="bg-white bg-opacity-80 rounded-lg px-10 py-2 shadow-md hover:bg-yellow-300 cursor-pointer transition duration-200"
              >
                {showVideo ? "Next" : "Tada!"}
              </button>
            )}
          </div>
        </div>

        <img src={chaplintwo} alt="" className='h-[30rem] rounded-lg hover:border-4 hover:border-yellow-300' />
      </div>
    </div>
  );
};

export default Difftwo;
