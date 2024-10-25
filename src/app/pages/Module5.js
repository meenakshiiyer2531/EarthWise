import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g5';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module5 = () => {
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
      MODULE 5: ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು
      Q: ಮೈಸೂರಿನ ತಂತ್ರಜ್ಞಾನ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶವನ್ನು ಮುನ್ನೋಟವಾಗಿ ಯೋಚಿಸುತ್ತೀರಿ ಎಂದು ಕಲ್ಪಿಸಿ, 2040ರಲ್ಲಿನ ಶಾಶ್ವತ ನಗರವನ್ನು ಹೇಗೆ ಕಾಣುತ್ತೀರಿ? ಇದು ವ್ಯಕ್ತಿಗಳನ್ನು ಮತ್ತು ಸಮುದಾಯಗಳನ್ನು ಉತ್ತಮವಾಗಿ ಬೆಳೆಸಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?
      A: ಈ ನಗರಗಳು ನೆನೆಸಿದಂತೆಯೇ, ಎಲ್ಲರಿಗೂ ಅವಕಾಶ ನೀಡುವ ಸದೃಢ ಮೂಲಸೌಕರ್ಯವನ್ನು, ತಂತ್ರಜ್ಞಾನವನ್ನು ಒಳಗೊಂಡ ಪರಿಸರಗಳನ್ನು ಒಳಗೊಂಡಂತೆ, ಜೀವಾಳವನ್ನು ನೀಡುತ್ತದೆ. ಅಭಿವೃದ್ಧಿ ಚಲಿಸುತ್ತಿರುವಾಗ, ಈ ನಗರಗಳು ಸ್ಥಳೀಯ ಉದ್ಯೋಗಗಳು ಮತ್ತು ಕಚೇರಿಗಳ ಮೂಲಕ ಜನರ ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.
      ಇದು ಏನು: ಈ ಗುರಿಯು ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಉದ್ದೇಶಿಸುತ್ತದೆ, ಎಲ್ಲರಿಗೂ ಸ್ವಸ್ಥ ಮತ್ತು ಸುಸ್ಥಿರ ಪರಿಸರವನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.
      ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ: ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು ನಮ್ಮನ್ನು ಮತ್ತು ಪರಿಸರವನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಆದರೆ, ಅಭಿವೃದ್ಧಿ ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸದಿದ್ದರೆ, ಇದು ಸಂಕಷ್ಟಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.
      ಉದಾಹರಣೆ: ಮೈಸೂರಿನಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದ ಹೊಸ ಕಟ್ಟಡಗಳನ್ನು ನಿಮ್ಮದೇ ವಾಸ್ತವ್ಯದ ಹಕ್ಕಿಗಾಗಿ ಬಳಸಬಹುದು. ಇತರ ಸ್ಥಳಗಳಿಗೆ ಹೋಗುವ ಅಥವಾ ಸಾಮಾಜಿಕ ಜಾಲವ್ಯವಸ್ಥೆ ಮೂಲಕ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಮೂಲಕ, ನೀವು ಹೆಚ್ಚು ನಿರಂತರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸುತ್ತೀರಿ.
      ವಾಸ್ತವ ಪರಿಹಾರ: ಶಾಶ್ವತ ನಗರಗಳನ್ನು ನಿರ್ಮಿಸುವುದಕ್ಕಾಗಿ ಬೋಧನೆ ಮತ್ತು ಹೊಸ ಕಾರ್ಯಕ್ಷೇತ್ರವನ್ನು ಪಡೆಯಲು ಮತ್ತು ಸಮುದಾಯವನ್ನು ಕಟ್ಟಲು ಹೆಚ್ಚು ಶ್ರೇಷ್ಠ ಸಿದ್ಧತೆ ನೀಡಬಹುದು.
    ` : `
      MODULE 5: SUSTAINABLE CITIES AND COMMUNITIES
      Q: Imagine envisioning the Technology Development Area in Mysore. What do you see as a sustainable city in 2040? How could this help people and communities thrive?
      A: Just like the envisioned cities, they provide resilient infrastructure that offers everyone opportunities and incorporates technology to enhance livability. As development progresses, these cities can help improve people's lives through local jobs and offices.
      What it is: This goal aims to develop sustainable cities and communities, ensuring that everyone has access to a healthy and sustainable environment.
      Awareness and Purpose: Sustainable cities and communities help us grow effectively with our environment. However, if development is not managed well, it could lead to complications.
      Example: You could use new buildings in the Technology Development Area in Mysore as your home base. By connecting with others through social networks or visiting other locations, you maintain connections more sustainably.
      Real-Life Solution: You can contribute to building sustainable cities by advocating for education and acquiring new skills to build your community.
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
    <div className="bg-white py-6 px-10 rounded-lg shadow-md h-auto relative">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">
          {globalState.language === 'kn' ? 'MODULE 5 : ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು' : 'MODULE 5 : SUSTAINABLE CITIES AND COMMUNITIES'}
        </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'Q: ಮೈಸೂರಿನ ತಂತ್ರಜ್ಞಾನ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶವನ್ನು ಮುನ್ನೋಟವಾಗಿ ಯೋಚಿಸುತ್ತೀರಿ ಎಂದು ಕಲ್ಪಿಸಿ, 2040ರಲ್ಲಿನ ಶಾಶ್ವತ ನಗರವನ್ನು ಹೇಗೆ ಕಾಣುತ್ತೀರಿ? ಇದು ವ್ಯಕ್ತಿಗಳನ್ನು ಮತ್ತು ಸಮುದಾಯಗಳನ್ನು ಉತ್ತಮವಾಗಿ ಬೆಳೆಸಲು ಹೇಗೆ ಸಹಾಯ ಮಾಡಬಹುದು?'
            : 'Q: Imagine envisioning the Technology Development Area in Mysore. What do you see as a sustainable city in 2040? How could this help people and communities thrive?'
          }
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg5.gif"
          alt="Sustainable Cities and Communities"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'A: ಈ ನಗರಗಳು ನೆನೆಸಿದಂತೆಯೇ, ಎಲ್ಲರಿಗೂ ಅವಕಾಶ ನೀಡುವ ಸದೃಢ ಮೂಲಸೌಕರ್ಯವನ್ನು, ತಂತ್ರಜ್ಞಾನವನ್ನು ಒಳಗೊಂಡ ಪರಿಸರಗಳನ್ನು ಒಳಗೊಂಡಂತೆ, ಜೀವಾಳವನ್ನು ನೀಡುತ್ತದೆ. ಅಭಿವೃದ್ಧಿ ಚಲಿಸುತ್ತಿರುವಾಗ, ಈ ನಗರಗಳು ಸ್ಥಳೀಯ ಉದ್ಯೋಗಗಳು ಮತ್ತು ಕಚೇರಿಗಳ ಮೂಲಕ ಜನರ ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ.' 
            : 'A: Just like the envisioned cities, they provide resilient infrastructure that offers everyone opportunities and incorporates technology to enhance livability. As development progresses, these cities can help improve people\'s lives through local jobs and offices.'
          }
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಇದು ಏನು:' : 'What it is:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಈ ಗುರಿಯು ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳನ್ನು ಅಭಿವೃದ್ಧಿಪಡಿಸಲು ಉದ್ದೇಶಿಸುತ್ತದೆ, ಎಲ್ಲರಿಗೂ ಸ್ವಸ್ಥ ಮತ್ತು ಸುಸ್ಥಿರ ಪರಿಸರವನ್ನು ಒದಗಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ.'
              : 'This goal aims to develop sustainable cities and communities, ensuring that everyone has access to a healthy and sustainable environment.'}
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ:' : 'Awareness and Purpose:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಶಾಶ್ವತ ನಗರಗಳು ಮತ್ತು ಸಮುದಾಯಗಳು ನಮ್ಮನ್ನು ಮತ್ತು ಪರಿಸರವನ್ನು ಪರಿಣಾಮಕಾರಿಯಾಗಿ ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡುತ್ತವೆ. ಆದರೆ, ಅಭಿವೃದ್ಧಿ ಉತ್ತಮವಾಗಿ ನಿರ್ವಹಿಸದಿದ್ದರೆ, ಇದು ಸಂಕಷ್ಟಕ್ಕೆ ಕಾರಣವಾಗಬಹುದು.'
              : 'Sustainable cities and communities help us grow effectively with our environment. However, if development is not managed well, it could lead to complications.'}
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಉದಾಹರಣೆ:' : 'Example:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಮೈಸೂರಿನಲ್ಲಿ ತಂತ್ರಜ್ಞಾನ ಅಭಿವೃದ್ಧಿ ಪ್ರದೇಶದ ಹೊಸ ಕಟ್ಟಡಗಳನ್ನು ನಿಮ್ಮದೇ ವಾಸ್ತವ್ಯದ ಹಕ್ಕಿಗಾಗಿ ಬಳಸಬಹುದು. ಇತರ ಸ್ಥಳಗಳಿಗೆ ಹೋಗುವ ಅಥವಾ ಸಾಮಾಜಿಕ ಜಾಲವ್ಯವಸ್ಥೆ ಮೂಲಕ ಸಂಪರ್ಕ ಸಾಧಿಸುವ ಮೂಲಕ, ನೀವು ಹೆಚ್ಚು ನಿರಂತರವಾಗಿ ಸಂಪರ್ಕ ಸಾಧಿಸುತ್ತೀರಿ.'
              : 'You could use new buildings in the Technology Development Area in Mysore as your home base. By connecting with others through social networks or visiting other locations, you maintain connections more sustainably.'}
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ವಾಸ್ತವ ಪರಿಹಾರ:' : 'Real-Life Solution:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಶಾಶ್ವತ ನಗರಗಳನ್ನು ನಿರ್ಮಿಸುವುದಕ್ಕಾಗಿ ಬೋಧನೆ ಮತ್ತು ಹೊಸ ಕಾರ್ಯಕ್ಷೇತ್ರವನ್ನು ಪಡೆಯಲು ಮತ್ತು ಸಮುದಾಯವನ್ನು ಕಟ್ಟಲು ಹೆಚ್ಚು ಶ್ರೇಷ್ಠ ಸಿದ್ಧತೆ ನೀಡಬಹುದು.'
              : 'You can contribute to building sustainable cities by advocating for education and acquiring new skills to build your community.'}
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

export default Module5;
