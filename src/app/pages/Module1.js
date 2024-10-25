import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g1';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module1 = () => {
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
      MODULE 1: ದಾರಿದ್ರ್ಯ ಇಲ್ಲ
      Q: ಆಲಾದೀನ ತನ್ನ 마법 ಬಂಡಿಯನ್ನು ಬಳಸಿಕೊಂಡು ವಿಶ್ವದ ಪ್ರತಿಯೊಂದು ಕೊನೆಯಲ್ಲಿ ಆಹಾರ ಮತ್ತು ಸಂಪತ್ತನ್ನು ತಂದುಕೊಳ್ಳುತ್ತಿದ್ದರೆ, ನಮ್ಮಲ್ಲಿ ಎಲ್ಲರಿಗೂ ಆಲಾದೀನನಂತೆ 마법 ಬಂಡಿ ಇದ್ದರೆ, 50 ವರ್ಷಗಳ ನಂತರ ಪ್ರಪಂಚದಲ್ಲಿ ದಾರಿದ್ರ್ಯವಿರುತ್ತದೆಯೇ?
      A: ನಾವು ಆಲಾದೀನನ ವೇಗದ ಪ್ರಯಾಣಗಳಂತೆ ನಮ್ಮ ಸಂಪತ್ತನ್ನು ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿದರೆ, ಯಾರಿಗಾದರೂ ತಕ್ಷಣವೇ ಬೇಕಾದದ್ದು ಪಡೆಯಬಹುದು. ಆದರೆ ಯೋಜನೆಯಿಲ್ಲದೆ, 마법 ಮಾತ್ರ ಸಾಕಷ್ಟು ಇಲ್ಲ – ಭಾಗ್ಯ ಕಳೆದುಕೊಳ್ಳಬಹುದು!
      ಇದು ಏನು: ದಾರಿದ್ರ್ಯ ಎಂದರೆ ನಿಮಗೆ ಅಗತ್ಯವಾದುದನ್ನು ಖರೀದಿಸಲು ಸಾಕಷ್ಟು ಹಣ ಇಲ್ಲ. ಆಹಾರ ಇಲ್ಲ, ಉಡುಗೆ ಇಲ್ಲ, ಅಥವಾ ನಿಮ್ಮ ಮೆಟ್ಟಿಲಿನ ಮೇಲೆ ಒಂದು ತೋಳ ಇಲ್ಲ. SDG 1 ಗುರಿ ಎಂದರೆ ಎಲ್ಲರಿಗೂ ಉತ್ತಮ ಜೀವನಕ್ಕಾಗಿ ಸಾಕಷ್ಟು ಹಣ ಒದಗಿಸುವುದು, ಅವರು ಜನಿಸಿದ ಸ್ಥಳವೇನಾದರೂ.
      ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ: ದಾರಿದ್ರ್ಯ ಎಂದರೆ ಕ್ಲೀನ್ ನೀರಿನ, ಶಿಕ್ಷಣ ಅಥವಾ ಕೆಲಸಕ್ಕೆ ಪ್ರವೇಶವಿಲ್ಲ. ಈ ಜನರು ತಮ್ಮ ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಾಕಷ್ಟು ಹಣ ಗಳಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ನಾವು ಉತ್ತಮ ಅವಕಾಶಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಈ ಚಕ್ರವನ್ನು ಮುರಿಯಬೇಕು.
      ಉದಾಹರಣೆ: ವಿಭಿನ್ನ ನೆಲದ ಮಟ್ಟದಲ್ಲಿ ಬೀಜಗಳನ್ನು ನೆಡುವಾಗ ಬೆಳವಣಿಗೆಯ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಗಮನಿಸುತ್ತಿರುವುದು. ಆಹಾರ ಉತ್ಪಾದನೆಯಲ್ಲಿ ದಾರಿದ್ರ್ಯ ಮಟ್ಟಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಹಣ್ಣುಗಳನ್ನು ಪಡೆದು ಹಂಚಿಕೊಳ್ಳುವುದು.
      ವಾಸ್ತವ ಪರಿಹಾರ: ಶಾಲೆಯಲ್ಲಿ ದಾರಿದ್ರ್ಯವನ್ನು ಇರುವವರಿಗೆ ಬಟ್ಟೆ, ಪುಸ್ತಕ ಅಥವಾ ಆಹಾರಗಳ ಉಡುಗೊರೆಯ ಕ್ರಮಗಳನ್ನು ಸಂಘಟಿಸಲು ಸಣ್ಣದಿಂದ ಪ್ರಾರಂಭಿಸಬಹುದು. ನೀವು ತಮ್ಮ ಸಂಬಂಧಗಳಿಗಾಗಿ ಸಣ್ಣ ಸಾಲಗಳನ್ನು ಒದಗಿಸುವ ಸಂಸ್ಥೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ಸಹ ಸಾಧ್ಯವಾಗುತ್ತದೆ, ಇದರಿಂದ ಅವರನ್ನು ಇನ್ನಷ್ಟು ಉತ್ತಮವಾಗಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.
    ` : `
      MODULE 1: No Poverty
      Q: Imagine if Aladdin used his magic carpet to bring food and wealth to every corner of the world. If we all had a magic carpet like him, would poverty still exist in the world after 50 years?
      A: If we managed our resources well like Aladdin’s swift journeys, everyone could get what they need immediately. But without planning, magic alone won’t suffice – luck may just run out!
      What it is: Poverty means not having enough money to buy what you need. No food, no clothes, or a roof over your head. SDG 1 aims to ensure everyone has enough money for a decent life, regardless of where they were born.
      Awareness and Purpose: Poverty means having no access to clean water, education, or jobs. These people are trapped in a cycle because they can’t earn enough money to improve their lives. We need to break this cycle by providing better opportunities.
      Example: Observing how planting seeds at different soil levels affects growth. Discussing how access to fertile soil influences poverty levels in food production.
      Real-Life Solution: You can start small by organizing donation drives for clothes, books, or food for the needy at school. You could also learn about organizations that provide small loans for their concerns, making them even better.
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
          {globalState.language === 'kn' ? 'MODULE 1: ದಾರಿದ್ರ್ಯ ಇಲ್ಲ' : 'MODULE 1: No Poverty'}
        </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'Q: ಆಲಾದೀನ ತನ್ನ 마법 ಬಂಡಿಯನ್ನು ಬಳಸಿಕೊಂಡು ವಿಶ್ವದ ಪ್ರತಿಯೊಂದು ಕೊನೆಯಲ್ಲಿ ಆಹಾರ ಮತ್ತು ಸಂಪತ್ತನ್ನು ತಂದುಕೊಳ್ಳುತ್ತಿದ್ದರೆ, ನಮ್ಮಲ್ಲಿ ಎಲ್ಲರಿಗೂ ಆಲಾದೀನನಂತೆ 마법 ಬಂಡಿ ಇದ್ದರೆ, 50 ವರ್ಷಗಳ ನಂತರ ಪ್ರಪಂಚದಲ್ಲಿ ದಾರಿದ್ರ್ಯವಿರುತ್ತದೆಯೇ?'
            : 'Q: Imagine if Aladdin used his magic carpet to bring food and wealth to every corner of the world. If we all had a magic carpet like him, would poverty still exist in the world after 50 years?'
          }
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg1.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          {globalState.language === 'kn' 
            ? 'A: ನಾವು ಆಲಾದೀನನ ವೇಗದ ಪ್ರಯಾಣಗಳಂತೆ ನಮ್ಮ ಸಂಪತ್ತನ್ನು ಚೆನ್ನಾಗಿ ನಿರ್ವಹಿಸಿದರೆ, ಯಾರಿಗಾದರೂ ತಕ್ಷಣವೇ ಬೇಕಾದದ್ದು ಪಡೆಯಬಹುದು. ಆದರೆ ಯೋಜನೆಯಿಲ್ಲದೆ, 마법 ಮಾತ್ರ ಸಾಕಷ್ಟು ಇಲ್ಲ – ಭಾಗ್ಯ ಕಳೆದುಕೊಳ್ಳಬಹುದು!'
            : 'A: If we managed our resources well like Aladdin’s swift journeys, everyone could get what they need immediately. But without planning, magic alone won’t suffice – luck may just run out!'
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
              ? 'ದಾರಿದ್ರ್ಯ ಎಂದರೆ ನಿಮಗೆ ಅಗತ್ಯವಾದುದನ್ನು ಖರೀದಿಸಲು ಸಾಕಷ್ಟು ಹಣ ಇಲ್ಲ. ಆಹಾರ ಇಲ್ಲ, ಉಡುಗೆ ಇಲ್ಲ, ಅಥವಾ ನಿಮ್ಮ ಮೆಟ್ಟಿಲಿನ ಮೇಲೆ ಒಂದು ತೋಳ ಇಲ್ಲ. SDG 1 ಗುರಿ ಎಂದರೆ ಎಲ್ಲರಿಗೂ ಉತ್ತಮ ಜೀವನಕ್ಕಾಗಿ ಸಾಕಷ್ಟು ಹಣ ಒದಗಿಸುವುದು, ಅವರು ಜನಿಸಿದ ಸ್ಥಳವೇನಾದರೂ.'
              : 'Poverty means not having enough money to buy what you need. No food, no clothes, or a roof over your head. SDG 1 aims to ensure everyone has enough money for a decent life, regardless of where they were born.' 
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ:' : 'Awareness and Purpose:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ದಾರಿದ್ರ್ಯ ಎಂದರೆ ಕ್ಲೀನ್ ನೀರಿನ, ಶಿಕ್ಷಣ ಅಥವಾ ಕೆಲಸಕ್ಕೆ ಪ್ರವೇಶವಿಲ್ಲ. ಈ ಜನರು ತಮ್ಮ ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಾಕಷ್ಟು ಹಣ ಗಳಿಸಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ. ನಾವು ಉತ್ತಮ ಅವಕಾಶಗಳನ್ನು ಒದಗಿಸುವ ಮೂಲಕ ಈ ಚಕ್ರವನ್ನು ಮುರಿಯಬೇಕು.'
              : 'Poverty means having no access to clean water, education, or jobs. These people are trapped in a cycle because they can’t earn enough money to improve their lives. We need to break this cycle by providing better opportunities.' 
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
              ? 'ವಿಭಿನ್ನ ನೆಲದ ಮಟ್ಟದಲ್ಲಿ ಬೀಜಗಳನ್ನು ನೆಡುವಾಗ ಬೆಳವಣಿಗೆಯ ಮೇಲೆ ಹೇಗೆ ಪರಿಣಾಮ ಬೀರುತ್ತದೆ ಎಂಬುದನ್ನು ಗಮನಿಸುತ್ತಿರುವುದು. ಆಹಾರ ಉತ್ಪಾದನೆಯಲ್ಲಿ ದಾರಿದ್ರ್ಯ ಮಟ್ಟಗಳ ಮೇಲೆ ಪರಿಣಾಮ ಬೀರುವ ಹಣ್ಣುಗಳನ್ನು ಪಡೆದು ಹಂಚಿಕೊಳ್ಳುವುದು.'
              : 'Observing how planting seeds at different soil levels affects growth. Discussing how access to fertile soil influences poverty levels in food production.' 
            }
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">
            {globalState.language === 'kn' ? 'ವಾಸ್ತವ ಪರಿಹಾರ:' : 'Real-Life Solution:'}
          </h3>
          <p className="text-yellow-700">
            {globalState.language === 'kn' 
              ? 'ಶಾಲೆಯಲ್ಲಿ ದಾರಿದ್ರ್ಯವನ್ನು ಇರುವವರಿಗೆ ಬಟ್ಟೆ, ಪುಸ್ತಕ ಅಥವಾ ಆಹಾರಗಳ ಉಡುಗೊರೆಯ ಕ್ರಮಗಳನ್ನು ಸಂಘಟಿಸಲು ಸಣ್ಣದಿಂದ ಪ್ರಾರಂಭಿಸಬಹುದು. ನೀವು ತಮ್ಮ ಸಂಬಂಧಗಳಿಗಾಗಿ ಸಣ್ಣ ಸಾಲಗಳನ್ನು ಒದಗಿಸುವ ಸಂಸ್ಥೆಗಳ ಬಗ್ಗೆ ತಿಳಿಯಲು ಸಹ ಸಾಧ್ಯವಾಗುತ್ತದೆ, ಇದರಿಂದ ಅವರನ್ನು ಇನ್ನಷ್ಟು ಉತ್ತಮವಾಗಿ ಮಾಡಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ.'
              : 'You can start small by organizing donation drives for clothes, books, or food for the needy at school. You could also learn about organizations that provide small loans for their concerns, making them even better.' 
            }
          </p>
        </div>
      </div>

      {/* Button to Show Module Path */}
<button
  onClick={handleShowModulePath}
  className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-grey"
>
  {globalState.language === 'kn' ? 'ಮರು ದಾರಿ' : 'NEXT'}
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

export default Module1;
