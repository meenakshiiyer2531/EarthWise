// src/app/pages/Dashboard.js
import React, { useState } from 'react';
import Image from 'next/image';
import ModulePath from './ModulePath';
import { globalState } from '../globalState'; // Directly import the globalState

const Dashboard = () => {
  const [startLearning, setStartLearning] = useState(false);

  // Access global state values directly
  const { points, language } = globalState; 
  const maxPoints = 50;

  const progressWidth = (points / maxPoints) * 100;

  if (startLearning) {
    return <ModulePath />;
  }

  return (
    <div>
      {/* Dashboard Banner Image */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/dashboard-banner.png"
          alt={language === 'kn' ? 'ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ ಬ್ಯಾಂನರ್' : 'Dashboard Banner'} // Localized alt text
          width={800}
          height={300}
          className="w-full"
        />
      </div>

      {/* Start Learning Path */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-black">
          {language === 'kn' ? 'ಊತಲಿನ ಮಾರ್ಗವನ್ನು ಪ್ರಾರಂಭಿಸಿ' : 'Start learning path'} {/* Localized text */}
        </h2>
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            style={{ width: `${progressWidth}%`, backgroundColor: 'green' }}
            className="h-4 rounded-full"
          />
        </div>
        <button
          className="mt-9 bg-black text-white py-2 px-9 rounded-lg text-lg cursor-pointer"
          onClick={() => {
            setStartLearning(true);
            globalState.incrementPoints(); // Use global function to increment points
          }}
        >
          {language === 'kn' ? 'ಈಗ ಪ್ರಾರಂಭಿಸಿ' : 'Start Now'} {/* Localized button text */}
        </button>
      </div>

      {/* Floating "Ask Me" Button */}
      <div className="fixed bottom-10 right-10 flex items-center">
        <Image
          src="/dog.gif"
          alt={language === 'kn' ? 'ನಾನು ಕೇಳುತ್ತೇನೆ !!' : 'Ask Me !!'} // Localized alt text
          width={120}
          height={120}
          className="cursor-pointer"
        />
        <span className="bg-green-300 text-black font-semibold px-3 py-1 rounded-full mt-1 text-sm absolute -top-6">
          {language === 'kn' ? 'ನಾನು ಕೇಳುತ್ತೇನೆ !!' : 'Ask Me !!'} {/* Localized text */}
        </span>
      </div>

    
    </div>
  );
};

export default Dashboard;
