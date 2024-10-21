
import { useState } from 'react';
import ModulePath from './ModulePath';

const Module4 = () => {
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 4 : QUALITY EDUCATION</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
        Q: Imagine if Hermione Granger from Harry Potter could share her magic books with every child in the world. In 30 years, would we all be wizards with advanced knowledge? How could quality education create real-world magic?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg4.gif"
          alt="Hunger Games"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
        A: Just like Hermione’s knowledge makes her powerful, quality education for all would give everyone the tools to create their own magic—like solving global issues and inventing new technologies. The more knowledge we share, the stronger we all become!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
          This goal is about making sure every child, everywhere, gets a good education. Education helps people get better jobs and improve their lives. Without education, it’s hard for people to make a living or help their communities grow.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
          Many kids around the world don’t go to school because their families are poor or there are no schools nearby. Even in places with schools, not everyone has good teachers or enough books to learn properly. SDG 4 wants to make sure every child has a chance to learn no matter where they live.
          </p>
        </div>
      </div>

      {/* Example Section */}
      <div className="bg-purple-100 p-4 rounded-lg mb-4">
        <h3 className="text-lg font-bold text-purple-800">Example:</h3>
        <p className="text-purple-700">
        Imagine if your classroom didn’t have enough chairs, and the teacher had no chalk or books. It would be really hard to learn, right? But what if someone donated books and helped build more classrooms? More kids would be able to learn and grow up to help their communities.
        </p>
      </div>

      {/* Real-Life Solution Section */}
      <div className="bg-yellow-100 p-4 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-800">Real-Life Solution:</h3>
        <p className="text-yellow-700">
        You can volunteer to tutor younger kids who are struggling in their studies. You could also help collect old books and donate them to schools that need them. This way, you’re helping make education better for everyone.
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

export default Module4;
