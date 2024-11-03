import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/bgimg.jpg';
import successvdo from '../images/successvdo.mp4';
import failgif from '../images/STK-20241103-WA0002 (2).webp';

const Final = () => {
  const navigate = useNavigate();

  const questions = [
    {
      question: "How many Simpsons have you seen?",
      options: [
        { text: "6", type: "video", media: successvdo },
        { text: "8", type: "gif", media: failgif },
        { text: "4", type: "gif", media: failgif },
        { text: "0", type: "gif", media: failgif }
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClicklast = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null);
    } else {
      navigate('/bye');
    }
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full p-4">
        {selectedOption ? (
          <div className="flex flex-col items-center space-y-6 w-1/2">
            {selectedOption.type === 'video' ? (
              <video 
              autoPlay
                src={selectedOption.media} 
                className="w-full rounded-lg shadow-lg"
              />
            ) : (
              <img 
                src={selectedOption.media} 
                alt="Selected option GIF" 
                className="w-full rounded-lg shadow-lg" 
              />
            )}
            <button 
              onClick={handleNextClicklast} 
              className="bg-yellow-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-200"
            >
              Next
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-yellow-400 text-6xl py-10 mb-4 font-bold">
              This is your last question
            </h2>

            <h1 className="text-white text-4xl mb-6 text-center font-semibold">
              {currentQuestion.question}
            </h1>

            <div className="flex flex-col space-y-4 w-[10rem] max-w-md">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)} 
                  className="bg-white bg-opacity-80 text-center rounded-lg p-4 shadow-md hover:bg-yellow-300 cursor-pointer transition duration-200"
                >
                  {option.text}
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Final;
