import { useState, useEffect } from 'react';
import { franc } from 'franc'; // Updated import for the franc library
import ModulePath from './ModulePath';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Module17 = () => {
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
      MODULE 17: Partnership for the Goals
      Q: If The Avengers teamed up with world scientists in 25 years, do you think they could solve all the SDGs? What kind of teamwork could we start today to make sure we have a super future?
      A: The Avengers know that teamwork is key! If countries, companies, and communities start working together now, we could tackle all the SDGs like a super team. Everyone has a role to play in saving the world!
      What it is: SDG 17 emphasizes the importance of partnerships and collaboration among countries, organizations, and communities to achieve the SDGs.
      Awareness and Purpose: Many global challenges cannot be solved alone. SDG 17 encourages cooperation and sharing resources, knowledge, and technology to tackle these challenges effectively.
      Example: Think about a project where different schools work together to tackle local issues like waste management or climate change. By collaborating, they can share ideas, resources, and strategies to make a bigger impact.
      Real-Life Solution: You can foster partnerships by engaging in group projects with other schools or organizations that focus on social or environmental issues. Building connections with others who share similar goals can lead to innovative solutions and greater impact.
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 17: Partnership for the goals</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
        Q: If The Avengers teamed up with world scientists in 25 years, do you think they could solve all the SDGs? What kind of teamwork could we start today to make sure we have a super future?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-8">
        <img src="/sdg17.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
        A: The Avengers know that teamwork is key! If countries, companies, and communities start working together now, we could tackle all the SDGs like a super team. Everyone has a role to play in saving the world!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
          SDG 17 emphasizes the importance of partnerships and collaboration among countries, organizations, and communities to achieve the SDGs.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
          Many global challenges cannot be solved alone. SDG 17 encourages cooperation and sharing resources, knowledge, and technology to tackle these challenges effectively.
          </p>
        </div>
      </div>

      {/* Example and Real-Life Solution Sections */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Example:</h3>
          <p className="text-yellow-700">
        Think about a project where different schools work together to tackle local issues like waste management or climate change. By collaborating, they can share ideas, resources, and strategies to make a bigger impact.
          </p>
        </div>
        <div className="bg-yellow-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
          <p className="text-yellow-700">
          You can foster partnerships by engaging in group projects with other schools or organizations that focus on social or environmental issues. Building connections with others who share similar goals can lead to innovative solutions and greater impact.
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

export default Module17;
