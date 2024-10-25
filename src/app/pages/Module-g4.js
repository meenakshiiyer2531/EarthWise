"use client"; // Add this directive

import { useState, useEffect } from 'react';
import { globalState } from '../globalState'; // Importing globalState
import ModulePath from './ModulePath';

const problems = [
  {
    problem: {
      kn: "ಒಂದು ಸಣ್ಣ ಹಳ್ಳಿಯಲ್ಲಿ, ಶಿಕ್ಷಕರು ಸಾಕಷ್ಟು ಇದ್ದಾರೆ, ಆದರೆ ತರಗತಿಗಳು ಹೆಚ್ಚು ಜನಸಂಖ್ಯೆ ಹೊಂದಿದ್ದು, ಪ್ರತಿ ತರಗತಿಯಲ್ಲಿ 60 ವಿದ್ಯಾರ್ಥಿಗಳು ಇದ್ದಾರೆ.",
      en: "In a small village, there are enough teachers, but the classes are overcrowded with 60 students in each class."
    },
    options: {
      A: {
        kn: "ತರಗತಿಗಳನ್ನು ಕಟ್ಟಲು ಮತ್ತು ಹೆಚ್ಚು ಶಿಕ್ಷಕರನ್ನು ನೇಮಿಸಲು, ಪ್ರತಿ ವಿದ್ಯಾರ್ಥಿಗೆ ಗಮನ ನೀಡಲು ತರಗತಿ ಗಾತ್ರವನ್ನು ಕಡಿಮೆ ಮಾಡಲು.",
        en: "To build more classrooms and hire more teachers to reduce class size for individual attention to each student."
      },
      B: {
        kn: "ಶಿಕ್ಷಕರು ಶ್ರೇಣಿಯಲ್ಲಿ ವಿದ್ಯಾರ್ಥಿಗಳು. ನನ್ನ ರೀತಿಯಲ್ಲಿ ಸೇರಲು ಕೋರಿಸಲು, ಆದರೆ ಪ್ರತಿ ಗುಂಪಿನ ಅಧ್ಯಯನ ಸಮಯವನ್ನು ಕಡಿಮೆ ಮಾಡಬೇಕು.",
        en: "To ask teachers to let students work in smaller groups in class but reduce the study time for each group."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ತರಗತಿಗಳನ್ನು ಕಟ್ಟುವುದು ಮತ್ತು ಶಿಕ್ಷಕರನ್ನು ನೇಮಿಸುವುದು ದೀರ್ಘಕಾಲಿಕ ಪರಿಹಾರವನ್ನು ಒದಗಿಸುತ್ತದೆ, ಆದರೆ ಶ್ರೇಣಿಯ ಶಿಫ್ಟ್ ಶಿಕ್ಷಣ ಸಮಯವನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು ಮತ್ತು ಪರಿಣಾಮಕಾರಿತ್ವವನ್ನು ಕಡಿಮೆ ಮಾಡಬಹುದು.",
      en: "Building classrooms and hiring more teachers provides a long-term solution, while shifting classes might reduce instructional time and effectiveness."
    },
  },
  {
    problem: {
      kn: "ಓದುಗರಿಗೆ ನವೀಕರಿಸಿದ ವಿಷಯ ಮತ್ತು ಸಂಪತ್ತುಗಳನ್ನು ಒದಗಿಸಲು ಸಂಘಟನೆಗಳೊಂದಿಗೆ ಸಹಯೋಗವನ್ನು ಅಭಿವೃದ್ಧಿ ಮಾಡುವುದು.",
      en: "Develop partnerships with organizations that can provide updated, relevant textbooks and materials for the students."
    },
    options: {
      A: {
        kn: "ಆಧುನಿಕ, ಸಂಬಂಧಿತ ಮಾಹಿತಿಯನ್ನು ಕಲಿಯಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ನವೀಕರಿಸಿದ ಪುಸ್ತಕಗಳು ಮತ್ತು ಸಂಪತ್ತುಗಳನ್ನು ಒದಗಿಸುವುದು.",
        en: "Providing updated materials ensures that students are learning current and relevant information."
      },
      B: {
        kn: "ಶಿಕ್ಷಕರು ತಮ್ಮದಲ್ಲಿರುವ ಮಾಹಿತಿಯನ್ನು ಆಧರಿಸಿ ತಮ್ಮದೇ ಆದ ವಸ್ತುಗಳನ್ನು ಸೃಷ್ಟಿಸುವುದು, ಅವರು ಇತ್ತೀಚಿನ ಮಾಹಿತಿಗೆ ಪ್ರವೇಶವಿಲ್ಲ.",
        en: "Have teachers create their own materials based on what they know, even though they may not have access to the latest information."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ನವೀಕರಿಸಿದ ಸಂಪತ್ತುಗಳು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಅತ್ಯಂತ ಮುಖ್ಯವಾದವು.",
      en: "Updated materials ensure that students are learning current and relevant information, which is essential for quality education."
    },
  },
  {
    problem: {
      kn: "ಊರದ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅತೀ ಹೆಚ್ಚು ಆಸಕ್ತಿ ಆದರೆ ಇಂಟರ್‌ನೆಟ್ ಪ್ರವೇಶವಿಲ್ಲ.",
      en: "A rural community has students who are eager to learn but lack internet access, making it difficult for them to access online educational resources."
    },
    options: {
      A: {
        kn: "ವಿದ್ಯಾರ್ಥಿಗಳು ತರಗತಿಯಲ್ಲಿ ಹೊಸ ವಿಷಯಗಳನ್ನು ಕಲಿಯಲು ಬಳಸಬಹುದಾದ ಕಂಪ್ಯೂಟರ್‌ಗಳ ಮೇಲೆ ಆಫ್‌ಲೈನ್ ಶೈಕ್ಷಣಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಅನ್ನು ಸ್ಥಾಪಿಸಲು.",
        en: "Install offline educational software on computers at the school, so students can still access learning materials without the internet."
      },
      B: {
        kn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಮ್ಮ ನಡುವಿನ ಪುಸ್ತಕಗಳನ್ನು ಮತ್ತು ನೋಟುಗಳನ್ನು ಹಂಚಿಕೊಳ್ಳುವಂತೆ ಪ್ರೇರೇಪಿಸಲು, ಆದರೆ ಯಾವುದೇ ತಂತ್ರಜ್ಞಾನದ ಪ್ರವೇಶವಿಲ್ಲ.",
        en: "Encourage students to share books and notes among themselves to continue learning, but without any access to technology."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ಆಫ್‌ಲೈನ್ ಶೈಕ್ಷಣಿಕ ಸಾಫ್ಟ್‌ವೇರ್ ಉತ್ತಮ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣಕ್ಕಾಗಿ ಆಧುನಿಕ ಶಿಕ್ಷಣ ಸಾಧನಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
      en: "Offline educational software provides access to valuable resources and modern learning tools, improving the quality of education."
    },
  },
  {
    problem: {
      kn: "ಆಶ್ರಯ ಶಿಬಿರದಲ್ಲಿ ವಿಭಿನ್ನ ಭಾಷೆಗಳಲ್ಲಿರುವ ಮಕ್ಕಳಿಗೆ ಕಲಿಸಲು ಕಷ್ಟವಾಗಿದೆ.",
      en: "In a refugee camp, there are many children from different backgrounds who speak different languages. They are struggling to understand the lessons."
    },
    options: {
      A: {
        kn: "ಬೇರೆಯವರಿಗೆ ಹೆಚ್ಚು ಭಾಷೆಗಳಲ್ಲಿ ಕಲಿಸಲು ಅಥವಾ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಹೆಚ್ಚು ಅರ್ಥಮಾಡಿಕೊಳ್ಳುವಂತೆ ಮಾಡಲು ಭಾಷಾಂತರ ಸೇವೆಗಳನ್ನು ಒದಗಿಸಲು ಶಿಕ್ಷಕರನ್ನು ನೇಮಿಸಲು.",
        en: "Hire teachers who can teach in multiple languages or offer translation services to help the students learn more effectively."
      },
      B: {
        kn: "ಶಿಕ್ಷಣವನ್ನು ಅರ್ಥಮಾಡಿಕೊಳ್ಳಲು ಮೊದಲಿಗೆ ಶಿಬಿರದ ಮುಖ್ಯ ಭಾಷೆಯನ್ನು ಕಲಿಯಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕೇಳಿರಿ.",
        en: "Ask the students to learn the primary language of the camp on their own before attending school, so they can understand the lessons."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ಬಹುಭಾಷಾ ಶಿಕ್ಷಣ ಅಥವಾ ಭಾಷಾಂತರ ಸೇವೆಗಳು ಎಲ್ಲಾ ವಿದ್ಯಾರ್ಥಿಗಳು ಕಲಿಯಲು ಸಹಾಯವಾಗುತ್ತವೆ.",
      en: "Providing multilingual education or translation services ensures all students can learn, no matter their background."
    },
  },
  {
    problem: {
      kn: "ದಕ್ಷಿಣವನ್ನು ಒದಗಿಸುವ ನಗರ ಶಾಲೆಯಲ್ಲಿ ಸಾಕಷ್ಟು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಅವರು ತಮ್ಮ ವೈಜ್ಞಾನಿಕ ವಿಷಯಗಳನ್ನು ಅಧ್ಯಯನ ಮಾಡಲಾಗದು.",
      en: "A city school has access to excellent teachers and resources, but some students with learning disabilities are struggling to keep up with the standard curriculum."
    },
    options: {
      A: {
        kn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆದರ್ಶ ಶ್ರೇಣಿಯಲ್ಲಿ ಗಮನ ನೀಡುವ ವಿಶೇಷ ಶ್ರೇಣಿಯೊಂದಿಗೆ ಸಹಾಯ ಮಾಡಲು ವಿಶೇಷ ಶ್ರೇಣಿಯು ಅಭಿವೃದ್ಧಿ ಮಾಡುವುದು.",
        en: "Develop specialized learning programs and provide additional support for students with disabilities, ensuring they receive the help they need."
      },
      B: {
        kn: "ಶ್ರೇಣಿಯಲ್ಲಿಯೇ ಹಾರ್ಡುಲುಗಳು, ಆದರೆ ಸಂಪತ್ತುಗಳನ್ನು ಒದಗಿಸುವುದು ತಪ್ಪಾಗಿದೆ.",
        en: "Encourage the struggling students to try harder to keep up with the standard curriculum without providing specialized resources."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ಸಾಮಾನ್ಯ ತರಗತಿ ಪರಿಸರದಲ್ಲಿ ವಿಶೇಷವಾಗಿ ಶ್ರೇಣಿಯು ಮತ್ತು ಬೆಂಬಲವು ಬಹಳ ಮುಖ್ಯವಾಗಿದೆ.",
      en: "Specialized programs and support are essential to ensure that all students, including those with disabilities, can receive a quality education."
    },
  },
  {
    problem: {
      kn: "ದಕ್ಷಿಣದ ಶಾಲೆಯಲ್ಲಿಯೇ ತಂತ್ರಜ್ಞಾನದ ವಿದ್ಯಾರ್ಥಿಗಳು ತಮ್ಮ ವಿಷಯವನ್ನು ಕಲಿಯಲು ಮುಂಚುವಾಗೆ.",
      en: "A small school doesn’t have enough science equipment, and students are unable to do practical experiments in subjects like chemistry and physics."
    },
    options: {
      A: {
        kn: "ಸಂವಹನದಿಂದ ಉತ್ತೀರ್ಣ ಮಾಡುವ ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಲ್ಯಾಬ್‌ನಲ್ಲಿ ಸಹಾಯ ಮಾಡಲು ಹೊಸ ಸಂಬಂಧವನ್ನು ಹೊಂದಿಸಿ.",
        en: "Set up a partnership with a nearby school that has science equipment, allowing students to visit and use their lab for practical lessons."
      },
      B: {
        kn: "ಶಿಕ್ಷಕರು ಶ್ರೇಣಿಯ ಅಧ್ಯಯನವನ್ನು ಗುರುತಿಸಲು ಮಾತ್ರಾ ಹೇಳಲು ಕೇಳುತ್ತಾರೆ.",
        en: "Ask the teachers to explain the experiments in theory without conducting any practical experiments, focusing only on textbook knowledge."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ಉತ್ಪನ್ನ ಶಿಕ್ಷಣವು ತುಂಬಾ ಮುಖ್ಯವಾಗಿದೆ.",
      en: "Practical science education is crucial, and sharing resources with another school ensures students get hands-on experience."
    },
  },
  {
    problem: {
      kn: "ಅಡಿಕೆ ದೆಸೆ ಮತ್ತು ತಂತ್ರಜ್ಞಾನವನ್ನು ಬಳಸಲು ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕಷ್ಟವಾಗಿದೆ.",
      en: "A school in a developing country lacks electricity, and students can’t study after dark or use any technology during the day."
    },
    options: {
      A: {
        kn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ತಂತ್ರಜ್ಞಾನದ ಸೇವೆಯನ್ನು ನೀಡಲು ವಿದ್ಯುತ್ ಪಾನಲ್‌ಗಳನ್ನು ಹೊಂದಿಸಲು.",
        en: "Install solar panels to provide a reliable source of electricity, allowing students to use technology and study after dark."
      },
      B: {
        kn: "ನಿಜವಾದ ವಿದ್ಯುತ್ ಇಲ್ಲದಿದ್ದರೂ, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಬೆಳಕು ಮತ್ತು ಮೇಜುಗಳನ್ನು ನೀಡಲು ಕೇಳಿ.",
        en: "Give students flashlights and candles so they can study at night, but continue without electricity during the day."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ವಿದ್ಯುತ್ ಶ್ರೇಣಿಯನ್ನು ನೀಡುವುದು ಉತ್ತಮ ಕಲಿಕೆಯನ್ನು ಕಲಿಯಲು ಸಾಧ್ಯವಿಲ್ಲ.",
      en: "Solar panels provide a long-term solution, enabling students to access electricity and technology for a better learning experience."
    },
  },
  {
    problem: {
      kn: "ಕೋವಿಡ್-19 ಬಳಿಕ ಕಾಲೇಜುಗಳು ಉತ್ತಮ ಸ್ವಾಯತ್ತತೆಗಾಗಿ ಸಿದ್ಧಪಡಿಸಲು ಮತ್ತು ಶ್ರೇಣಿಯಲ್ಲಿಯೇ ಬದಲಾವಣೆ.",
      en: "After the COVID-19 pandemic, schools need to prepare for better hygiene and change the way lessons are conducted in the classroom."
    },
    options: {
      A: {
        kn: "ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಆತ್ಮಾಭಿಮಾನದಲ್ಲಿ ಮೀಸಲು ಹೋಡಲು, ಆದರೆ ಮನಸ್ಸನ್ನು ಹಾಕಲು ಹೊಸ ಆಯ್ಕೆಯನ್ನು ನೀಡುವುದು.",
        en: "Implement new policies that require students to wash their hands before entering the classroom but still allow them to socialize freely."
      },
      B: {
        kn: "ಶ್ರೇಣಿಯಲ್ಲಿಯೇ ಸ್ವಾಯತ್ತತೆಗೆ ಸ್ವಾಧೀನ ಮಾಡಲು ಮಕ್ಕಳು ಪರಸ್ಪರ ಮೀಸಲು ಮಾಡಲು ಶ್ರೇಣಿಗೆ ಏನಾದರೂ ಪರಿಹಾರವನ್ನು ಒದಗಿಸಲು.",
        en: "Provide solutions to ensure students are safely distanced from each other during lessons while still being able to interact."
      },
    },
    correct: 'B',
    explanation: {
      kn: "ಆರೋಗ್ಯ ಮತ್ತು ಆರೋಗ್ಯವಾಗಿರಲು ದೂರದಲ್ಲಿರುವ ಶಿಕ್ಷಣವು ಉತ್ತಮ ಕಲಿಕೆಗೆ ನಿರ್ಧಾರ ಮಾಡುತ್ತದೆ.",
      en: "Ensuring safe distance while promoting interaction is essential for a healthy learning environment."
    },
  },
  {
    problem: {
      kn: "ಅತ್ಯುತ್ತಮ ಸಾಮರ್ಥ್ಯವನ್ನು ಮತ್ತು ತರಗತಿಗಳನ್ನು ನಿಯಂತ್ರಣ ಮಾಡುವುದು ತಪ್ಪಾಗಿದೆ.",
      en: "Lack of parental involvement in education affects students' motivation and overall performance in school."
    },
    options: {
      A: {
        kn: "ಹೆಚ್ಚಿನ ಸಂಖ್ಯೆಯ ಶಿಕ್ಷಣವನ್ನು ತಿಳಿಸಲು, ಪಾಲಕರು ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣವನ್ನು ಒದಗಿಸಲು ಉತ್ತಮ ಅವಕಾಶವನ್ನು ಕೊಟ್ಟಿದ್ದಾರೆ.",
        en: "Encourage parents to be more involved in their children's education, creating opportunities for better communication and support."
      },
      B: {
        kn: "ಪಾಲಕರಿಗೆ ಪ್ರಾಥಮಿಕವಾಗಿ ಶ್ರೇಣಿಯ ನಿಯಮವನ್ನು ತಿಳಿಸಲು ಕೇಳಬಹುದು.",
        en: "Make it mandatory for parents to attend school meetings to learn about classroom rules and policies."
      },
    },
    correct: 'A',
    explanation: {
      kn: "ಪಾಲಕರ ಪಾಲ್ಗೊಳ್ಳುವುದು ಮಕ್ಕಳ ಶಿಕ್ಷಣದ ಗುಣಮಟ್ಟವನ್ನು ಸುಧಾರಿಸುತ್ತದೆ.",
      en: "Parental involvement improves the quality of education and enhances student motivation."
    },
  },
];

export default function Home() {
  const [selectedProblemIndex, setSelectedProblemIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [language, setLanguage] = useState('kn'); // Default language set to 'kn'
  const [showModulePath, setShowModulePath] = useState(false);
  // Set language from globalState
  useEffect(() => {
    if (globalState.language) {
      setLanguage(globalState.language);
    }
  }, []);

  const handleSelect = (option) => {
    setSelectedOption(option);
    const currentProblem = problems[selectedProblemIndex];
    if (option === currentProblem.correct) {
      setFeedback(language === 'kn' ? 'ಸರಿಯಾಗಿದೆ! ' + currentProblem.explanation.kn : 'Correct! ' + currentProblem.explanation.en);
    } else {
      setFeedback(language === 'kn' ? 'ತಪ್ಪಾಗಿದೆ. ' + currentProblem.explanation.kn : 'Incorrect. ' + currentProblem.explanation.en);
    }
  };
  const handleShowModulePath = () => {
    setShowModulePath(true);
  };


  const handleNextProblem = () => {
    const nextIndex = selectedProblemIndex + 1;
    if (nextIndex < problems.length) {
      setSelectedProblemIndex(nextIndex);
      setSelectedOption(null);
      setFeedback('');
    } else {
      setIsQuizComplete(true);
    }
  };

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-20">
      <div className="max-w-md mx-auto p-4 bg-white rounded shadow">
        <h1 className="text-xl text-black font-bold mb-4">{language === 'kn' ? 'ಶಿಕ್ಷಣ ಗುಣಮಟ್ಟದ ಆಟ' : 'Quality Education Quiz'}</h1>
        {!isQuizComplete ? (
          <div className="mb-6">
            <h2 className="text-lg text-black font-semibold">{problems[selectedProblemIndex].problem[language]}</h2>
            <div className="mt-4">
              <button
                onClick={() => handleSelect('A')}
                className="w-full p-2 mb-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {problems[selectedProblemIndex].options.A[language]}
              </button>
              <button
                onClick={() => handleSelect('B')}
                className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                {problems[selectedProblemIndex].options.B[language]}
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-4">
            <h2 className="text-lg text-black font-semibold">{language === 'kn' ? 'ಕ್ವಿಜ್ ಸಂಪೂರ್ಣವಾಗಿದೆ!' : 'Quiz Completed!'}</h2>
            <button
              onClick={handleShowModulePath}
              className="mt-4 w-full p-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              {language === 'kn' ? 'ನಿರ್ಗಮನ' : 'Exit'}
            </button>
          </div>
        )}
        {selectedOption && !isQuizComplete && (
          <div className="mt-4">
            <p className="text-lg text-black ">{feedback}</p>
            <button
              onClick={handleNextProblem}
              className="mt-4 w-full p-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              {language === 'kn' ? 'ಮುಂದಿನ ಪ್ರಶ್ನೆ' : 'Next Question'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
