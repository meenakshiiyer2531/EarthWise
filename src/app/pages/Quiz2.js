import { globalState } from '../globalState'; // Import the global state
import { useState } from 'react';
import ModulePath from './ModulePath';

const Quiz2 = () => {
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
      question: isKannada ? '1. ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿಯ ಗುರಿ 3 ನ ಪ್ರಮುಖ ಉದ್ದೇಶವೇನು?' : '1. What is the primary goal of Sustainable Development Goal 3?',
      options: [
        isKannada ? 'a) ಎಲ್ಲ ವಯಸ್ಸಿನವರು ಆರೋಗ್ಯಕರ ಜೀವನವನ್ನು ಖಾತ್ರಿ ಪಡಿಸುವುದು' : 'a) Ensure healthy lives and promote well-being for all at all ages',
        isKannada ? 'b) ಲಿಂಗ ಸಮಾನತೆ ಸಾಧಿಸುವುದು ಮತ್ತು ಎಲ್ಲಾ ಮಹಿಳೆಯರನ್ನು ಮತ್ತು ಹುಡುಗಿಯರನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿ ಮಾಡುವುದು' : 'b) Achieve gender equality and empower all women and girls',
        isKannada ? 'c) ಸಮಾನ ಮತ್ತು ನ್ಯಾಯವಾದ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಖಾತ್ರಿ ಪಡಿಸುವುದು' : 'c) Ensure inclusive and equitable quality education',
        isKannada ? 'd) ದೀರ್ಘಕಾಲಿಕ, ಸಮಾನಾನುಪಾತ ಶ್ರೇಣಿಯ ಆರ್ಥಿಕ ಅಭಿವೃದ್ಧಿಯನ್ನು ಉತ್ತೇಜಿಸುವುದು' : 'd) Promote sustained, inclusive economic growth',
      ],
      correctIndex: 0, // 'a' is the correct answer
    },
    {
      question: isKannada ? '2. ಕೆಳಗಿನದಲ್ಲೇ ಯಾವುದು ಮುಖ್ಯ ಆರೋಗ್ಯ ಹಾನಿ ತತ್ವ?' : '2. Which of the following is a major health risk factor?',
      options: [
        isKannada ? 'a) ಶುಚಿಯಾದ ನೀರಿನ ಪ್ರವೇಶ' : 'a) Access to clean water',
        isKannada ? 'b) ನಿರ್ಗತಿಕ ಆಹಾರ' : 'b) Poor nutrition',
        isKannada ? 'c) ಶಿಕ್ಷಣಕ್ಕೆ ಪ್ರವೇಶ' : 'c) Access to education',
        isKannada ? 'd) ಸಮುದಾಯದ ಭಾಗವಹಿಸುವಿಕೆ' : 'd) Community engagement',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: isKannada ? '3. ವಿಶ್ವದ ಜನಸಂಖ್ಯೆಯ ಎಷ್ಟು ಪ್ರತಿಶತ ಮೂಲ ಭೂತ ಶುದ್ಧಿಕರಣದ ಕೊರತೆಯಲ್ಲಿ ಇದ್ದಾರೆ?' : '3. What percentage of the world’s population is still lacking basic sanitation?',
      options: [
        isKannada ? 'a) 2%' : 'a) 2%',
        isKannada ? 'b) 15%' : 'b) 15%',
        isKannada ? 'c) 27%' : 'c) 27%',
        isKannada ? 'd) 50%' : 'd) 50%',
      ],
      correctIndex: 2, // 'c' is the correct answer
    },
    {
      question: isKannada ? '4. ಕೆಳಗಿನ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳಲ್ಲಿ ಯಾವುದು ನಿರೋಧಕವಾಕ್ಸಿನ್ ಮೂಲಕ ತಡೆಯಬಹುದು?' : '4. Which of the following diseases can be prevented through vaccination?',
      options: [
        isKannada ? 'a) ಮಾಲೇರಿಯಾ' : 'a) Malaria',
        isKannada ? 'b) ತಬಕ್ಕು' : 'b) Tuberculosis',
        isKannada ? 'c) HIV/AIDS' : 'c) HIV/AIDS',
        isKannada ? 'd) ಇನ್ಫ್ಲುಎಂಜಾ' : 'd) Influenza',
      ],
      correctIndex: 3, // 'd' is the correct answer
    },
    {
      question: isKannada ? '5. ಮಕ್ಕಳ ಸಾವಿಗೆ ಕಾರಣವಾಗುವ ಪ್ರಮುಖ ಕಾರಣ ಏನು?' : '5. What is one of the main causes of maternal mortality?',
      options: [
        isKannada ? 'a) ಪೋಷಕಾಂಶವಾಹಕ ಆಹಾರದ ಪ್ರವೇಶ' : 'a) Access to nutritious food',
        isKannada ? 'b) ಆರೋಗ್ಯ ಸೇವೆಗಳ ಕೊರತೆಯು' : 'b) Lack of healthcare access',
        isKannada ? 'c) ಹೆಚ್ಚಿನ ಶಿಕ್ಷಣ ಮಟ್ಟ' : 'c) High education levels',
        isKannada ? 'd) ಶುದ್ಧ ಕುಡಿಯುವ ನೀರು' : 'd) Clean drinking water',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: isKannada ? '6. SDG 4 ಯಾವದನ್ನು ಗಮನಿಸುತ್ತಿದೆ?' : '6. What is SDG 4 focused on?',
      options: [
        isKannada ? 'a) ಆರೋಗ್ಯಕರ ಜೀವನವನ್ನು ಖಾತ್ರಿ ಪಡಿಸುವುದು' : 'a) Ensuring healthy lives',
        isKannada ? 'b) ಶಾಂತ ಮತ್ತು ಸಮಾವೇಶದ ಸಮಾಜಗಳನ್ನು ಉತ್ತೇಜಿಸುವುದು' : 'b) Promoting peaceful and inclusive societies',
        isKannada ? 'c) ಸಮಾನ ಮತ್ತು ನ್ಯಾಯವಾದ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವನ್ನು ಖಾತ್ರಿ ಪಡಿಸುವುದು' : 'c) Ensuring inclusive and equitable quality education',
        isKannada ? 'd) ಅಸಮಾನತೆಗಳನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು' : 'd) Reducing inequalities',
      ],
      correctIndex: 2, // 'c' is the correct answer
    },
    {
      question: isKannada ? '7. ಮಕ್ಕಳ ಸಾವಿಗೆ ಯಾವ ತತ್ವ ಪ್ರಮುಖ ಕಾರಣ?' : '7. Which factor significantly contributes to child mortality?',
      options: [
        isKannada ? 'a) ನಿರೋಧಕವಾಕ್ಸಿನ್ ದರಗಳು' : 'a) Vaccination rates',
        isKannada ? 'b) ಪೋಷಣೆ' : 'b) Nutrition',
        isKannada ? 'c) ಶುದ್ಧ ನೀರಿನ ಪ್ರವೇಶ' : 'c) Access to clean water',
        isKannada ? 'd) ಎಲ್ಲಾ ಉತ್ತರಗಳು' : 'd) All of the above',
      ],
      correctIndex: 3, // 'd' is the correct answer
    },
    {
      question: isKannada ? '8. ಮಾನಸಿಕ ಆರೋಗ್ಯ ಸಮಸ್ಯೆಗಳನ್ನು ಹೇಗೆ ಪರಿಹರಿಸಬಹುದು?' : '8. How can mental health issues be addressed?',
      options: [
        isKannada ? 'a) ಅವುಗಳನ್ನು ನಿರ್ಲಕ್ಷಿಸುವುದರಿಂದ' : 'a) By ignoring them',
        isKannada ? 'b) ಸಾಮಾಜಿಕ ಬೆಂಬಲ ಮತ್ತು ಥೆರಪಿ ಮೂಲಕ' : 'b) Through social support and therapy',
        isKannada ? 'c) ಮಾತ್ರ ಮೆಡಿಕೇಶನ್ ಮಂಜೂರು ಮಾಡುವ ಮೂಲಕ' : 'c) By prescribing medication only',
        isKannada ? 'd) ವ್ಯಕ್ತಿಗಳನ್ನು ಪ್ರತ್ಯೇಕಿಸುವ ಮೂಲಕ' : 'd) By isolating individuals',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: isKannada ? '9. ಆಂತರಿಕ ಆರೋಗ್ಯ ಆವರಣವು ಏನನ್ನು ಒದಗಿಸಲು ಉದ್ದೇಶಿತವಾಗಿದೆ?' : '9. What does universal health coverage aim to provide?',
      options: [
        isKannada ? 'a) ಕೇವಲ ಉಚಿತ ವೈದ್ಯಕೀಯ ಸೇವೆಗಳನ್ನು' : 'a) Only free medical services',
        isKannada ? 'b) ಹಣಕಾಸಿನ ತೊಂದರೆ ಇಲ್ಲದೇ ಆರೋಗ್ಯ ಸೇವೆಗಳಿಗೆ ಪ್ರವೇಶ' : 'b) Access to necessary health services without financial hardship',
        isKannada ? 'c) ಶ್ರೀಮಂತರಿಗೆ ಮಾತ್ರ ಆರೋಗ್ಯ ಸೇವೆಗಳು' : 'c) Health services for only the wealthy',
        isKannada ? 'd) ಎಲ್ಲರಿಗೂ ನಿರ 제한ಿತ ಆರೋಗ್ಯ ಸೇವೆ' : 'd) Limited healthcare for everyone',
      ],
      correctIndex: 1, // 'b' is the correct answer
    },
    {
      question: isKannada ? '10. ಉತ್ತಮ ಪೋಷಣೆಯ ಒಂದು ಅಂಶ ಯಾವುದು ಅಲ್ಲ?' : '10. Which of the following is NOT a component of good nutrition?',
      options: [
        isKannada ? 'a) ವಿವಿಧ ಆಹಾರಗಳು' : 'a) Variety of foods',
        isKannada ? 'b) ಪೋಷಕಾಂಶಗಳ ಸಮತೋಲನ' : 'b) Balance of nutrients',
        isKannada ? 'c) ಹೆಚ್ಚಿನ ಸಕ್ಕರೆ ಸೇವನೆ' : 'c) High sugar intake',
        isKannada ? 'd) ಸಮರ್ಪಕ ಕ್ಯಾಲೋರಿಯ ಸೇವನೆ' : 'd) Adequate caloric intake',
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
    setFinalScore(score);

    if (score === questions.length) {
      setShowCongrats(true);
      setTimeout(() => {
        setShowCongrats(false);
      }, 2000); // Adjust delay as needed
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
          <ModulePath /> {/* Render ModulePath */}
        </>
      ) : (
        <div className="max-w-6xl mx-auto p-8 rounded-lg shadow-md" style={{ backgroundColor: '#AC61DB' }}>
          <h2 className="text-2xl font-bold text-center mb-4 text-white">{isKannada ? 'ಪರೀಕ್ಷೆ 2' : 'Quiz 2'}</h2>
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
                      className="mr-2"
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

export default Quiz2;