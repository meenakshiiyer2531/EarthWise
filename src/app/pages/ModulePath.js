// src/app/pages/ModulePath.js
import { useState, useContext } from 'react';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state // Adjust the path according to your folder structure
import Module1 from './Module1'; 
import Module2 from './Module2'; 
import Module3 from './Module3'; 
import Module4 from './Module4'; 
import Module5 from './Module5'; 
import Quiz1 from './Quiz1'; 
import Quiz2 from './Quiz2';
import Module17 from './Module17'; // Import Module17
import Module7 from './Module7';
import Module8 from './Module8';

const ModulePath = () => {
  
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [isModuleActive, setIsModuleActive] = useState(false); // State to track if a module is active

  // Define modules with names in both Kannada and English
  const modules = [
    { id: 1, name: { kn: 'ಮಾಡ್ಯೂಲ್ 1', en: 'MODULE 1' }, image: '/path-logo/image 23.png', component: <Module1 /> },
    { id: 2, name: { kn: 'ಮಾಡ್ಯೂಲ್ 2', en: 'MODULE 2' }, image: '/path-logo/image 24.png', component: <Module2 /> },
    { id: 3, name: { kn: 'ಕ್ವಿಜ್ 1', en: 'QUIZ 1' }, image: '/path-logo/quiz.png', component: <Quiz1 /> },
    { id: 4, name: { kn: 'ಮಾಡ್ಯೂಲ್ 3', en: 'MODULE 3' }, image: '/path-logo/image 44.png', component: <Module3 /> },
    { id: 5, name: { kn: 'ಮಾಡ್ಯೂಲ್ 4', en: 'MODULE 4' }, image: '/path-logo/image 26.png', component: <Module4 /> },
    { id: 6, name: { kn: 'ಕ್ವಿಜ್ 2', en: 'QUIZ 2' }, image: '/path-logo/quiz.png', component: <Quiz2 /> },
    { id: 7, name: { kn: 'ಮಾಡ್ಯೂಲ್ 5', en: 'MODULE 5' }, image: '/path-logo/image 27.png', component: <Module5 /> },
    { id: 8, name: { kn: 'ಮಾಡ್ಯೂಲ್ 6', en: 'MODULE 6' }, image: '/path-logo/image 28.png', component: <Module1 /> },
    { id: 9, name: { kn: 'ಕ್ವಿಜ್ 3', en: 'QUIZ 3' }, image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 10, name: { kn: 'ಮಾಡ್ಯೂಲ್ 7', en: 'MODULE 7' }, image: '/path-logo/image 29.png', component: <Module7 /> },
    { id: 11, name: { kn: 'ಮಾಡ್ಯೂಲ್ 8', en: 'MODULE 8' }, image: '/path-logo/image 30.png', component: <Module8 /> },
    { id: 12, name: { kn: 'ಕ್ವಿಜ್ 4', en: 'QUIZ 4' }, image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 13, name: { kn: 'ಮಾಡ್ಯೂಲ್ 9', en: 'MODULE 9' }, image: '/path-logo/image 31.png', component: <Module1 /> },
    { id: 14, name: { kn: 'ಮಾಡ್ಯೂಲ್ 10', en: 'MODULE 10' }, image: '/path-logo/image 32.png', component: <Module1 /> },
    { id: 15, name: { kn: 'ಕ್ವಿಜ್ 5', en: 'QUIZ 5' }, image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 16, name: { kn: 'ಮಾಡ್ಯೂಲ್ 11', en: 'MODULE 11' }, image: '/path-logo/image 33.png', component: <Module1 /> },
    { id: 17, name: { kn: 'ಮಾಡ್ಯೂಲ್ 12', en: 'MODULE 12' }, image: '/path-logo/image 34.png', component: <Module1 /> },
    { id: 18, name: { kn: 'ಕ್ವಿಜ್ 6', en: 'QUIZ 6' }, image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 19, name: { kn: 'ಮಾಡ್ಯೂಲ್ 13', en: 'MODULE 13' }, image: '/path-logo/image 35.png', component: <Module1 /> },
    { id: 20, name: { kn: 'ಮಾಡ್ಯೂಲ್ 14', en: 'MODULE 14' }, image: '/path-logo/image 36.png', component: <Module1 /> },
    { id: 21, name: { kn: 'ಕ್ವಿಜ್ 7', en: 'QUIZ 7' }, image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 22, name: { kn: 'ಮಾಡ್ಯೂಲ್ 15', en: 'MODULE 15' }, image: '/path-logo/image 37.png', component: <Module1 /> },
    { id: 23, name: { kn: 'ಮಾಡ್ಯೂಲ್ 16', en: 'MODULE 16' }, image: '/path-logo/image 38.png', component: <Module1 /> },
    { id: 24, name: { kn: 'ಮಾಡ್ಯೂಲ್ 17', en: 'MODULE 17' }, image: '/path-logo/image 39.png', component: <Module17 /> },
    { id: 25, name: { kn: 'ಕ್ವಿಜ್ 8', en: 'QUIZ 8' }, image: '/path-logo/quiz.png', component: <Module17 /> },
  ];

  const handleModuleClick = (module) => {
    setSelectedModule(module); // Set the clicked module's component
    setIsModuleActive(true); // Set module active state to true
  };

  // Get the component for the selected module
  const renderSelectedModule = () => {
    return selectedModule ? selectedModule.component : null;
  };

  return (
    <div className="flex-1 p-8 bg-white rounded-xl">
      {/* Render ModulePath only if no module is active */}
      {!isModuleActive && (
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            <div className="grid grid-cols-4 gap-6 relative">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className={`flex flex-col items-center p-4 transform transition-all duration-300 relative ${
                    selectedModule && selectedModule.id === module.id ? 'bg-white' : ''
                  }`}
                  onClick={() => handleModuleClick(module)} // Handle click to set selected module
                >
                  <div className="bg-black rounded-full p-6 relative cursor-pointer">
                    <Image
                      src={module.image}
                      alt={module.name.en} // Fallback for alt text
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mt-2">
                    {globalState.language === 'kn' ? module.name.kn : module.name.en} {/* Render module name based on language */}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Render the selected module component */}
      <div className="mt-8">
        {renderSelectedModule()}
      </div>
    </div>
  );
};

export default ModulePath;
