import { globalState } from '../globalState'; // Import the global state
import { useState } from 'react';
import ModulePath from './ModulePath';

const Quiz1 = () => {
  const [points, setPoints] = useState(globalState.points);
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(null)); // Track selected options for each question
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz has been submitted
  const [showCongrats, setShowCongrats] = useState(false); // State to control congrats popup


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
      question: '10. What is one real-life action you can take to help reduce hunger?',
      options: [
        'a) Waste food by throwing it away',
        'b) Learn how to grow your own food or participate in a community garden',
        'c) Buy food only for yourself and never share',
        'd) Avoid thinking about hunger because it’s not a problem',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
  ];

  // Function to handle answer selection
  const handleAnswerClick = (questionIndex, optionIndex) => {
    if (!isSubmitted) { // Prevent changes after submission
      const updatedSelectedOptions = [...selectedOptions];
      updatedSelectedOptions[questionIndex] = optionIndex;
      setSelectedOptions(updatedSelectedOptions);
    }
  };

  // Function to handle the submission of the quiz
  const handleSubmit = () => {
    let score = 0;
    selectedOptions.forEach((selected, index) => {
      if (selected === questions[index].correctIndex) {
        score++;
      }
    });
    globalState.points += score; // Update the global points
    setPoints(globalState.points); // Update local state with new points
    setIsSubmitted(true); // Mark the quiz as submitted
    setShowCongrats(true); // Show congrats message
  };

  // Function to handle closing the congrats popup and resetting the quiz state
  const handleCongratsClose = () => {
    setShowCongrats(false); // Close the congrats popup
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Check if the quiz is submitted */}
      {isSubmitted ? (
        <div>
          {/* Show ModulePath Component after submission */}
          <ModulePath />
          {showCongrats && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <h2 style={{ color: '#FFD700' }} className="text-3xl font-bold">Congratulations!</h2>

                <p className="mt-4 text-xl text-black">You have completed the quiz. Your final score is {points}.</p>
                <button
                  className="mt-6 bg-green-600 text-white p-2 rounded-lg hover:bg-green-800"
                  onClick={handleCongratsClose}
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Heading Section */}
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-black">Test Your Knowledge, Win Points!</h1>
            <p className="text-xl text-gray-700 mt-4">Your Score: {points}</p>
          </div>

          {/* Quiz Section */}
          <div className="bg-white max-w-3xl mx-auto p-8 rounded-lg shadow-md">
            {questions.map((q, questionIndex) => (
              <div key={questionIndex} className="mb-6">
                <h2 className="text-2xl font-bold text-black mb-4">{q.question}</h2>
                <div className="grid grid-cols-2 gap-4">
                  {q.options.map((option, optionIndex) => (
                    <button
                      key={optionIndex}
                      className={`p-4 rounded-lg font-semibold text-lg ${
                        selectedOptions[questionIndex] === optionIndex
                          ? 'bg-black text-white' // Highlight selected option
                          : 'bg-purple-600 text-white hover:bg-purple-800'
                      }`}
                      onClick={() => handleAnswerClick(questionIndex, optionIndex)}
                      disabled={isSubmitted} // Disable buttons after submission
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}

            {/* Submit Button */}
            {!isSubmitted && (
              <div className="text-center mt-10">
                <button
                  className="bg-green-600 text-white p-4 rounded-lg font-bold text-lg hover:bg-green-800"
                  onClick={handleSubmit}
                >
                  Submit Quiz
                </button>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Quiz1;