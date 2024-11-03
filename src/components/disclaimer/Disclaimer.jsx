import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import simpbat from '../images/Bart Simpson (1).jpeg';
import right from '../images/right.jpeg';
import disclaimerAudio from '../images/audio.opus'; 

const Disclaimer = () => {
  const [showBat, setShowBat] = useState(false);
  const [showRightImage, setShowRightImage] = useState(false);

  useEffect(() => {
    
    const batTimer = setTimeout(() => {
      setShowBat(true);
    }, 2000);

    // Show the right image after 10 seconds
    const rightTimer = setTimeout(() => {
      setShowRightImage(true);
    }, 10000);

    // Cleanup timers on component unmount
    return () => {
      clearTimeout(batTimer);
      clearTimeout(rightTimer);
    };
  }, []);

  return (
    <div className='bg-black w-full h-screen flex-col justify-center items-center py-12 relative'>
      {/* Audio element */}
      
      <div className="bg-yellow-400 text-black py-[2rem] px-[5rem] rounded-lg shadow-lg max-w-screen-xl mx-auto border border-black">
        <h1 className="text-2xl font-extrabold text-center  uppercase">DISCLAIMER</h1>
        <p className="text-lg leading-relaxed mb-4">
          Welcome to <span className="font-bold">UhOhIq</span>, where the questions are pointless, the answers are absurd, and the results are <span className="underline">definitely</span> going to make you question your life choices.
        </p>
       
        <p className="text-lg leading-relaxed mb-2">
          The ultimate destination for pointless questions, absurd answers, and random GIFs to make your day... *questionable*! You’re about to enter a world where common sense has taken a vacation, and our questions are carefully designed to leave you with zero useful knowledge.
        </p>
        <p className="text-lg leading-relaxed mb-2">
          This web app is built for those who don’t take life too seriously and are ready to embrace the fun, the silly, and the outright strange. If you proceed, be prepared for unserious feedback, surprising GIFs, and maybe even a questioning of your own decision-making abilities. Sounds fun, right?
        </p>
        <p className="text-lg leading-relaxed mb-2">
          <span className="font-bold">A heads-up:</span> By clicking <span className="font-bold">'Start'</span>, you’re giving us permission to roast, entertain, and possibly confuse you beyond belief. The answers you give may reveal insights you didn’t know existed. Spoiler alert: They won’t be helpful insights, but hey, laughter is guaranteed! 😂
        </p>
        <p className="text-lg leading-relaxed mb-2">
          <span className="font-bold">Fair warning:</span> This quiz may roast you, make you laugh, or leave you questioning your decision-making skills. Proceed only if you’re prepared for some <span className="italic">not-so-serious</span> feedback and hilarious GIFs!
        </p>

        <div className='flex flex-col justify-end items-center '> 
          <h1 className='font-medium text-lg'>To know how to pronounce</h1>    
           <audio src={disclaimerAudio} controls className='w-[20rem] '/>
        </div>
        <p className="text-lg text-center font-semibold italic text-gray-800">
          Note: No feelings were harmed in the making of this app. Probably. 😜
        </p>
        <h1 className="text-2xl font-extrabold text-center pt-5 uppercase">USE HEADPHONES FOR BETTER EXPERIENCE🎧</h1>
      </div>

      <div className='flex justify-center mt-2'>
        <Link to='/nameenter'>
          <button className="bg-black text-white border hover:text-black hover:border-black bg-opacity-80 rounded-lg px-10 py-2 shadow-md hover:bg-yellow-300 cursor-pointer transition duration-200">
            START
          </button>
        </Link>
      </div>

      {showBat && (
        <img src={simpbat} alt="Bart Simpson" className='absolute bottom-0 left-10 transform -translate-x-1/2 w-[150px] z-10' />
      )}
      {showRightImage && (
        <img src={right} alt="Right Image" className='absolute right-0 top-1/2 transform -translate-y-1/2 w-[120px] z-10' />
      )}
    </div>
  );
};

export default Disclaimer;
