
import { useState } from 'react';
import ModulePath from './ModulePath';

const Module3 = () => {
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 3 : GOOD HEALTH AND WELL-BEING</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
        Q:Do you think Spider-Man could stop the spread of diseases like asthma or malaria in 20 years? If Peter Parker was a doctor instead of a superhero, how would he use science and health policies to save lives?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg3.gif"
          alt="Hunger Games"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
        A: Spider-Man can stop villains, but policies like clean air regulations and health education would be the real lifesavers. Just like Peter Parker would study to solve problems, we need science and health initiatives to protect people!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
          This goal is all about making sure people are healthy and live long, happy lives. Good health means having clean water to drink, eating healthy food, and making sure diseases like malaria or the flu don’t spread.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
          Many people get sick because they don’t have clean water, healthy food, or proper medicines. For example, dirty water can give people diseases, and not having doctors nearby means that many people can’t get treated when they’re sick. It’s important to teach people how to take care of their health and provide the tools they need.
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-purple-800">Example:</h3>
        <p className="text-purple-700">
        Imagine your school doesn’t have clean drinking water, and students start getting sick. The simple solution is to have water filters to make sure the water is safe. But it’s also important to teach everyone to wash their hands before eating and after using the toilet to stop germs from spreading.
        </p>
      </div>

      {/* Real-Life Solution Section */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
        <p className="text-yellow-700">
        In your school or community, you can create posters or organize a small campaign to teach people about the importance of washing hands, eating healthy food, and staying clean to prevent illnesses. You can also help collect funds for organizations that provide clean drinking water to areas in need.
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

export default Module3;
