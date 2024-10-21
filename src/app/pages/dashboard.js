import React, { useState } from 'react'; // Import useState from React
import Image from 'next/image';
import ModulePath from './ModulePath'; // Import the ModulePath component
import { globalState } from '../globalState'; // Import the global state

const Dashboard = () => {
  const [startLearning, setStartLearning] = useState(false); // State to control rendering

  // Access points from global state
  const points = globalState.points;
  const maxPoints = 50; // Max points for full progress (adjust based on your requirements)

  // Calculate progress as a percentage
  const progressWidth = (points / maxPoints) * 100;

  if (startLearning) {
    return <ModulePath />; // Render ModulePath if the button is clicked
  }

  return (
    <div>
      {/* Banner */}
      <div className="rounded-lg overflow-hidden">
        <Image
          src="/dashboard-banner.png"
          alt="Dashboard Banner"
          width={800}
          height={300}
          className="w-full"
        />
      </div>

      {/* Learning Path */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-black">Start learning path</h2>
        <div className="w-full bg-gray-200 rounded-full mt-4">
          <div
            style={{ width: `${progressWidth}%`, backgroundColor: 'green' }} // Dynamic width and color
            className="h-4 rounded-full"
          />
        </div>
        <button
          className="mt-9 bg-black text-white py-2 px-9 rounded-lg text-lg cursor-pointer"
          onClick={() => setStartLearning(true)} // Set state to true on button click
        >
          Start Now
        </button>
      </div>

      {/* Ask Me Section */}
      <div className="fixed bottom-10 right-10 flex items-center">
        <Image
          src="/dog.gif"
          alt="Ask Me!!"
          width={120}
          height={120}
          className="cursor-pointer"
        />
        <span className="bg-green-300 text-black font-semibold px-4 py-2 rounded-full mt-1 text-lg absolute -top-8">
          Ask Me !!
        </span>
      </div>
    </div>
  );
};

export default Dashboard;
