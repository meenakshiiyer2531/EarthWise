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
    question: '1. What does SDG 1 aim to achieve?',
    options: [
      'a) Reduce Pollution',
      'b) Provide affordable housing',
      'c) Eradicate poverty in all forms',
      'd) Create more jobs',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: "2. Why is poverty a cycle that's hard to escape?",
    options: [
      'a) Because people like living in poverty',
      'b) It limits access to education, jobs, and opportunities',
      'c) It only affects a few people',
      'd) It is a natural part of life',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: '3. Which of the following is an example of an organization helping to reduce poverty?',
    options: [
      'a) A luxury goods store',
      'b) A company selling expensive cars',
      'c) A local charity offering free tutoring and job training',
      'd) A store giving discounts on non-essential items',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: '4. How can education help in reducing poverty?',
    options: [
      'a) By helping people buy luxury items',
      'b) By helping people earn more money and find better jobs',
      'c) By giving people free meals',
      'd) By keeping people busy all day',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: '5. Which of the following is a real-life action you can take to help reduce poverty?',
    options: [
      'a) Buy a new smartphone',
      'b) Start your own tech company',
      'c) Organize a food and clothing donation drive for families in need',
      'd) Do nothing because poverty is not your concern',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: '6. What does SDG 2 focus on?',
    options: [
      'a) Providing free clothes to everyone',
      'b) Ending hunger and ensuring everyone has enough nutritious food',
      'c) Giving people luxury homes',
      'd) Promoting entertainment services',
    ],
    correctIndex: 1, // 'b' is the correct answer
  },
  {
    question: '7. Which of the following is NOT a cause of hunger?',
    options: [
      'a) Climate change',
      'b) Poor agricultural practices',
      'c) Having too many vegetables in the garden',
      'd) Poverty',
    ],
    correctIndex: 2, // 'c' is the correct answer
  },
  {
    question: '8. How can a community garden help fight hunger?',
    options: [
      'a) By growing vegetables that everyone can share',
      'b) By selling expensive fruits to the rich',
      'c) By using artificial food from factories',
      'd) By giving away junk food for free',
    ],
    correctIndex: 0, // 'a' is the correct answer
  },
  {
    question: '9. Why is sustainable farming important in ending hunger?',
    options: [
      'a) It helps farmers grow crops using fewer resources, reducing waste',
      'b) It allows people to grow unhealthy food quickly',
      'c) It is the most expensive method to grow food',
      'd) It reduces the number of plants grown',
    ],
    correctIndex: 0, // 'a' is the correct answer
  },
  {
    question: '10. Which of the following is the best action to reduce hunger?',
    options: [
      'a) Wasting food',
      'b) Asking if anyone is hungry yesterday?',
      'c) Understanding that poverty leads to more hunger',
      'd) Stealing food',
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
              Congratulations!!! You have scored: {finalScore} points
            </p>
          </div>
        )}
        {/* Full-screen ModulePath */}
        
          <ModulePath /> {/* Render ModulePath */}
       
      </>
    ) : (
      <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-md" style={{ backgroundColor: '#AC61DB' }}>
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Quiz 1</h2>
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
          Submit
        </button>
      </div>
    )}
  </div>
);
};

export default Quiz1;
