
import { useState } from 'react';
import ModulePath from './ModulePath';

const Module5 = () => {
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
        <h1 className="text-3xl font-bold text-red-600">MODULE 5 : GENDER EQUALITY</h1>
      </div>

      {/* Question Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <h2 className="text-xl font-semibold text-blue-800">
        Q: If Wonder Woman was teaching girls and boys alike how to be superheroes 25 years from now, how do you think gender equality would change the world? Could more Wonder Women lead to more powerful teams in science and innovation?
        </h2>
      </div>

      {/* Image Section */}
      <div className="flex justify-center mb-4">
        <img
          src="/sdg5.gif"
          alt="Hunger Games"
          className="rounded-lg shadow-md w-120 h-80" // Adjust width and height as needed
        />
      </div>

      {/* Answer Section */}
      <div className="bg-blue-100 p-6 rounded-lg mb-4">
        <p className="text-lg font-semibold text-blue-800">
        A: Absolutely! Just like Wonder Woman shows that anyone can be a hero, gender equality would allow everyone, no matter their gender, to contribute equally. The more diverse our teams, the more powerful our world becomes!
        </p>
      </div>

      {/* Information Section */}
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">What it is:</h3>
          <p className="text-green-700">
          SDG 5 aims to achieve gender equality and empower all women and girls. This means providing equal opportunities in education, employment, and decision-making.
          </p>
        </div>
        <div className="bg-green-100 p-4 rounded-lg">
          <h3 className="text-lg font-bold text-green-800">Awareness and Purpose:</h3>
          <p className="text-green-700">
          In many societies, girls and women face discrimination, limiting their opportunities and rights. SDG 5 seeks to ensure that everyone, regardless of gender, has the same chances to succeed and contribute to society.
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
        You can promote gender equality by supporting girls’ participation in activities like science clubs or sports teams. Organizing events that highlight the achievements of women in various fields can inspire others and promote gender equality.
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

export default Module5;
