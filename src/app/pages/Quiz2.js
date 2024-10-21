import { globalState } from '../globalState'; // Import the global state
import { useState } from 'react';
import ModulePath from './ModulePath';

const Quiz2 = () => {
  const [points, setPoints] = useState(globalState.points);
  const [selectedOptions, setSelectedOptions] = useState(Array(10).fill(null)); // Track selected options for each question
  const [isSubmitted, setIsSubmitted] = useState(false); // Track if the quiz has been submitted
  const [showCongrats, setShowCongrats] = useState(false); // State to control congrats popup

  // Array of questions, options, and the correct answer index
  const questions = [
    {
      question: '1. What is the primary goal of Sustainable Development Goal 3?',
      options: [
        'a) Ensure healthy lives and promote well-being for all at all ages',
        'b) Achieve gender equality and empower all women and girls',
        'c) Ensure inclusive and equitable quality education',
        'd) Promote sustained, inclusive economic growth',
      ],
      correctIndex: 0, // 'a' is the correct answer
    },
    {
      question: '2. Which of the following is a major health risk factor?',
      options: [
        'a) Access to clean water',
        'b) Poor nutrition',
        'c) Access to education',
        'd) Community engagement',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: '3. What percentage of the world’s population is still lacking basic sanitation?',
      options: [
        'a) 2%',
        'b) 15%',
        'c) 27%',
        'd) 50%',
      ],
      correctIndex: 2, // 'c' is the correct answer
    },
    {
      question: '4. Which of the following diseases can be prevented through vaccination?',
      options: [
        'a) Malaria',
        'b) Tuberculosis',
        'c) HIV/AIDS',
        'd) Influenza',
      ],
      correctIndex: 3, // 'd' is the correct answer
    },
    {
      question: '5. What is one of the main causes of maternal mortality?',
      options: [
        'a) Access to nutritious food',
        'b) Lack of healthcare access',
        'c) High education levels',
        'd) Clean drinking water',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: '6. What is SDG 4 focused on?',
      options: [
        'a) Ensuring healthy lives',
        'b) Promoting peaceful and inclusive societies',
        'c) Ensuring inclusive and equitable quality education',
        'd) Reducing inequalities',
      ],
      correctIndex: 2, // 'c' is the correct answer
    },
    {
      question: '7. Which factor significantly contributes to child mortality?',
      options: [
        'a) Vaccination rates',
        'b) Nutrition',
        'c) Access to clean water',
        'd) All of the above',
      ],
      correctIndex: 3, // 'd' is the correct answer
    },
    {
      question: '8. How can mental health issues be addressed?',
      options: [
        'a) By ignoring them',
        'b) Through social support and therapy',
        'c) By prescribing medication only',
        'd) By isolating individuals',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: '9. What does universal health coverage aim to provide?',
      options: [
        'a) Only free medical services',
        'b) Access to necessary health services without financial hardship',
        'c) Health services for only the wealthy',
        'd) Limited healthcare for everyone',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: '10. Which of the following is NOT a component of good nutrition?',
      options: [
        'a) Variety of foods',
        'b) Balance of nutrients',
        'c) High sugar intake',
        'd) Adequate caloric intake',
      ],
      correctIndex: 2, // 'c' is the correct answer
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

export default Quiz2;
