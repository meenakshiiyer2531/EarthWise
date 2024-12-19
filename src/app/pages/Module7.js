

import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './ModulePath';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module7 = () => {
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
      MODULE 7 : AFFORDABLE & CLEAN ENERGY
     Q: If Iron Man’s suit was powered by fossil fuels, do you think he’d still be flying around in 40 years, or would his suit run out of power? Could renewable energy keep his suit flying forever?
     A: Iron Man would definitely switch to renewable energy! Solar, wind, and other clean sources would keep his suit (and our world) running smoothly. Without it, not even Tony Stark’s technology could save the day from climate change. 
     What it is: SDG 7 aims to ensure access to affordable, reliable, sustainable, and modern energy for all. This includes using renewable energy sources like solar, wind, and hydro power.
     Awareness and Purpose:Many people still rely on traditional fuels that harm the environment. SDG 7 promotes the use of clean energy to reduce pollution and combat climate change while ensuring that energy is accessible to everyone.
     Example: Think of solar panels on rooftops that convert sunlight into electricity. This clean energy source can power homes without polluting the air.
     Real-Life Solution: You can help promote clean energy by learning about renewable energy sources and sharing that knowledge with your community. You could organize workshops or projects to educate others about energy-saving practices, such as using energy-efficient light bulbs or solar chargers.
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 7 : AFFORDABLE & CLEAN ENERGY</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          Q: If Iron Man’s suit was powered by fossil fuels, do you think he’d still be flying around in 40 years, or would his suit run out of power? Could renewable energy keep his suit flying forever?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg7.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          A:  Iron Man would definitely switch to renewable energy! Solar, wind, and other clean sources would keep his suit (and our world) running smoothly. Without it, not even Tony Stark’s technology could save the day from climate change. 
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
          SDG 7 aims to ensure access to affordable, reliable, sustainable, and modern energy for all. This includes using renewable energy sources like solar, wind, and hydro power.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
          Real-Life Solution: You can help promote clean energy by learning about renewable energy sources and sharing that knowledge with your community. You could organize workshops or projects to educate others about energy-saving practices, such as using energy-efficient light bulbs or solar chargers.
          </p>
        </div>
      </div>

      {/* Example and Real-Life Solution Sections */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Example:</h3>
          <p className="text-yellow-700">
           Think of solar panels on rooftops that convert sunlight into electricity. This clean energy source can power homes without polluting the air.
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
          <p className="text-yellow-700">
          You can help promote clean energy by learning about renewable energy sources and sharing that knowledge with your community. You could organize workshops or projects to educate others about energy-saving practices, such as using energy-efficient light bulbs or solar chargers.
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

export default Module7;