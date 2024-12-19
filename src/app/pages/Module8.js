
import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './Module-g1';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module8 = () => {
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
      MODULE 8 : DECENT WORK AND ECONOMICAL GROWTH 
     Q: If Scrooge McDuck kept swimming in his money vault 30 years from now, but there were no jobs for people outside, would he still be happy? How can we create good jobs for everyone, so the world prospers like Duckburg?
     A: Scrooge McDuck would realize that real wealth comes from everyone having decent work and economic growth. Creating green jobs and sustainable industries today means more people will have opportunities, and Duckburg’s wealth will grow for all!
     What it is: SDG 8 focuses on promoting sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
     Awareness and Purpose: Many workers face poor working conditions, low pay, or job insecurity. SDG 8 emphasizes the importance of creating jobs that are safe, fair, and promote economic growth without harming the environment.
     Example: Imagine a factory that pays its workers fairly and provides safe working conditions. The workers feel valued, and the factory produces goods responsibly, helping the economy grow.
     Real-Life Solution: You can support decent work by learning about companies that prioritize fair labor practices and sustainable production. You could start a campaign in your school to encourage students to support local businesses that treat their employees well.
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
      alert('No voice available for language: ${language}');
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 8 : DECENT WORK AND ECONOMIC GROWTH </h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          Q: If Scrooge McDuck kept swimming in his money vault 30 years from now, but there were no jobs for people outside, would he still be happy? How can we create good jobs for everyone, so the world prospers like Duckburg?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg8.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          A: Scrooge McDuck would realize that real wealth comes from everyone having decent work and economic growth. Creating green jobs and sustainable industries today means more people will have opportunities, and Duckburg’s wealth will grow for all!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
           SDG 8 focuses on promoting sustained, inclusive, and sustainable economic growth, full and productive employment, and decent work for all.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
           Many workers face poor working conditions, low pay, or job insecurity. SDG 8 emphasizes the importance of creating jobs that are safe, fair, and promote economic growth without harming the environment.
          </p>
        </div>
      </div>

      {/* Example and Real-Life Solution Sections */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Example:</h3>
          <p className="text-yellow-700">
            Imagine a factory that pays its workers fairly and provides safe working conditions. The workers feel valued, and the factory produces goods responsibly, helping the economy grow.
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
          <p className="text-yellow-700">
          Real-Life Solution: You can support decent work by learning about companies that prioritize fair labor practices and sustainable production. You could start a campaign in your school to encourage students to support local businesses that treat their employees well.
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

export default Module8;