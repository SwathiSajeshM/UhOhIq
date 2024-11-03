import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import bean from '../gifs/bean.mp4';

const Count = ({ tinku }) => {
  const [count, setCount] = useState(3);
  const [showGo, setShowGo] = useState(false);
  const [showLoading, setShowLoading] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (count > 0) {
      const timer = setInterval(() => {
        setCount((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setShowGo(true);
      const goTimeout = setTimeout(() => {
        setShowGo(false);
        setShowLoading(true);
      }, 1000); 

      const loadingTimeout = setTimeout(() => {
        setShowLoading(false);
        setShowVideo(true);
      }, 11000); 

      return () => {
        clearTimeout(goTimeout);
        clearTimeout(loadingTimeout);
      };
    }
  }, [count]);

  
  const handleVideoEnd = () => {
    navigate('/quiz');
  };

  return (
    <div className='bg-yellow-400 h-screen'>
      <div className='pt-20 px-20'>
        <h1 className='text-9xl font-bold'>Hello, {tinku}!</h1>
        <p className='font-bold text-5xl mt-5'>Hope you're ready for some epic fails📉</p>
      </div>
      <section className='flex justify-center items-center pt-[5rem]'>
        <div className="text-9xl font-bold">
       
          {count > 0 ? (
            <h1>{count}</h1>
          ) : showGo ? (
            <h1>Go!</h1>
          ) : showLoading ? (
            <h1>Loading...</h1>
          ) : showVideo ? (
            <video className='rounded-md'
              width="600"
              height="400"
              autoPlay
              onEnded={handleVideoEnd}
              muted
            >
              <source src={bean} type="video/mp4" />
            
            </video>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default Count;
