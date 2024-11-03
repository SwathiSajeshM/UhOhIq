import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../images/bgimg.jpg'; // Adjusted path as needed
import option1 from '../images/1stoption.mp4';
import option2 from '../images/option2.mp4';
import option3 from '../images/option3.mp4';
import option4 from '../images/option4.mp4';
import option5 from '../images/option5.mp4';
import option6 from '../images/option6.mp4';
import option7 from '../images/option7.mp4';

const Quiz = () => {
  const navigate = useNavigate();

  // Questions and options with associated videos
  const questions = [
    {
      question: "How do you pretend to be busy at work?",
      options: [
        { text: "Open a spreadsheet and stare at it", video: option5 },
        { text: "Walk around with a serious face", video: option2 },
        { text: "Type random things and look stressed", video: option3 },
        { text: "Ask pointless questions in meetings", video: option4 }
      ]
    },
    {
      question: "What's the best way to wake up early?",
      options: [
        { text: "Set 20 alarms", video: option1 },
        { text: "Go to bed with regret", video: option6 },
        { text: "Hit snooze until it's noon", video: option7 },
      ]
    }
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedOption(null); // Reset selected option
    } else {
      navigate('/differenc');
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
            <video 
            autoPlay
              src={selectedOption.video} 
              className="w-full rounded-lg shadow-lg"
            />
            <button 
              onClick={handleNextClick} 
              className="bg-yellow-500 text-white py-2 px-6 rounded-lg font-semibold shadow-md hover:bg-yellow-600 transition duration-200"
            >
              Next
            </button>
          </div>
        ) : (
          <>
            <h1 className="text-white text-4xl mb-6 text-center font-semibold">
              {currentQuestion.question}
            </h1>
            <div className="flex flex-col space-y-4 w-full max-w-md">
              {currentQuestion.options.map((option, index) => (
                <div
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  className="bg-white bg-opacity-80 rounded-lg p-4 shadow-md hover:bg-yellow-300 cursor-pointer transition duration-200"
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

export default Quiz;
