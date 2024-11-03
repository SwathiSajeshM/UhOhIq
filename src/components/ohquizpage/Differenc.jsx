import React, { useState,useEffect } from 'react';
import beandiff from '../images/beandiffimg.jpg';
import emptygif from '../gifs/STK-20241103-WA0001.webp';
import difvdo from '../images/difvdo.mp4';
import { useNavigate } from 'react-router-dom';
import simpbat from '../images/Bart Simpson (1).jpeg';


const Differenc = () => {
  const [showBat, setShowBat] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [showErrorGif, setShowErrorGif] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const navigate=useNavigate();

  useEffect(() => {
    // Show the bat image after 2 seconds
    const batTimer = setTimeout(() => {
      setShowBat(true);
    }, 2000);

 
   
    
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    setShowErrorGif(false);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === '') {
      setShowErrorGif(true);
    } else {
      setShowVideo(true); // Show video when input is not empty
      setShowErrorGif(false);
    }
  };

  const handleNext = () => {
    navigate('/difftwo');
  };


  return (
    <div className='bg-black h-screen'>
      <h1 className='text-5xl font-medium text-yellow-300 text-center pt-10'>Find the Difference</h1>
      <div className='flex justify-around items-center pt-20'>
        <img src={beandiff} alt="" className='h-[30rem] rounded-lg' />

        <div className='flex flex-col items-center'>
          {showVideo ? (
            <>
              <video 
                autoPlay
                src={difvdo}
                className='w-[30rem] h-[13rem] rounded-lg' // Adjusted width and height for larger video
              />
              <h1 className='text-yellow-300 pt-2'>Congratulations! You’ve successfully spotted… absolutely nothing!🤭</h1>
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

          <div className='text-center pt-5   flex flex-col items-center justify-center h-[17rem] w-[28rem] rounded-lg'>
            {showErrorGif ? (
              <>
                <img src={emptygif} alt="Error GIF" className="h-[15rem] w-[15rem] rounded-lg" />
                <h1 className='text-yellow-300 text-center mt-4'>"An empty box? Are we playing hide-and-seek? 👀 Try again!"</h1>
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

        <img src={beandiff} alt="" className='h-[30rem] rounded-lg hover:border-4 hover:border-yellow-300' />
      </div>

      {showBat && (
        <img src={simpbat} alt="Bart Simpson" className='absolute bottom-0 left-[28.5rem] transform -translate-x-1/2 w-[120px] z-10' />
      )}
    </div>
  );
};

export default Differenc;
