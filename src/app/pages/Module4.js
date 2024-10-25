import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g4';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module4 = () => {
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
      MODULE 4: ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ
      Q: ಹ್ಯಾರಿ ಪೋಟರ್‌ನಲ್ಲಿ ಹೆರ್ಮಿಯೋನ್ ಗ್ರಾಂಜರ್ ತನ್ನ ಮಾಯಾಜಾಲ ಪುಸ್ತಕಗಳನ್ನು ವಿಶ್ವದ ಪ್ರತಿಯೊಂದು ಬಾಲಕರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತಿದ್ದರೆ, 30 ವರ್ಷಗಳಲ್ಲಿ ನಾವು ಎಲ್ಲರಿಗೂ ಮಾಯಾಜಾಲಿಗಾರರಂತೆ ಪ್ರಮಾಣಿತ билим ಹೊಂದಿರುತ್ತದೆಯೇ? ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವು ವಾಸ್ತವ ಜಾದು ಹೇಗೆ ಸೃಷ್ಟಿಸಬಹುದು?
      A: ಹೆರ್ಮಿಯೋನ್‌ನ ತಿಳಿವಳಿಕೆ ಅವಳನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿಸಿದಂತೆ, ಎಲ್ಲರಿಗೂ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವು ತಮ್ಮದೇ ಆದ ಮಾಯಾಜಾಲವನ್ನು ಸೃಷ್ಟಿಸಲು ಸಾಧನಗಳನ್ನು ನೀಡುತ್ತದೆ—ಜಾಗತಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವ ಮತ್ತು ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ತಿರುವುಗಳನ್ನು ಬಳಸುವುದು. ನಾವು ಹಂಚುವಷ್ಟು ಹೆಚ್ಚು ತಿಳಿವಳಿಕೆ, ನಾವು ಎಲ್ಲರೂ ಬಲಶಾಲಿಯಾಗಿ ಬರುವುದೇನು!
      ಇದು ಏನು: ಈ ಗುರಿಯು ಪ್ರತಿ ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣ ಒದಗಿಸುವುದರ ಕುರಿತು. ಶಿಕ್ಷಣವು ಜನರ ಕೆಲಸವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಮತ್ತು ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಶಿಕ್ಷಣವಿಲ್ಲದೆ, ಜನರು ತಮ್ಮ ಜೀವನವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಅಥವಾ ತಮ್ಮ ಸಮುದಾಯಗಳನ್ನು ಬೆಳೆಯಲು ಕಷ್ಟಪಡುತ್ತಾರೆ.
      ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ: ವಿಶ್ವಾದ್ಯಾಂತ ಅನೇಕ ಮಕ್ಕಳಿಗೆ ಶಾಲೆ ಹೋಗಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ ಏಕೆಂದರೆ ಅವರ ಕುಟುಂಬಗಳು ದಾರಿದ್ರ್ಯದಲ್ಲಿವೆ ಅಥವಾ ಸುತ್ತಲೂ ಶಾಲೆಗಳಿಲ್ಲ. ಶಾಲೆಗಳಿರುವ ಸ್ಥಳಗಳಲ್ಲಿ ಸಹ, ಎಲ್ಲರಿಗೂ ಉತ್ತಮ ಶಿಕ್ಷಕರಿಲ್ಲ ಅಥವಾ ಸೂಕ್ತವಾಗಿ ಕಲಿಯಲು ಸಾಕಷ್ಟು ಪುಸ್ತಕಗಳಿಲ್ಲ. SDG 4 ಪ್ರತಿ ಮಕ್ಕಳಿಗೂ ಕಲಿಯುವ ಅವಕಾಶವನ್ನು ಖಚಿತಪಡಿಸಲು ಬಯಸುತ್ತದೆ.
      ಉದಾಹರಣೆ: ನಿಮ್ಮ ತರಗತಿಯಲ್ಲಿ ಸರಿಯಾದ ಕುರ್ಚಿಗಳು ಇಲ್ಲದಾಗ ಮತ್ತು ಶಿಕ್ಷಕರಿಗೆ ಚಾಕ್ ಅಥವಾ ಪುಸ್ತಕಗಳಿಲ್ಲದಾಗ ಹೇಗೆ ಕಲಿಯಲು ಕಷ್ಟಪಡುತ್ತದೆ ಎಂಬುದನ್ನು ಊಹಿಸಿಕೊಳ್ಳಿ. ಆದರೆ ಯಾರಾದರೂ ಪುಸ್ತಕಗಳನ್ನು ದೇಣಿಗೆ ನೀಡಿದರೆ ಮತ್ತು ಹೆಚ್ಚು ತರಗತಿಗಳನ್ನು ನಿರ್ಮಿಸಲು ಸಹಾಯ ಮಾಡಿದರೆ? ಹೆಚ್ಚು ಮಕ್ಕಳು ಕಲಿಯಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ ಮತ್ತು ತಮ್ಮ ಸಮುದಾಯವನ್ನು ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡಲು ವಯಸ್ಸಾಗುತ್ತಾರೆ.
      ವಾಸ್ತವ ಪರಿಹಾರ: ನೀವು ಒಬ್ಬ ವ್ಯಕ್ತಿಯೊಂದಿಗೆ ಚಾಟಿಂಗ್ ಮಾಡುವವರಾಗಿದ್ದೀರಿ, ಅವರು ತಮ್ಮ ಅಧ್ಯಯನದಲ್ಲಿ ಸಾಯುತ್ತಿದ್ದರೆ. ನೀವು ಹಳೆಯ ಪುಸ್ತಕಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಅವುಗಳನ್ನು ಅವಶ್ಯಕತೆ ಇರುವ ಶಾಲೆಗಳಿಗೆ ದೇಣಿಗೆ ನೀಡಲು ಸಹಾಯ ಮಾಡಬಹುದು. ಈ ರೀತಿಯಲ್ಲಿ, ನೀವು ಎಲ್ಲರಿಗೂ ಶಿಕ್ಷಣವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತಿದ್ದಾರೆ.
    ` : `
      MODULE 4: QUALITY EDUCATION
      Q: Imagine if Hermione Granger from Harry Potter could share her magic books with every child in the world. In 30 years, would we all be wizards with advanced knowledge? How could quality education create real-world magic?
      A: Just like Hermione’s knowledge makes her powerful, quality education for all would give everyone the tools to create their own magic—like solving global issues and inventing new technologies. The more knowledge we share, the stronger we all become!
      What it is: This goal is about making sure every child, everywhere, gets a good education. Education helps people get better jobs and improve their lives. Without education, it’s hard for people to make a living or help their communities grow.
      Awareness and Purpose: Many kids around the world don’t go to school because their families are poor or there are no schools nearby. Even in places with schools, not everyone has good teachers or enough books to learn properly. SDG 4 wants to make sure every child has a chance to learn no matter where they live.
      Example: Imagine if your classroom didn’t have enough chairs, and the teacher had no chalk or books. It would be really hard to learn, right? But what if someone donated books and helped build more classrooms? More kids would be able to learn and grow up to help their communities.
      Real-Life Solution: You can volunteer to tutor younger kids who are struggling in their studies. You could also help collect old books and donate them to schools that need them. This way, you’re helping make education better for everyone.
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
          {globalState.language === 'kn' ? 'MODULE 4 : ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣ' : 'MODULE 4 : QUALITY EDUCATION'}
        </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'Q: ಹ್ಯಾರೀ ಪೋಟರ್‌ನಲ್ಲಿ ಹೆರ್ಮಿಯೋನ್ ಗ್ರಾಂಜರ್ ತನ್ನ ಮಾಯಾಜಾಲ ಪುಸ್ತಕಗಳನ್ನು ವಿಶ್ವದ ಪ್ರತಿಯೊಂದು ಬಾಲಕರೊಂದಿಗೆ ಹಂಚಿಕೊಳ್ಳುತ್ತಿದ್ದರೆ, 30 ವರ್ಷಗಳಲ್ಲಿ ನಾವು ಎಲ್ಲರಿಗೂ ಮಾಯಾಜಾಲಿಗಾರರಂತೆ ಪ್ರಮಾಣಿತ билим ಹೊಂದಿರುತ್ತದೆಯೇ? ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವು ವಾಸ್ತವ ಜಾದು ಹೇಗೆ ಸೃಷ್ಟಿಸಬಹುದು?'
            : 'Q: Imagine if Hermione Granger from Harry Potter could share her magic books with every child in the world. In 30 years, would we all be wizards with advanced knowledge? How could quality education create real-world magic?'
          }
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg4.gif"
          alt="Quality Education"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'A: ಹೆರ್ಮಿಯೋನ್‌ನ ತಿಳಿವಳಿಕೆ ಅವಳನ್ನು ಶಕ್ತಿಶಾಲಿಯಾಗಿಸಿದಂತೆ, ಎಲ್ಲರಿಗೂ ಗುಣಮಟ್ಟದ ಶಿಕ್ಷಣವು ತಮ್ಮದೇ ಆದ ಮಾಯಾಜಾಲವನ್ನು ಸೃಷ್ಟಿಸಲು ಸಾಧನಗಳನ್ನು ನೀಡುತ್ತದೆ—ಜಾಗತಿಕ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸುವ ಮತ್ತು ಹೊಸ ತಂತ್ರಜ್ಞಾನಗಳನ್ನು ತಿರುವುಗಳನ್ನು ಬಳಸುವುದು. ನಾವು ಹಂಚುವಷ್ಟು ಹೆಚ್ಚು ತಿಳಿವಳಿಕೆ, ನಾವು ಎಲ್ಲರೂ ಬಲಶಾಲಿಯಾಗಿ ಬರುವುದೇನು!'
            : 'A: Just like Hermione’s knowledge makes her powerful, quality education for all would give everyone the tools to create their own magic—like solving global issues and inventing new technologies. The more knowledge we share, the stronger we all become!'
          }
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಈ ಗುರಿಯು ಪ್ರತಿ ಮಕ್ಕಳಿಗೆ ಉತ್ತಮ ಶಿಕ್ಷಣ ಒದಗಿಸುವುದರ ಕುರಿತು. ಶಿಕ್ಷಣವು ಜನರ ಕೆಲಸವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಮತ್ತು ಜೀವನವನ್ನು ಸುಧಾರಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತದೆ. ಶಿಕ್ಷಣವಿಲ್ಲದೆ, ಜನರು ತಮ್ಮ ಜೀವನವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಅಥವಾ ತಮ್ಮ ಸಮುದಾಯಗಳನ್ನು ಬೆಳೆಯಲು ಕಷ್ಟಪಡುತ್ತಾರೆ.'
              : 'This goal is about making sure every child, everywhere, gets a good education. Education helps people get better jobs and improve their lives. Without education, it’s hard for people to make a living or help their communities grow.'
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ವಿಶ್ವಾದ್ಯಾಂತ ಅನೇಕ ಮಕ್ಕಳಿಗೆ ಶಾಲೆ ಹೋಗಲು ಸಾಧ್ಯವಾಗುತ್ತಿಲ್ಲ ಏಕೆಂದರೆ ಅವರ ಕುಟುಂಬಗಳು ದಾರಿದ್ರ್ಯದಲ್ಲಿವೆ ಅಥವಾ ಸುತ್ತಲೂ ಶಾಲೆಗಳಿಲ್ಲ. ಶಾಲೆಗಳಿರುವ ಸ್ಥಳಗಳಲ್ಲಿ ಸಹ, ಎಲ್ಲರಿಗೂ ಉತ್ತಮ ಶಿಕ್ಷಕರಿಲ್ಲ ಅಥವಾ ಸೂಕ್ತವಾಗಿ ಕಲಿಯಲು ಸಾಕಷ್ಟು ಪುಸ್ತಕಗಳಿಲ್ಲ. SDG 4 ಪ್ರತಿ ಮಕ್ಕಳಿಗೂ ಕಲಿಯುವ ಅವಕಾಶವನ್ನು ಖಚಿತಪಡಿಸಲು ಬಯಸುತ್ತದೆ.'
              : 'Many kids around the world don’t go to school because their families are poor or there are no schools nearby. Even in places with schools, not everyone has good teachers or enough books to learn properly. SDG 4 wants to make sure every child has a chance to learn no matter where they live.'
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Example:</h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ನಿಮ್ಮ ತರಗತಿಯಲ್ಲಿ ಸರಿಯಾದ ಕುರ್ಚಿಗಳು ಇಲ್ಲದಾಗ ಮತ್ತು ಶಿಕ್ಷಕರಿಗೆ ಚಾಕ್ ಅಥವಾ ಪುಸ್ತಕಗಳಿಲ್ಲದಾಗ ಹೇಗೆ ಕಲಿಯಲು ಕಷ್ಟಪಡುತ್ತದೆ ಎಂಬುದನ್ನು ಊಹಿಸಿಕೊಳ್ಳಿ. ಆದರೆ ಯಾರಾದರೂ ಪುಸ್ತಕಗಳನ್ನು ದೇಣಿಗೆ ನೀಡಿದರೆ ಮತ್ತು ಹೆಚ್ಚು ತರಗತಿಗಳನ್ನು ನಿರ್ಮಿಸಲು ಸಹಾಯ ಮಾಡಿದರೆ? ಹೆಚ್ಚು ಮಕ್ಕಳು ಕಲಿಯಲು ಸಾಧ್ಯವಾಗುತ್ತದೆ ಮತ್ತು ತಮ್ಮ ಸಮುದಾಯವನ್ನು ಬೆಳೆಸಲು ಸಹಾಯ ಮಾಡಲು ವಯಸ್ಸಾಗುತ್ತಾರೆ.'
              : 'Imagine if your classroom didn’t have enough chairs, and the teacher had no chalk or books. It would be really hard to learn, right? But what if someone donated books and helped build more classrooms? More kids would be able to learn and grow up to help their communities.'
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Real-Life Solution:</h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ನೀವು ಒಬ್ಬ ವ್ಯಕ್ತಿಯೊಂದಿಗೆ ಚಾಟಿಂಗ್ ಮಾಡುವವರಾಗಿದ್ದೀರಿ, ಅವರು ತಮ್ಮ ಅಧ್ಯಯನದಲ್ಲಿ ಸಾಯುತ್ತಿದ್ದರೆ. ನೀವು ಹಳೆಯ ಪುಸ್ತಕಗಳನ್ನು ಸಂಗ್ರಹಿಸಲು ಮತ್ತು ಅವುಗಳನ್ನು ಅವಶ್ಯಕತೆ ಇರುವ ಶಾಲೆಗಳಿಗೆ ದೇಣಿಗೆ ನೀಡಲು ಸಹಾಯ ಮಾಡಬಹುದು. ಈ ರೀತಿಯಲ್ಲಿ, ನೀವು ಎಲ್ಲರಿಗೂ ಶಿಕ್ಷಣವನ್ನು ಉತ್ತಮಗೊಳಿಸಲು ಸಹಾಯ ಮಾಡುತ್ತಿದ್ದಾರೆ.'
              : 'You can volunteer to tutor younger kids who are struggling in their studies. You could also help collect old books and donate them to schools that need them. This way, you’re helping make education better for everyone.'
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

export default Module4;
