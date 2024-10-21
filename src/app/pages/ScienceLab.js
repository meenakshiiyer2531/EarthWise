import { useState } from 'react';
import Image from 'next/image';
import Experiment1 from './Experiment1'; // Import Experiment1 component

const ScienceLab = () => {
  const [selectedExperiment, setSelectedExperiment] = useState(null); // State to track selected experiment
  const [isExperimentActive, setIsExperimentActive] = useState(false); // State to track if an experiment is active

  const experiments = [
    { id: 1, name: 'Experiment 1', image: '/path-logo/image1.png', component: <Experiment1 /> },
    { id: 2, name: 'Experiment 2', image: '/path-logo/image2.png', component: <Experiment1 /> },
    { id: 3, name: 'Experiment 3', image: '/path-logo/image3.png', component: <Experiment1 /> },
    { id: 4, name: 'Experiment 4', image: '/path-logo/image4.png', component: <Experiment1 /> },
    { id: 5, name: 'Experiment 5', image: '/path-logo/image5.png', component: <Experiment1 /> },
    { id: 6, name: 'Experiment 6', image: '/path-logo/image6.png', component: <Experiment1 /> },
    { id: 7, name: 'Experiment 7', image: '/path-logo/image7.png', component: <Experiment1 /> },
    { id: 8, name: 'Experiment 8', image: '/path-logo/image8.png', component: <Experiment1 /> },
    { id: 9, name: 'Experiment 9', image: '/path-logo/image9.png', component: <Experiment1 /> },
    { id: 10, name: 'Experiment 10', image: '/path-logo/image10.png', component: <Experiment1 /> },
    { id: 11, name: 'Experiment 11', image: '/path-logo/image11.png', component: <Experiment1 /> },
    { id: 12, name: 'Experiment 12', image: '/path-logo/image12.png', component: <Experiment1 /> },
    { id: 13, name: 'Experiment 13', image: '/path-logo/image13.png', component: <Experiment1 /> },
    { id: 14, name: 'Experiment 14', image: '/path-logo/image14.png', component: <Experiment1 /> },
    { id: 15, name: 'Experiment 15', image: '/path-logo/image15.png', component: <Experiment1 /> },
    { id: 16, name: 'Experiment 16', image: '/path-logo/image16.png', component: <Experiment1 /> },
    { id: 17, name: 'Experiment 17', image: '/path-logo/image17.png', component: <Experiment1 /> },
  ];

  const handleExperimentClick = (experiment) => {
    setSelectedExperiment(experiment); // Set the clicked experiment
    setIsExperimentActive(true); // Set experiment active state to true
  };

  // Get the component for the selected experiment
  const renderSelectedExperiment = () => {
    return selectedExperiment ? selectedExperiment.component : null;
  };

  return (
    <div className="flex bg-white min-h-screen">
      {/* Experiment Section */}
      <div className="flex-1 pt-9">
        
        {/* Render ScienceLab only if no experiment is active */}
        {!isExperimentActive && (
          <div className="flex flex-col items-center w-full mt-4">
            <div className="grid grid-cols-5 gap-10 mt-0">
              {experiments.map((experiment) => (
                <div
                  key={experiment.id}
                  className="relative cursor-pointer"
                  onClick={() => handleExperimentClick(experiment)} // Handle click to set selected experiment
                >
                  <div className="w-[264px] h-[98px] bg-[#ac60da] rounded-[18px] flex flex-col items-center justify-center text-center">
                    
                    <div className="text-white text-3xl font-semibold font-['Afacad'] leading-[30px]">
                      {experiment.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Render the selected experiment component */}
        <div className="mt-8">
          {renderSelectedExperiment()}
        </div>
      </div>
    </div>
  );
};

export default ScienceLab;
