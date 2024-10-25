import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g2';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module2 = () => {
  const [showModulePath, setShowModulePath] = useState(false); // State to control rendering of ModulePath
  const [voices, setVoices] = useState([]); // State to hold available voices

  // Load voices
  const loadVoices = () => {
    const availableVoices = window.speechSynthesis.getVoices();
    setVoices(availableVoices);
  };

  useEffect(() => {
    loadVoices(); // Load voices initially
    window.speechSynthesis.onvoiceschanged = loadVoices; // Reload voices when available
  }, []);

  // Function to handle showing the ModulePath
  const handleShowModulePath = () => {
    setShowModulePath(true);
  };

  // Function to handle Text-to-Speech
  const handleTextToSpeech = () => {
    const text = globalState.language === 'kn' ? `
      MODULE 2: ಹಸಿವು ಇಲ್ಲ
      Q: 50 ವರ್ಷಗಳ ನಂತರ ವಿಶ್ವದಲ್ಲಿ ಹಸಿವು ಇರುತ್ತದೆಯೇ? ಇದು ಇಂದಿನ ಬೆಳವಣಿಗೆಗೆ ಆಧಾರಿತ ಪ್ರಶ್ನೆಯಾಗಿದೆ!
      A: ಹಸಿವು ಸಂಪೂರ್ಣವಾಗಿ ನಿಲ್ಲಿಸಬಹುದು ಆದರೆ ನಾವು ನಮ್ಮ ಆಹಾರ ಸಂಪತ್ತನ್ನು ಮತ್ತು ಉತ್ಪಾದನೆಯ ಕಾರ್ಯತಂತ್ರಗಳನ್ನು ಸುಧಾರಿಸಬೇಕು.
      ಇದು ಏನು: ಹಸಿವು ಎಂದರೆ ತಿನ್ನಲು ಸಾಕಷ್ಟು ಆಹಾರವಿಲ್ಲ. ಜನರಿಗೆ ಅಗತ್ಯವಾದ ಆಹಾರವಿಲ್ಲದಿದ್ದರೆ ಅವರ ಆರೋಗ್ಯದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ. SDG 2 ಗುರಿಯು ಹಸಿವು ಮುಗಿಸಲು ಮತ್ತು ನೂತನ ಆಹಾರ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
      ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ: ಆಹಾರದ ಪ್ರಮಾಣದ ಬದಲಾವಣೆ. ಹಸಿವಿನಿಂದ ಬಳಲುವವರು ಮತ್ತು ಹೆಚ್ಚು ಆಹಾರವನ್ನು ಕಳೆಯುವವರ ನಡುವೆ ವ್ಯತ್ಯಾಸ.
      ಉದಾಹರಣೆ: ಬಾಡಿಕೊಂಡ ಆಹಾರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಹೇಗೆ ಹಸಿವು ಪರಿಹಾರಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂಬುದರ ಉದಾಹರಣೆ.
      ವಾಸ್ತವ ಪರಿಹಾರ: ಶಾಲೆಗಳಲ್ಲಿ ಆಹಾರ ಕೊಡುಗೆಗಳನ್ನು ಏರ್ಪಡಿಸುವುದು, ಅಗತ್ಯವಿರುವವರಿಗಾಗಿ ಆಹಾರ ಸಂಗ್ರಹಣಾ ಕಾರ್ಯಗಳನ್ನು ಸಂಘಟಿಸುವುದು.
    ` : `
      MODULE 2: Zero Hunger
      Q: Will hunger exist in the world after 50 years? It's a question based on today's growth!
      A: Hunger can be completely eradicated, but we must improve our food resources and production strategies.
      What it is: Hunger means not having enough food to eat. If people lack necessary food, it affects their health. SDG 2 aims to end hunger and foster new food systems to help solve this problem.
      Awareness and Purpose: Changes in food supply. The difference between those who suffer from hunger and those who waste food.
      Example: How reducing food waste can help in solving hunger.
      Real-Life Solution: Organizing food donation drives at schools and arranging food collection campaigns for those in need.
    `;

    // Use the SpeechSynthesis API
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;

    // Detect the language using Franc
    const langCode = franc(text);
    let language = globalState.language === 'kn' ? 'kn-IN' : 'en-US'; // Set language based on global state

    speech.lang = language;

    // Select a voice based on the detected language
    const selectedVoice = voices.find(voice => voice.lang === language);
    if (selectedVoice) {
      speech.voice = selectedVoice;
    } else {
      alert(`No voice available for language: ${language}`);
    }

    // Speak the text
    window.speechSynthesis.speak(speech);
  };

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }

  return (
    <div className="bg-white py-20 px-10 rounded-lg shadow-md h-auto min-h-[900px] relative">
      {/* Combined Heading and Question Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">
          {globalState.language === 'kn' ? 'MODULE 2: ಹಸಿವು ಇಲ್ಲ' : 'MODULE 2: Zero Hunger'}
        </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'Q: 50 ವರ್ಷಗಳ ನಂತರ ವಿಶ್ವದಲ್ಲಿ ಹಸಿವು ಇರುತ್ತದೆಯೇ? ಇದು ಇಂದಿನ ಬೆಳವಣಿಗೆಗೆ ಆಧಾರಿತ ಪ್ರಶ್ನೆಯಾಗಿದೆ!'
            : 'Q: Will hunger exist in the world after 50 years? It\'s a question based on today\'s growth!'
          }
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg2.gif" alt="Zero Hunger" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          {globalState.language === 'kn' 
            ? 'A: ಹಸಿವು ಸಂಪೂರ್ಣವಾಗಿ ನಿಲ್ಲಿಸಬಹುದು ಆದರೆ ನಾವು ನಮ್ಮ ಆಹಾರ ಸಂಪತ್ತನ್ನು ಮತ್ತು ಉತ್ಪಾದನೆಯ ಕಾರ್ಯತಂತ್ರಗಳನ್ನು ಸುಧಾರಿಸಬೇಕು.'
            : 'A: Hunger can be completely eradicated, but we must improve our food resources and production strategies.'
          }
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಏನು ಎಂಬುದು:' : 'What it is:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಹಸಿವು ಎಂದರೆ ತಿನ್ನಲು ಸಾಕಷ್ಟು ಆಹಾರವಿಲ್ಲ. ಜನರಿಗೆ ಅಗತ್ಯವಾದ ಆಹಾರವಿಲ್ಲದಿದ್ದರೆ ಅವರ ಆರೋಗ್ಯದ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ. SDG 2 ಗುರಿಯು ಹಸಿವು ಮುಗಿಸಲು ಮತ್ತು ನೂತನ ಆಹಾರ ವ್ಯವಸ್ಥೆಗಳನ್ನು ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'
              : 'Hunger means not having enough food to eat. If people lack necessary food, it affects their health. SDG 2 aims to end hunger and foster new food systems to help solve this problem.' 
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ:' : 'Awareness and Purpose:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಆಹಾರದ ಪ್ರಮಾಣದ ಬದಲಾವಣೆ. ಹಸಿವಿನಿಂದ ಬಳಲುವವರು ಮತ್ತು ಹೆಚ್ಚು ಆಹಾರವನ್ನು ಕಳೆಯುವವರ ನಡುವೆ ವ್ಯತ್ಯಾಸ.'
              : 'Changes in food supply. The difference between those who suffer from hunger and those who waste food.' 
            }
          </p>
        </div>
      </div>

      {/* Example and Real-Life Solution Sections */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">
            {globalState.language === 'kn' ? 'ಉದಾಹರಣೆ:' : 'Example:'}
          </h3>
          <p className="text-yellow-700">
            {globalState.language === 'kn' 
              ? 'ಬಾಡಿಕೊಂಡ ಆಹಾರವನ್ನು ಕಡಿಮೆ ಮಾಡುವುದು ಹೇಗೆ ಹಸಿವು ಪರಿಹಾರಕ್ಕೆ ಸಹಾಯ ಮಾಡುತ್ತದೆ ಎಂಬುದರ ಉದಾಹರಣೆ.'
              : 'How reducing food waste can help in solving hunger.' 
            }
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">
            {globalState.language === 'kn' ? 'ವಾಸ್ತವ ಪರಿಹಾರ:' : 'Real-Life Solution:'}
          </h3>
          <p className="text-yellow-700">
            {globalState.language === 'kn' 
              ? 'ಶಾಲೆಗಳಲ್ಲಿ ಆಹಾರ ಕೊಡುಗೆಗಳನ್ನು ಏರ್ಪಡಿಸುವುದು, ಅಗತ್ಯವಿರುವವರಿಗಾಗಿ ಆಹಾರ ಸಂಗ್ರಹಣಾ ಕಾರ್ಯಗಳನ್ನು ಸಂಘಟಿಸುವುದು.'
              : 'Organizing food donation drives at schools and arranging food collection campaigns for those in need.' 
            }
          </p>
        </div>
      </div>

      {/* Button to Show Module Path */}
      <button
        onClick={handleShowModulePath}
        className="mt-4 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
      >
        {globalState.language === 'kn' ? 'ಮುಂದೆ' : 'NEXT'}
      </button>

       {/* Ask Me Section - Can I speak? GIF */}
<div className="fixed bottom-2 right-10 flex items-center cursor-pointer" onClick={handleTextToSpeech}>
  <Image 
    src="/dog.gif" 
    alt={globalState.language === 'kn' ? 'ನಾನು ಮಾತನಾಡಬಹುದೇ?' : 'Can I speak?'} // Conditional alt text
    width={120} 
    height={120} 
    className="cursor-pointer" 
  />
  <span className="bg-green-300 text-black font-semibold px-3 py-1 rounded-full mt-1 text-sm absolute -top-6">
    {globalState.language === 'kn' ? 'ನಾನು ಮಾತನಾಡಬಹುದೇ?' : 'Can I speak?'} 
  </span>
</div>

    </div>
  );
};

export default Module2;
