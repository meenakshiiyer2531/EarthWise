import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Language detection library
import ModulePath from './Module-g3';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module3 = () => {
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
      MODULE 3: ಉತ್ತಮ ಆರೋಗ್ಯ ಮತ್ತು ಸುಖವಾಗಿರಿ
      Q: 20 ವರ್ಷಗಳಲ್ಲಿ ಸ್ಪೈಡರ್-ಮ್ಯಾನ್ ಅಸ್ಥಮಾ ಅಥವಾ ಮಲೇರಿಯಾಂತಹ ರೋಗಗಳ ಹಬ್ಬುವಿಕೆಯನ್ನು ನಿಲ್ಲಿಸಲು ಸಾಧ್ಯವಿದೆಯೇ? ಪೀಟರ್ ಪಾರ್ಕರ್ ಸೂಪರ್ ಹೀರೋ ಬದಲು ವೈದ್ಯರಾಗಿದ್ದರೆ, ಅವನು ವಿಜ್ಞಾನ ಮತ್ತು ಆರೋಗ್ಯ ನೀತಿಗಳನ್ನು ಬಳಸಿಕೊಂಡು ಹೇಗೆ ಜೀವಗಳನ್ನು ಉಳಿಸುತ್ತಾನೆ?
      A: ಸ್ಪೈಡರ್-ಮ್ಯಾನ್ ಖಳನಾಯಕರನ್ನು ನಿಲ್ಲಿಸಬಹುದು, ಆದರೆ ಸ್ವಚ್ಚ ವಾಯು ನಿಯಮಗಳು ಮತ್ತು ಆರೋಗ್ಯ ಶಿಕ್ಷಣವನ್ನು ಹೊಂದಿರುವ ನೀತಿಗಳು ನಿಜವಾದ ಜೀವ ರಕ್ಷಕರು. ಪೀಟರ್ ಪಾರ್ಕರ್ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲು ಅಧ್ಯಯನ ಮಾಡುವಂತೆ, ನಾವು ವಿಜ್ಞಾನ ಮತ್ತು ಆರೋಗ್ಯ ಉದ್ದೇಶಗಳನ್ನು ಜನರನ್ನು ರಕ್ಷಿಸಲು ಅಗತ್ಯವಿದೆ!
      ಇದು ಏನು: ಈ ಗುರಿಯು ಜನರು ಆರೋಗ್ಯವಾಗಿದ್ದು ದೀರ್ಘಕಾಲ ಸುಖವಾಗಿರಲು ಸಹಾಯ ಮಾಡುವುದು. ಉತ್ತಮ ಆರೋಗ್ಯ ಎಂದರೆ ಸ್ವಚ್ಚ ನೀರನ್ನು ಕುಡಿಯುವುದು, ಆರೋಗ್ಯಕರ ಆಹಾರ ತಿನ್ನುವುದು ಮತ್ತು ಮಲೇರಿಯಾ ಅಥವಾ ಜ್ವರದಂತೆ ರೋಗಗಳು ಹಬ್ಬದಂತೆ ನೋಡಿಕೊಳ್ಳುವುದು.
      ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ: ಅನೇಕ ಜನರು ಸ್ವಚ್ಚ ನೀರು, ಆರೋಗ್ಯಕರ ಆಹಾರ ಅಥವಾ ಸರಿಯಾದ ಔಷಧಿಗಳಿಲ್ಲದ ಕಾರಣದಿಂದ ಅನಾರೋಗ್ಯಗೊಳ್ಳುತ್ತಾರೆ. ಉದಾಹರಣೆಗೆ, ಕೆಟ್ಟ ನೀರು ಜನರಿಗೆ ರೋಗಗಳನ್ನು ಕೊಡಬಹುದು, ಮತ್ತು ಹತ್ತಿರದಲ್ಲಿ ವೈದ್ಯರಿಲ್ಲದಿದ್ದರೆ ಅನಾರೋಗ್ಯವಾದಾಗ ಚಿಕಿತ್ಸೆ ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಜನರಿಗೆ ಹೇಗೆ ಅವರ ಆರೋಗ್ಯದ যতೇನು ಮಾಡಿಕೊಳ್ಳಬೇಕು ಎಂದು ಕಲಿಸುವುದು ಮತ್ತು ಅವರಿಗೆ ಅಗತ್ಯವಾದ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುವುದು ಮುಖ್ಯ.
      ಉದಾಹರಣೆ: ನಿಮ್ಮ ಶಾಲೆಗೆ ಸ್ವಚ್ಚ ಕುಡಿಯುವ ನೀರಿಲ್ಲದೆ, ವಿದ್ಯಾರ್ಥಿಗಳು ಅನಾರೋಗ್ಯಗೊಳ್ಳಲು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ. ಸರಳ ಪರಿಹಾರವೆಂದರೆ ನೀರನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ನೀರಿನ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಹೊಂದಿರಬೇಕು. ಆದರೆ ಆಹಾರ ಮುಂಚೆ ಮತ್ತು ಶೌಚಾಲಯ ಬಳಸಿ ಆದ ನಂತರ ಕೈಗಳನ್ನು ತೊಳೆಯಲು ಎಲ್ಲರಿಗೂ ಕಲಿಸುವುದು ಮುಖ್ಯ, ಇದರಿಂದ ಕೀಟಾಣುಗಳು ಹಬ್ಬುವುದನ್ನು ತಡೆಗಟ್ಟಬಹುದು.
      ವಾಸ್ತವ ಪರಿಹಾರ: ನಿಮ್ಮ ಶಾಲೆ ಅಥವಾ ಸಮುದಾಯದಲ್ಲಿ, ನೀವು ಜನರಿಗೆ ಕೈ ತೊಳೆಯುವದಿನ ಮಹತ್ವ, ಆರೋಗ್ಯಕರ ಆಹಾರ ತಿನ್ನುವುದು ಮತ್ತು ಅನಾರೋಗ್ಯವನ್ನು ತಡೆಗಟ್ಟಲು ಸ್ವಚ್ಚವಾಗಿರುವ ಬಗ್ಗೆ ಕಲಿಸಲು ಪೋಸ್ಟರ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸಬಹುದು ಅಥವಾ ಒಂದು ಸಣ್ಣ ಅಭಿಯಾನವನ್ನು ಏರ್ಪಡಿಸಬಹುದು. ನೀವು ಸಹ ಸಹಾಯ ಅಗತ್ಯವಿರುವ ಪ್ರದೇಶಗಳಿಗೆ ಸ್ವಚ್ಚ ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸುವ ಸಂಸ್ಥೆಗಳಿಗೆ ನಿಧಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಬಹುದು.
    ` : `
      MODULE 3: Good Health and Well-being
      Q: Do you think Spider-Man could stop the spread of diseases like asthma or malaria in 20 years? If Peter Parker was a doctor instead of a superhero, how would he use science and health policies to save lives?
      A: Spider-Man can stop villains, but policies like clean air regulations and health education would be the real lifesavers. Just like Peter Parker would study to solve problems, we need science and health initiatives to protect people!
      What it is: This goal is all about making sure people are healthy and live long, happy lives. Good health means having clean water to drink, eating healthy food, and making sure diseases like malaria or the flu don’t spread.
      Awareness and Purpose: Many people get sick because they don’t have clean water, healthy food, or proper medicines. For example, dirty water can give people diseases, and not having doctors nearby means that many people can’t get treated when they’re sick. It’s important to teach people how to take care of their health and provide the tools they need.
      Example: Imagine your school doesn’t have clean drinking water, and students start getting sick. The simple solution is to have water filters to make sure the water is safe. But it’s also important to teach everyone to wash their hands before eating and after using the toilet to stop germs from spreading.
      Real-Life Solution: In your school or community, you can create posters or organize a small campaign to teach people about the importance of washing hands, eating healthy food, and staying clean to prevent illnesses. You can also help collect funds for organizations that provide clean drinking water to areas in need.
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
          {globalState.language === 'kn' ? 'MODULE 3: ಉತ್ತಮ ಆರೋಗ್ಯ ಮತ್ತು ಸುಖವಾಗಿರಿ' : 'MODULE 3: Good Health and Well-being'}
        </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'Q: 20 ವರ್ಷಗಳಲ್ಲಿ ಸ್ಪೈಡರ್-ಮ್ಯಾನ್ ಅಸ್ಥಮಾ ಅಥವಾ ಮಲೇರಿಯಾ போன்ற ರೋಗಗಳ ಹರಡುವಿಕೆಯನ್ನು ತಡೆಗಟ್ಟಲು ಸಾಧ್ಯವಿದೆಯೇ? ಪೀಟರ್ ಪಾರ್ಕರ್ ಸೂಪರ್ ಹೀರೋ ಬದಲು ವೈದ್ಯರಾಗಿದ್ದರೆ, ಅವರು ವಿಜ್ಞಾನ ಮತ್ತು ಆರೋಗ್ಯ ನೀತಿಗಳನ್ನು ಬಳಸಿ ಹೇಗೆ ಜೀವಗಳನ್ನು ಉಳಿಸುತ್ತಾರೆ?'
            : 'Q: Do you think Spider-Man could stop the spread of diseases like asthma or malaria in 20 years? If Peter Parker was a doctor instead of a superhero, how would he use science and health policies to save lives?'
          }
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg3.gif"
          alt="Good Health and Well-being"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
          {globalState.language === 'kn' 
            ? 'A: ಸ್ಪೈಡರ್-ಮ್ಯಾನ್ ಖಳನಾಯಕರನ್ನು ನಿಲ್ಲಿಸಬಹುದು, ಆದರೆ ಸ್ವಚ್ಚ ವಾಯು ನಿಯಮಗಳು ಮತ್ತು ಆರೋಗ್ಯ ಶಿಕ್ಷಣದಂತಹ ನೀತಿಗಳು ನಿಜವಾದ ಜೀವ ರಕ್ಷಕರು. ಪೀಟರ್ ಪಾರ್ಕರ್ ಸಮಸ್ಯೆಗಳನ್ನು ಪರಿಹರಿಸಲು ಅಧ್ಯಯನ ಮಾಡುವಂತೆ, ನಾವು ಜನರನ್ನು ರಕ್ಷಿಸಲು ವಿಜ್ಞಾನ ಮತ್ತು ಆರೋಗ್ಯ ಉದ್ದೇಶಗಳನ್ನು ಅಗತ್ಯವಿದೆ!'
            : 'A: Spider-Man can stop villains, but policies like clean air regulations and health education would be the real lifesavers. Just like Peter Parker would study to solve problems, we need science and health initiatives to protect people!'
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
              ? 'ಈ ಗುರಿಯು ಜನರು ಆರೋಗ್ಯವಾಗಿದ್ದು ದೀರ್ಘಕಾಲ ಸುಖವಾಗಿರಲು ಸಹಾಯ ಮಾಡುವುದು. ಉತ್ತಮ ಆರೋಗ್ಯ ಎಂದರೆ ಸ್ವಚ್ಚ ನೀರನ್ನು ಕುಡಿಯುವುದು, ಆರೋಗ್ಯಕರ ಆಹಾರ ತಿನ್ನುವುದು ಮತ್ತು ಮಲೇರಿಯಾ ಅಥವಾ ಜ್ವರದಂತೆ ರೋಗಗಳು ಹಬ್ಬದಂತೆ ನೋಡಿಕೊಳ್ಳುವುದು.'
              : 'This goal is all about making sure people are healthy and live long, happy lives. Good health means having clean water to drink, eating healthy food, and making sure diseases like malaria or the flu don’t spread.'
            }
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">
            {globalState.language === 'kn' ? 'ಜಾಗೃತಿಯು ಮತ್ತು ಉದ್ದೇಶ:' : 'Awareness and Purpose:'}
          </h3>
          <p className="text-green-700">
            {globalState.language === 'kn' 
              ? 'ಅನೇಕ ಜನರು ಸ್ವಚ್ಚ ನೀರು, ಆರೋಗ್ಯಕರ ಆಹಾರ ಅಥವಾ ಸರಿಯಾದ ಔಷಧಿಗಳಿಲ್ಲದ ಕಾರಣದಿಂದ ಅನಾರೋಗ್ಯಗೊಳ್ಳುತ್ತಾರೆ. ಉದಾಹರಣೆಗೆ, ಕೆಟ್ಟ ನೀರು ಜನರಿಗೆ ರೋಗಗಳನ್ನು ಕೊಡಬಹುದು, ಮತ್ತು ಹತ್ತಿರದಲ್ಲಿ ವೈದ್ಯರಿಲ್ಲದಿದ್ದರೆ ಅನಾರೋಗ್ಯವಾದಾಗ ಚಿಕಿತ್ಸೆ ಪಡೆಯಲು ಸಾಧ್ಯವಿಲ್ಲ. ಜನರಿಗೆ ಹೇಗೆ ಅವರ ಆರೋಗ್ಯದ যতೇನು ಮಾಡಿಕೊಳ್ಳಬೇಕು ಎಂದು ಕಲಿಸುವುದು ಮತ್ತು ಅವರಿಗೆ ಅಗತ್ಯವಾದ ಉಪಕರಣಗಳನ್ನು ಒದಗಿಸುವುದು ಮುಖ್ಯ.'
              : 'Many people get sick because they don’t have clean water, healthy food, or proper medicines. For example, dirty water can give people diseases, and not having doctors nearby means that many people can’t get treated when they’re sick. It’s important to teach people how to take care of their health and provide the tools they need.'
            }
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-purple-800">
          {globalState.language === 'kn' ? 'ಉದಾಹರಣೆ:' : 'Example:'}
        </h3>
        <p className="text-purple-700">
          {globalState.language === 'kn' 
            ? 'ಕಲ್ಪಿಸಿ ನಿಮ್ಮ ಶಾಲೆಗೆ ಸ್ವಚ್ಚ ಕುಡಿಯುವ ನೀರಿಲ್ಲದೆ, ವಿದ್ಯಾರ್ಥಿಗಳು ಅನಾರೋಗ್ಯಗೊಳ್ಳಲು ಪ್ರಾರಂಭಿಸುತ್ತಾರೆ. ಸರಳ ಪರಿಹಾರವೆಂದರೆ ನೀರನ್ನು ಸುರಕ್ಷಿತವಾಗಿಡಲು ನೀರಿನ ಫಿಲ್ಟರ್‌ಗಳನ್ನು ಹೊಂದಿರಬೇಕು. ಆದರೆ ಆಹಾರ ಮುಂಚೆ ಮತ್ತು ಶೌಚಾಲಯ ಬಳಸಿ ಆದ ನಂತರ ಕೈಗಳನ್ನು ತೊಳೆಯಲು ಎಲ್ಲರಿಗೂ ಕಲಿಸುವುದು ಮುಖ್ಯ, ಇದರಿಂದ ಕೀಟಾಣುಗಳು ಹಬ್ಬುವುದನ್ನು ತಡೆಗಟ್ಟಬಹುದು.'
            : 'Imagine your school doesn’t have clean drinking water, and students start getting sick. The simple solution is to have water filters to make sure the water is safe. But it’s also important to teach everyone to wash their hands before eating and after using the toilet to stop germs from spreading.'
          }
        </p>
      </div>

      {/* Real-Life Solution Section */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800">
          {globalState.language === 'kn' ? 'ವಾಸ್ತವ ಪರಿಹಾರ:' : 'Real-Life Solution:'}
        </h3>
        <p className="text-yellow-700">
          {globalState.language === 'kn' 
            ? 'ನಿಮ್ಮ ಶಾಲೆ ಅಥವಾ ಸಮುದಾಯದಲ್ಲಿ, ನೀವು ಜನರಿಗೆ ಕೈ ತೊಳೆಯುವದಿನ ಮಹತ್ವ, ಆರೋಗ್ಯಕರ ಆಹಾರ ತಿನ್ನುವುದು ಮತ್ತು ಅನಾರೋಗ್ಯವನ್ನು ತಡೆಗಟ್ಟಲು ಸ್ವಚ್ಚವಾಗಿರುವ ಬಗ್ಗೆ ಕಲಿಸಲು ಪೋಸ್ಟರ್‌ಗಳನ್ನು ಸೃಷ್ಟಿಸಬಹುದು ಅಥವಾ ಒಂದು ಸಣ್ಣ ಅಭಿಯಾನವನ್ನು ಏರ್ಪಡಿಸಬಹುದು. ನೀವು ಸಹ ಸಹಾಯ ಅಗತ್ಯವಿರುವ ಪ್ರದೇಶಗಳಿಗೆ ಸ್ವಚ್ಚ ಕುಡಿಯುವ ನೀರನ್ನು ಒದಗಿಸುವ ಸಂಸ್ಥೆಗಳಿಗೆ ನಿಧಿಗಳನ್ನು ಸಂಗ್ರಹಿಸಬಹುದು.'
            : 'In your school or community, you can create posters or organize a small campaign to teach people about the importance of washing hands, eating healthy food, and staying clean to prevent illnesses. You can also help collect funds for organizations that provide clean drinking water to areas in need.'
          }
        </p>
      </div>


        {/* Button to Show ModulePath */}
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

export default Module3;
