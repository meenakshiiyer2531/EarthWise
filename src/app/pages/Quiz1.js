import { globalState } from '../globalState'; // Import the global state
import { useState } from 'react';
import ModulePath from './ModulePath';

const Quiz1 = () => {
  const [points, setPoints] = useState(globalState.points);
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(null)); // Track selected options for each question
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz has been submitted
  const [showCongrats, setShowCongrats] = useState(false); // State to control congrats popup
  const [finalScore, setFinalScore] = useState(0); 
  const language = globalState.language; // Assume this is how you check the language
  const isKannada = language === 'kn';

  // Array of questions, options, and the correct answer index
const questions = [
  {
    question: isKannada ? '1. SDG 1 ಏನು ಸಾಧಿಸಲು ಉದ್ದೇಶಿಸಿದೆ?' : '1. What does SDG 1 aim to achieve?',
    options: [
      isKannada ? 'a) ಕಬ್ಬಿಣ ಕಳೆಯಿರಿ' : 'a) Reduce Pollution',
      isKannada ? 'b) ಸಮರ್ಥ ಮನೆ ನೀಡುವುದು' : 'b) Provide affordable housing',
      isKannada ? 'c) ಎಲ್ಲಾ ರೂಪಗಳಲ್ಲಿ ದಾರಿದ್ರ್ಯ ನಿವಾರಣೆ' : 'c) Eradicate poverty in all forms',
      isKannada ? 'd) ಹೆಚ್ಚು ಉದ್ಯೋಗಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು' : 'd) Create more jobs',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: isKannada ? '2. ದಾರಿದ್ರ್ಯದಿಂದ ಹೊರಬರುವುದರಲ್ಲಿ ಏಕೆ ಕಷ್ಟ?' : "2. Why is poverty a cycle that's hard to escape?",
    options: [
      isKannada ? 'a) ಏಕೆಂದರೆ ಜನರು ದಾರಿದ್ರ್ಯದಲ್ಲಿ ಜೀವಿಸಲು ಇಷ್ಟಪಡುತ್ತಾರೆ' : 'a) Because people like living in poverty',
      isKannada ? 'b) ಇದು ಶಿಕ್ಷಣ, ಉದ್ಯೋಗ ಮತ್ತು ಅವಕಾಶಗಳಿಗೆ ಪ್ರವೇಶವನ್ನು ಕೀಳ್ಮಟ್ಟ ಮಾಡುತ್ತದೆ' : 'b) It limits access to education, jobs, and opportunities',
      isKannada ? 'c) ಇದು ಕೆಲವರಿಗೆ ಮಾತ್ರ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ' : 'c) It only affects a few people',
      isKannada ? 'd) ಇದು ಜೀವನದ ಸಹಜ ಭಾಗವಾಗಿದೆ' : 'd) It is a natural part of life',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: isKannada ? '3. ಹಸಿವು ನಿವಾರಣೆಗೆ ಸಹಾಯ ಮಾಡುತ್ತಿರುವ ಸಂಸ್ಥೆಯ ಉದಾಹರಣೆ ಯಾವುದು?' : '3. Which of the following is an example of an organization helping to reduce poverty?',
    options: [
      isKannada ? 'a) ಐಶಾರಾಮಿ ವಸ್ತುಗಳ ಅಂಗಡಿ' : 'a) A luxury goods store',
      isKannada ? 'b) mahal ಸ್ಮಾರಕ ವಾಹನಗಳನ್ನು ಮಾರುವ ಕಂಪನಿಯು' : 'b) A company selling expensive cars',
      isKannada ? 'c) ಉಚಿತ ಪಾಠ ಮತ್ತು ಉದ್ಯೋಗ ತರಬೇತಿ ನೀಡುವ ಸ್ಥಳೀಯ ಧರ್ಮಾರ್ಥ' : 'c) A local charity offering free tutoring and job training',
      isKannada ? 'd) ಅಗತ್ಯವಿಲ್ಲದ ವಸ್ತುಗಳಿಗೆ ಅಳವಡಿಕೆಯ ಆಧಾರದ ಅಂಗಡಿ' : 'd) A store giving discounts on non-essential items',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: isKannada ? '4. ಶಿಕ್ಷಣವು ದಾರಿದ್ರ್ಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ?' : '4. How can education help in reducing poverty?',
    options: [
      isKannada ? 'a) ಐಶಾರಾಮಿ ವಸ್ತುಗಳನ್ನು ಖರೀದಿಸಲು ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ' : 'a) By helping people buy luxury items',
      isKannada ? 'b) ಹೆಚ್ಚು ಹಣ ಗಳಿಸಲು ಮತ್ತು ಉತ್ತಮ ಉದ್ಯೋಗಗಳನ್ನು ಹುಡುಕಲು ಸಹಾಯ ಮಾಡುವ ಮೂಲಕ' : 'b) By helping people earn more money and find better jobs',
      isKannada ? 'c) ಜನರಿಗೆ ಉಚಿತ ಆಹಾರ ನೀಡುವ ಮೂಲಕ' : 'c) By giving people free meals',
      isKannada ? 'd) ದಿನಕ್ಕೆ ಎಲ್ಲಿಂದಲೋ ಜನರನ್ನು ತಕ್ಷಣ ತೆಗೆಯುವ ಮೂಲಕ' : 'd) By keeping people busy all day',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: isKannada ? '5. ದಾರಿದ್ರ್ಯವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೀವು ಏನು ಮಾಡಲು ಸಾಧ್ಯ?' : '5. Which of the following is a real-life action you can take to help reduce poverty?',
    options: [
      isKannada ? 'a) ಹೊಸ ಸ್ಮಾರ್ಟ್‌ಫೋನ್ ಖರೀದಿಸುವುದು' : 'a) Buy a new smartphone',
      isKannada ? 'b) ನಿಮ್ಮದೇ ತಂತ್ರಜ್ಞಾನ ಕಂಪನಿಯನ್ನು ಆರಂಭಿಸುವುದು' : 'b) Start your own tech company',
      isKannada ? 'c) ಅಗತ್ಯವಿಲ್ಲದ ಕುಟುಂಬಗಳಿಗೆ ಆಹಾರ ಮತ್ತು ಉಡುಗೆ ದಾನ ಮಾಡಲು ಆಯೋಜಿಸುವುದು' : 'c) Organize a food and clothing donation drive for families in need',
      isKannada ? 'd) ದಾರಿದ್ರ್ಯ ನಿಮ್ಮ ಕಾಳಜಿಯಲ್ಲಿಯೇ ಇರುವುದಿಲ್ಲ' : 'd) Do nothing because poverty is not your concern',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: isKannada ? '6. SDG 2 ಏನು ಇಳಿಸುವುದರ ಮೇಲೆ ಕೇಂದ್ರೀಕೃತವಾಗಿದೆ?' : '6. What does SDG 2 focus on?',
    options: [
      isKannada ? 'a) ಎಲ್ಲರಿಗೂ ಉಚಿತ ಉಡುಗೆ ನೀಡುವುದು' : 'a) Providing free clothes to everyone',
      isKannada ? 'b) ಹಸಿವನ್ನು ಕೊನೆಗೊಳಿಸುವುದು ಮತ್ತು ಎಲ್ಲರಿಗೂ ಪೋಷಕ ಆಹಾರವನ್ನು ಖಚಿತಪಡಿಸುವುದು' : 'b) Ending hunger and ensuring everyone has enough nutritious food',
      isKannada ? 'c) ಜನರಿಗೆ ಐಶಾರಾಮಿ ಮನೆಗಳನ್ನು ನೀಡುವುದು' : 'c) Giving people luxury homes',
      isKannada ? 'd) ಮನರಂಜನಾ ಸೇವೆಗಳನ್ನು ಪ್ರೋತ್ಸಾಹಿಸುವುದು' : 'd) Promoting entertainment services',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: isKannada ? '7. ಹಸಿವಿಗೆ ಕಾರಣವಲ್ಲದದ್ದು ಯಾವುದು?' : '7. Which of the following is NOT a cause of hunger?',
    options: [
      isKannada ? 'a) ಹವಾಮಾನ ಬದಲಾವಣೆ' : 'a) Climate change',
      isKannada ? 'b) ದುರ್ಬಲ ಕೃಷಿ ಅಭ್ಯಾಸಗಳು' : 'b) Poor agricultural practices',
      isKannada ? 'c) ತೋಟದಲ್ಲಿ ಬಹಳಷ್ಟು ತರಕಾರಿಗಳನ್ನು ಹೊಂದಿರುವುದು' : 'c) Having too many vegetables in the garden',
      isKannada ? 'd) ದಾರಿದ್ರ್ಯ' : 'd) Poverty',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: isKannada ? '8. ಸಮುದಾಯ ತೋಟವು ಹಸಿವಿಗೆ ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?' : '8. How can a community garden help fight hunger?',
    options: [
      isKannada ? 'a) ಎಲ್ಲರಿಗೂ ಹಂಚಿಕೊಳ್ಳಲು ತರಕಾರಿಗಳನ್ನು ಬೆಳೆಸುವ ಮೂಲಕ' : 'a) By growing vegetables that everyone can share',
      isKannada ? 'b) ಶ್ರೀಮಂತರಿಗೆ ದುಬಾರಿ ಹಣ್ಣುಗಳನ್ನು ಮಾರುವ ಮೂಲಕ' : 'b) By selling expensive fruits to the rich',
      isKannada ? 'c) ಕಾರ್ಖಾನೆಗಳಿಂದ ಕೃತ್ರಿಮ ಆಹಾರವನ್ನು ಬಳಸುವ ಮೂಲಕ' : 'c) By using artificial food from factories',
      isKannada ? 'd) ಉಚಿತ ಜಂಕ್ ಫುಡ್ ನೀಡುವ ಮೂಲಕ' : 'd) By giving away junk food for free',
    ],
    correctIndex: 0, // 'a' is the correct answer
  },
  {
    question: isKannada ? '9. ಹಸಿವನ್ನು ಕೊನೆಗೊಳಿಸಲು ಶಾಶ್ವತ ಕೃಷಿ ಏಕೆ ಮುಖ್ಯ?' : '9. Why is sustainable farming important in ending hunger?',
    options: [
      isKannada ? 'a) ಇದು ಕೃಷಿಕರಿಗೆ ಕಡಿಮೆ ಸಂಪತ್ತುಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಬೆಳೆಯನ್ನು ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ, ಕಸವನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ' : 'a) It helps farmers grow crops using fewer resources, reducing waste',
      isKannada ? 'b) ಇದು ಜನರಿಗೆ ಆರೋಗ್ಯಕರ ಆಹಾರವನ್ನು ವೇಗವಾಗಿ ಬೆಳೆಸಲು ಅನುಮತಿಸುತ್ತದೆ' : 'b) It allows people to grow unhealthy food quickly',
      isKannada ? 'c) ಇದು ಆಹಾರ ಬೆಳೆಯುವ ಅತ್ಯಂತ ದುಬಾರಿ ವಿಧಾನವಾಗಿದೆ' : 'c) It is the most expensive method to grow food',
      isKannada ? 'd) ಇದು ಬೆಳೆಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ' : 'd) It reduces the number of plants grown',
    ],
    correctIndex: 0, // 'a' is the correct answer
  },
  {
    question: isKannada ? '10. ಇದು ಹಸಿವನ್ನು ಕಡಿಮೆ ಮಾಡಲು ನೀವು ತೆಗೆದುಕೊಳ್ಳುವ ಎಷ್ಟು ಸೂಕ್ತ ಶ್ರೇಣಿಯ ಕ್ರಿಯೆ?' : '10. Which of the following is the best action to reduce hunger?',
    options: [
      isKannada ? 'a) ಆಹಾರವನ್ನು ತ್ಯಜಿಸುವುದು' : 'a) Wasting food',
      isKannada ? 'b) ನಿನ್ನೆ ಹಸಿವಾಗಿ ಇರುವೆಯೇನು?' : 'b) Asking if anyone is hungry yesterday?',
      isKannada ? 'c) ಏಕೆಂದರೆ ದಾರಿದ್ರ್ಯ ಹೆಚ್ಚು ಹಸಿವಿಗೆ ಕಾರಣವಾಗಿದೆ ಎಂದು ತಿಳಿಯಲು' : 'c) Understanding that poverty leads to more hunger',
      isKannada ? 'd) ಆಹಾರವನ್ನು ಕಳ್ಳತನ ಮಾಡುವುದು' : 'd) Stealing food',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
];

const handleOptionChange = (index, optionIndex) => {
  const newSelectedOptions = [...selectedOptions];
  newSelectedOptions[index] = optionIndex;
  setSelectedOptions(newSelectedOptions);
};

const calculateScore = () => {
  let score = 0;
  questions.forEach((question, index) => {
    if (selectedOptions[index] === question.correctIndex) {
      score += 1;
    }
  });
  return score;
};

const handleSubmit = () => {
  const score = calculateScore();
  setPoints(points + score);
  globalState.points += score; // Update global state directly
  setIsSubmitted(true);
  setFinalScore(score); // Store the score for display

  if (score === questions.length) {
    setShowCongrats(true);
    setTimeout(() => {
      setShowCongrats(false);
    }, 2000); // Adjust the delay as needed (2000 ms = 2 seconds)
  } else {
    setTimeout(() => {
      setShowCongrats(false);
    }, 2000);
  }
};

return (
  <div className="min-h-screen bg-gray-100 py-10">
    {isSubmitted ? (
      <>
        {showCongrats && (
          <div className="mt-2 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
            <p className="text-lg">
              {isKannada ? 'ಅಭಿನಂದನೆಗಳು!!! ನೀವು ಸಿಕ್ಕಿದ ಅಂಕಗಳು: ' : 'Congratulations!!! You have scored: '}
              {finalScore} {isKannada ? 'ಅಂಕಗಳು' : 'points'}
            </p>
          </div>
        )}
        {/* Full-screen ModulePath */}
        
          <ModulePath /> {/* Render ModulePath */}
       
      </>
    ) : (
      <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-md" style={{ backgroundColor: '#AC61DB' }}>
        <h2 className="text-2xl font-bold text-center mb-4 text-white">{isKannada ? 'ಪರೀಕ್ಷೆ 1' : 'Quiz 1'}</h2>
        {questions.map((question, index) => (
          <div key={index} className="mb-6 p-4 border-2 border-purple-300 rounded-lg bg-white">
            <h3 className="text-lg font-semibold mb-2 text-black">{question.question}</h3>
            <div className="space-y-2">
              {question.options.map((option, optionIndex) => (
                <label key={optionIndex} className="block p-2 border rounded-md hover:bg-purple-50 text-black">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={selectedOptions[index] === optionIndex}
                    onChange={() => handleOptionChange(index, optionIndex)}
                    className="mr-2 text-black"
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          disabled={isSubmitted}
          className={`mt-4 px-4 py-2 text-white font-semibold rounded-lg ${
            isSubmitted ? 'bg-gray-400' : 'bg-black hover:bg-gray'
          }`}
        >
          {isKannada ? 'ಸಲ್ಲಿಸು' : 'Submit'}
        </button>
      </div>
    )}
  </div>
);
};

export default Quiz1;