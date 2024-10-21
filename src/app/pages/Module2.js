import { useState } from 'react';
import ModulePath from './ModulePath';

const Module2 = () => {
  const [showModulePath, setShowModulePath] = useState(false); // State to control rendering of ModulePath

  // Function to handle showing the ModulePath
  const handleShowModulePath = () => {
    setShowModulePath(true);
  };

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }
  return (
    <div className="bg-white py-6 px-10 rounded-lg shadow-md h-auto relative">
      {/* Heading Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">MODULE 2: ZERO HUNGER</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          Q: If The Hunger Games became real in 30 years, where food was scarce and people had to fight for it, what could we do today to prevent that future? Can we turn the "Hunger Games" into "Healthy Games" by changing farming now?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg2.gif"
          alt="Hunger Games"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
          A: Yes! By using smart farming today—like hydroponics and sustainable crops—we could prevent future food shortages. We could turn the Hunger Games into a healthy world where everyone has enough to eat.
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
            The zero hunger aim wants to make sure everyone gets enough food to eat every day. Many people around the world go to bed hungry because they don’t have enough food or can’t grow enough crops.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
            Hunger is often caused by things like droughts (when there’s no rain) or poor farming methods that damage the soil. Also, some people waste food, while others don’t have enough. We need to find ways to grow food better and make sure everyone gets their fair share.
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-purple-800">Example:</h3>
        <p className="text-purple-700">
          Think of a garden. If you plant too many crops without taking care of the soil, the plants might stop growing well, and soon you won't have enough to eat. But if you learn how to take care of the soil by using compost (recycled food waste) and rotating crops, your garden can grow plenty of food for you and your neighbors.
        </p>
      </div>

      {/* Real-Life Solution Section */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
        <p className="text-yellow-700">
          You can start a small garden at school or at home, where you learn how to grow vegetables like tomatoes or beans. You can also visit a local farm to learn how farmers grow food and how you can help people who don’t have enough food by not wasting what you eat.
        </p>
      </div>

      {/* Button to Show ModulePath */}
      <div className="absolute bottom-4 right-4">
        <button
          onClick={handleShowModulePath} // Change state to show ModulePath
          className="bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition duration-200"
        >
          BACK
        </button>
      </div>
    </div>
  );
};

export default Module2;
