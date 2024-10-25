"use client"; // Make this a client component

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use next/navigation for App Router
import ModulePath from './ModulePath'; // Import ModulePath
import { globalState } from '../globalState'; // Import the global state

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const router = useRouter(); // Initialize Next.js router for App Router
  const [language, setLanguage] = useState('en'); // Default language is English
  const [showModulePath, setShowModulePath] = useState(false);

  const handleShowModulePath = () => {
    setShowModulePath(true);
  };

  // Set language from globalState
  useEffect(() => {
    if (globalState.language) {
      setLanguage(globalState.language);
    }
  }, []);

  // Increment points in the global state when the quiz is completed
  useEffect(() => {
    if (showScore) {
      globalState.points += score; // Increment the points
    }
  }, [showScore, score]);

  const questions = [
    {
      question: language === 'kn' 
        ? "ಕೃಷಕರು ಮಣ್ಣಿನ ಬಗ್ಗೆ ಕಾಳಜಿ ವಹಿಸದಿದ್ದರೆ ಸಸ್ಯಗಳಿಗೆ ಏನಾಗುತ್ತದೆ?" 
        : "What happens to plants when farmers don’t take care of the soil?",
      image: "/game2/1.jpg",
      options: language === 'kn' 
        ? ["ಅರಿಷಣೆ", "ಮಳೆ", "ಅತಿವೃದ್ಧಿ", "ಹೂವು"] 
        : ["Erosion", "Flooding", "Overgrowth", "Blooming"],
      correct: 0,
    },
    {
      question: language === 'kn' 
        ? "ಕೆಲವರು ಆಹಾರ ಹೊಂದಿದರೆ ಇತರರಿಗೆ ಅದಿಲ್ಲದಿರಲು ಕಾರಣವಾಗುವ ದೊಡ್ಡ ಸಮಸ್ಯೆ ಏನು?" 
        : "What is the biggest problem that causes some people to have food while others don’t?",
      image: "/game2/2.jpg",
      options: language === 'kn' 
        ? ["ತ್ಯಾಜ್ಯ", "ಸಾರಿಗೆ", "ಶೇಖರಣೆ", "ಕೃಷಿ"] 
        : ["Waste", "Transportation", "Storage", "Farming"],
      correct: 0,
    },
    {
      question: language === 'kn' 
        ? "ದೀರ್ಘಕಾಲ ಮಳೆಯಿಲ್ಲದಿದ್ದಾಗ ಸಂಭವಿಸುವ ಪರಿಸರ ಸವಾಲು ಯಾವುದು?" 
        : "What is the environmental challenge that happens when an area doesn’t get enough rain for a long time?",
      image: "/game2/3.jpg",
      options: language === 'kn' 
        ? ["ಅರಿಷಣೆ", "ಪುರು", "ಬಿಸಿಲು", "ಹಿಮಪಾತ"] 
        : ["Erosion", "Flood", "Drought", "Avalanche"],
      correct: 2,
    },
    {
      question: language === 'kn' 
        ? "ಪ್ರಯೋಜನಕಾರಿ ತಂತ್ರಜ್ಞಾನದಿಂದ ಆಧುನಿಕ ಕೃಷಿ ಏನನ್ನು ಮಾಡಬಹುದು?" 
        : "What type of farming uses technology to grow crops in small spaces or without soil?",
      image: "/game2/4.jpg",
      options: language === 'kn' 
        ? ["ಬೆಳೆ ಪರಿವರ್ತನೆ", "ಸ್ಮಾರ್ಟ್ ಕೃಷಿ", "ಪಾರಂಪರಿಕ ಕೃಷಿ", "ಜಾನುವಾರು ಕೃಷಿ"] 
        : ["Crop rotation", "Smart farming", "Traditional farming", "Livestock farming"],
      correct: 1,
    },
    {
      question: language === 'kn' 
        ? "ಸಂಪತ್ತು ಸಮಾನವಾಗಿ ಹಂಚಲಾಗುವುದನ್ನು ಏನು ಕರೆಯಲಾಗುತ್ತದೆ?" 
        : "What is it called when resources are shared fairly among everyone?",
      image: "/game2/5.jpg",
      options: language === 'kn' 
        ? ["ನ್ಯಾಯ", "ನಿಷ್ಕರ್ಷಣ", "ಲಾಭ", "ಮಾಲಿಕತ್ವ"] 
        : ["Equity", "Efficiency", "Profit", "Ownership"],
      correct: 0,
    },
    {
      question: language === 'kn' 
        ? "ಅಹಾರದ ಅಪಚಯವನ್ನು ಮಣ್ಣಿನ ಆರೋಗ್ಯಕರತೆಗೆ ಪರಿವರ್ತಿಸಲು ರೈತರು ಏನನ್ನು ಬಳಸಬಹುದು?" 
        : "What can farmers use to turn food waste into something that makes the soil healthier?",
      image: "/game2/6.jpg",
      options: language === 'kn' 
        ? ["ಸೂಕ್ಷ್ಮ ನೀರ್", "ಹಾಸಿಗೆ", "ಮೂಲಕಮಹಾಮಾರಿ", "ನೀರು"] 
        : ["Fertilizer", "Compost", "Pesticide", "Water"],
      correct: 1,
    },
    {
      question: language === 'kn' 
        ? "ಮಣ್ಣುಮೇಲೆ ಬೆಳೆದ ತೋಟಗಳು ಯಾವ ಕೃಷಿಯ ವಿಧಾನವಾಗುತ್ತದೆ?" 
        : "What is the farming method called when different crops are planted each season to help the soil?",
      image: "/game2/7.jpg",
      options: language === 'kn' 
        ? ["ಸ್ಮಾರ್ಟ್ ಕೃಷಿ", "ಜಲಪೂರಕ", "ಬೆಳೆ ಪರಿವರ್ತನೆ", "ಮೋನೋಕಲ್ಚರ್"] 
        : ["Smart farming", "Irrigation", "Crop rotation", "Monoculture"],
      correct: 2,
    },
    {
      question: language === 'kn' 
        ? "ಮನೆ ಅಥವಾ ಶಾಲೆಯಲ್ಲಿ ನೀವು ಯಾವ ಸಣ್ಣ ಕಾರ್ಯವನ್ನು ಮಾಡಬಹುದು?" 
        : "What small action can you do at home or school to contribute to reducing hunger?",
      image: "/game2/8.jpg",
      options: language === 'kn' 
        ? ["ಮರಸನೆ", "ಶಾಪಿಂಗ್", "ಪ್ರಯಾಣ", "ರೀಸೈಕ್ಲಿಂಗ್"] 
        : ["Gardening", "Shopping", "Traveling", "Recycling"],
      correct: 0,
    },
    {
      question: language === 'kn' 
        ? "ಮನೆಯಲ್ಲಿಯೇ ಆಹಾರದ ಸುಧಾರಣೆಯು ಮಿತಿಯಲ್ಲಿ ಉಳಿಸಲು ನೀವು ಏನು ಮಾಡಬಹುದು?" 
        : "What can we practice at home to reduce food waste and make sure others have enough?",
      image: "/game2/9.jpg",
      options: language === 'kn' 
        ? ["ಮಿತಿಯಲ್ಲಿ", "ಸಂರಕ್ಷಣೆ", "ಆಹಾರದ ಆಮದು", "ಅವಶ್ಯಕತೆಯ ಆಪೂರ್ಣ ಆಹಾರ"] 
        : ["Overeating", "Conservation", "Importing food", "Cooking more than needed"],
      correct: 1,
    },
    {
      question: language === 'kn' 
        ? "ಪುನರುಪಯೋಗಿ ಶಕ್ತಿ ಬಳಸಿ ಆಹಾರದ ಲಭ್ಯತೆ ದೃಢಪಡಿಸೋ ವೈವಿಧ್ಯಾವಾದಿಗಳು ಯಾವುದು?" 
        : "What type of farming uses renewable energy and sustainable practices to ensure food for the future?",
      image: "/game2/10.jpg",
      options: language === 'kn' 
        ? ["ಆರ್ಥಿಕ ಕೃಷಿ", "ಆಹಾರದ ಬದಲಾಗುವಿಕೆ", "ಪ್ರಕೃತಿಪ್ರಿಯತ", "ಜೀವಾವಾಸಿಯ"] 
        : ["Industrial farming", "Sustainable farming", "Livestock farming", "Organic farming"],
      correct: 1,
    },
  ];

  const handleAnswerOptionClick = (index) => {
    if (index === questions[currentQuestion].correct) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {showScore ? (
        <div className="bg-white p-10 shadow-lg rounded-md text-center text-black">
          <h2 className="text-3xl font-bold mb-4">
            {language === 'kn' ? "ಪ್ರಶ್ನಾವಳಿ ಮುಗಿದಿದೆ!" : "Quiz Completed!"}
          </h2>
          <p className="text-xl mb-4">
            {language === 'kn'
              ? `ನೀವು ${score} ಕ್ಕೆ ${questions.length} ರಷ್ಟು ಅಂಕಗಳನ್ನು ಗಳಿಸಿದ್ದೀರಿ`
              : `You scored ${score} out of ${questions.length}`}
          </p>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowModulePath}
          >
            {language === 'kn' ? "ಪ್ರಶ್ನಾವಳಿಯಿಂದ ನಿರ್ಗಮಿಸಿ" : "Exit Quiz"}
          </button>
        </div>
      ) : (
        <div className="bg-white p-10 shadow-lg rounded-md text-black">
          <h2 className="text-xl font-bold mb-4">
            {questions[currentQuestion].question}
          </h2>
          <div className="flex justify-center mb-4"> {/* Center align the image */}
            <img src={questions[currentQuestion].image} alt="Question Image" className="max-w-full h-auto" />
          </div>
          <div className="flex flex-col space-y-2">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleAnswerOptionClick(index)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}