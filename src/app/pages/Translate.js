import React, { useState } from 'react';
import Sidebar from './SideBar'; // Import the Sidebar component
import { globalState } from '../globalState'; // Import the global state

const TranslatePage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(globalState.language || 'en'); // Initialize from globalState
  const [showSidebar, setShowSidebar] = useState(false);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    globalState.language = language; // Update global state with selected language
  };

  const handleNext = () => {
    setShowSidebar(true); // Show the sidebar after language selection
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen"
      style={{ backgroundColor: '#286031' }} // Set background color
    >
      {!showSidebar ? (
        <div
          className="w-full max-w-md bg-white rounded-lg shadow-lg p-6"
          style={{ color: '#000' }} // Set text color to black
        >
          <h2 className="mb-4 text-center">Kindly select the language you wish to study in:</h2>
          <div className="mb-4">
            <input
              type="radio"
              id="english"
              value="en"
              checked={selectedLanguage === 'en'}
              onChange={handleLanguageChange}
            />
            <label htmlFor="english" className="ml-2">English</label>
          </div>
          <div className="mb-4">
            <input
              type="radio"
              id="kannada"
              value="kn"
              checked={selectedLanguage === 'kn'}
              onChange={handleLanguageChange}
            />
            <label htmlFor="kannada" className="ml-2">Kannada</label>
          </div>
          <button
            onClick={handleNext}
            className="mt-4 bg-black text-white py-2 px-4 rounded w-full hover:bg-grey"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <Sidebar /> {/* Render the Sidebar component when showSidebar is true */}
        </div>
      )}
    </div>
  );
};

export default TranslatePage;
