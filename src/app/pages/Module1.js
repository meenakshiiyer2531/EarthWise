import { useState } from 'react';
import ModulePath from './ModulePath';

const Module1 = () => {
  const [showModulePath, setShowModulePath] = useState(false); // State to control rendering of ModulePath

  // Function to handle showing the ModulePath
  const handleShowModulePath = () => {
    setShowModulePath(true);
  };

  if (showModulePath) {
    return <ModulePath />; // Render ModulePath if the state is true
  }
  return (
    <div className="bg-white py-6 px-10 rounded-lg shadow-md h-auto relative"> {/* Added relative positioning */}
      {/* Combined Heading and Question Section */}
      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-600">MODULE 1: NO POVERTY</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
          Q: Imagine if Aladdin could use his magic carpet to bring food and resources to every corner of the world. Do you think poverty would still exist 50 years from now if we all had access to a magic carpet like him?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img src="/sdg1.gif" alt="Aladdin" className="rounded-lg shadow-md" />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg text-blue-800">
          A: If we managed resources well like Aladdin’s quick journeys, poverty could be reduced because everyone would get what they need on time. But without planning, even magic wouldn’t be enough – just like running out of wishes!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
            Poverty means not having enough money to buy the things you need, like food, clothes, or even a place to live. SDG 1 wants to make sure that everyone has enough money to live a decent life, no matter where they are born.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
            Poverty means not having basic things like clean water, education, or jobs. These people are stuck in a cycle where they can't make enough money to improve their lives. We need to break this cycle by giving people better opportunities.
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-purple-800">Example:</h3>
        <p className="text-purple-700">
          Plant seeds in various soil types and observe how the growth varies. Discuss how access to fertile soil can affect poverty rates by influencing food production.
        </p>
      </div>

      {/* Real-Life Solution Section */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
        <p className="text-yellow-700">
          You can start small by organizing a donation drive in your school to collect clothes, books, or food for people in need. You can also learn about organizations that provide small loans to poor people to start their own small businesses, like a vegetable shop or sewing clothes.
        </p>
      </div>

      {/* Button to Show ModulePath */}
      <div className="absolute bottom-4 right-4"> {/* Positioned button in the same manner */}
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

export default Module1;
