import { useState } from 'react';
import Image from 'next/image';
import Module1 from './Module1'; // Import Module1 component
// Import other modules as needed
import Module2 from './Module2'; 
import Moudle3 from './Module3';
import Moudle4 from './Module4';
import Module5 from './Module5';
import Quiz1 from './Quiz1';
import Quiz2 from './Quiz2';

const ModulePath = () => {
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [isModuleActive, setIsModuleActive] = useState(false); // State to track if a module is active

  const modules = [
    { id: 1, name: 'MODULE 1', image: '/path-logo/image 23.png', component: <Module1 /> },
    { id: 2, name: 'MODULE 2', image: '/path-logo/image 24.png', component: <Module2 /> },
    { id: 3, name: 'QUIZ 1', image: '/path-logo/quiz.png', component: <Quiz1 /> },
    { id: 4, name: 'MODULE 3', image: '/path-logo/image 44.png', component: <Moudle3 /> },
    { id: 5, name: 'MODULE 4', image: '/path-logo/image 26.png', component: <Moudle4 /> },
    { id: 6, name: 'QUIZ 2', image: '/path-logo/quiz.png', component: <Quiz2 /> },
    { id: 7, name: 'MODULE 5', image: '/path-logo/image 27.png', component: <Module5 /> },
    { id: 8, name: 'MODULE 6', image: '/path-logo/image 28.png', component: <Module1 /> },
    { id: 9, name: 'QUIZ 3', image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 10, name: 'MODULE 7', image: '/path-logo/image 29.png', component: <Module1 /> },
    { id: 11, name: 'MODULE 8', image: '/path-logo/image 30.png', component: <Module1 /> },
    { id: 12, name: 'QUIZ 4', image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 13, name: 'MODULE 9', image: '/path-logo/image 31.png', component: <Module1 /> },
    { id: 14, name: 'MODULE 10', image: '/path-logo/image 32.png', component: <Module1 /> },
    { id: 15, name: 'QUIZ 5', image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 16, name: 'MODULE 11', image: '/path-logo/image 33.png', component: <Module1 /> },
    { id: 17, name: 'MODULE 12', image: '/path-logo/image 34.png', component: <Module1 /> },
    { id: 18, name: 'QUIZ 6', image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 19, name: 'MODULE 13', image: '/path-logo/image 35.png', component: <Module1 /> },
    { id: 20, name: 'MODULE 14', image: '/path-logo/image 36.png', component: <Module1 /> },
    { id: 21, name: 'QUIZ 7', image: '/path-logo/quiz.png', component: <Module1 /> },
    { id: 22, name: 'MODULE 15', image: '/path-logo/image 37.png', component: <Module1 /> },
    { id: 23, name: 'MODULE 16', image: '/path-logo/image 38.png', component: <Module1 /> },
    { id: 24, name: 'MODULE 17', image: '/path-logo/image 39.png', component: <Module1 /> },
    { id: 25, name: 'QUIZ 8', image: '/path-logo/quiz.png', component: <Module1 /> },
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
                      alt={module.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                  </div>
                  <p className="text-lg font-semibold text-gray-800 mt-2">{module.name}</p>
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
