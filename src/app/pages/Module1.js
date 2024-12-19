import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g1';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module1 = () => {
  const [showModulePath, setShowModulePath] = useState(false); // State to control rendering of ModulePath
  const [voices, setVoices] = useState([]); // State to hold available voices

  // Language map for Franc to speechSynthesis
  const languageMap = {
    eng: 'en-US',
    hin: 'hi-IN',
    kan: 'kn-IN',
  };

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
    const text = `
      MODULE 1: No Poverty
      Q: Imagine if Aladdin used his magic carpet to bring food and wealth to every corner of the world. If we all had a magic carpet like him, would poverty still exist in the world after 50 years?
      A: If we managed our resources well like Aladdin’s swift journeys, everyone could get what they need immediately. But without planning, magic alone won’t suffice – luck may just run out!
      What it is: Poverty means not having enough money to buy what you need. No food, no clothes, or a roof over your head. SDG 1 aims to ensure everyone has enough money for a decent life, regardless of where they were born.
      Awareness and Purpose: Poverty means having no access to clean water, education, or jobs. These people are trapped in a cycle because they can’t earn enough money to improve their lives. We need to break this cycle by providing better opportunities.
      Example: Observing how planting seeds at different soil levels affects growth. Discussing how access to fertile soil influences poverty levels in food production.
      Real-Life Solution: You can start small by organizing donation drives for clothes, books, or food for the needy at school. You could also learn about organizations that provide small loans for their concerns, making them even better.
    `;

    // Detect the language using Franc
    const langCode = franc(text);

    // Map detected language to speechSynthesis language
    const language = languageMap[langCode] || 'en-US'; // Default to English (US)

    // Use the SpeechSynthesis API
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 1: No Poverty</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          Q: Imagine if Aladdin used his magic carpet to bring food and wealth to every corner of the world. If we all had a magic carpet like him, would poverty still exist in the world after 50 years?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg1.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          A: If we managed our resources well like Aladdin’s swift journeys, everyone could get what they need immediately. But without planning, magic alone won’t suffice – luck may just run out!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
            Poverty means not having enough money to buy what you need. No food, no clothes, or a roof over your head. SDG 1 aims to ensure everyone has enough money for a decent life, regardless of where they were born.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
            Poverty means having no access to clean water, education, or jobs. These people are trapped in a cycle because they can’t earn enough money to improve their lives. We need to break this cycle by providing better opportunities.
          </p>
        </div>
      </div>

      {/* Example and Real-Life Solution Sections */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Example:</h3>
          <p className="text-yellow-700">
            Observing how planting seeds at different soil levels affects growth. Discussing how access to fertile soil influences poverty levels in food production.
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
          <p className="text-yellow-700">
            You can start small by organizing donation drives for clothes, books, or food for the needy at school. You could also learn about organizations that provide small loans for their concerns, making them even better.
          </p>
        </div>
      </div>

      {/* Button to Show Module Path */}
      <button
        onClick={handleShowModulePath}
        className="mt-4 bg-black text-white py-2 px-4 rounded hover:bg-grey"
      >
        NEXT
      </button>

      {/* Ask Me Section - Can I speak? GIF */}
      <div className="fixed bottom-2 right-10 flex items-center cursor-pointer" onClick={handleTextToSpeech}>
        <Image 
          src="/dog.gif" 
          alt="Can I speak?" 
          width={120} 
          height={120} 
          className="cursor-pointer" 
        />
        <span className="bg-green-300 text-black font-semibold px-3 py-1 rounded-full mt-1 text-sm absolute -top-6">
          Can I speak?
        </span>
      </div>
    </div>
  );
};

export default Module1;
