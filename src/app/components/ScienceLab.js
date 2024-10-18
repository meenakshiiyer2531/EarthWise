import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScienceLab = () => {
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [activeSidebarItem, setActiveSidebarItem] = useState('Science Lab'); // State for active sidebar item

  const modules = [
    { id: 1, name: 'Experiment 1', link: '/experiment-1' },
    { id: 2, name: 'Experiment 2', link: '/experiment-2' },
    { id: 3, name: 'Experiment 3', link: '/experiment-3' },
    { id: 4, name: 'Experiment 4', link: '/experiment-4' },
    { id: 5, name: 'Experiment 5', link: '/experiment-5' },
    { id: 6, name: 'Experiment 6', link: '/experiment-6' },
    { id: 7, name: 'Experiment 7', link: '/experiment-7' },
    { id: 8, name: 'Experiment 8', link: '/experiment-8' },
    { id: 9, name: 'Experiment 9', link: '/experiment-9' },
    { id: 10, name: 'Experiment 10', link: '/experiment-10' },
    { id: 11, name: 'Experiment 11', link: '/experiment-11' },
    { id: 12, name: 'Experiment 12', link: '/experiment-12' },
    { id: 13, name: 'Experiment 13', link: '/experiment-13' },
    { id: 14, name: 'Experiment 14', link: '/experiment-14' },
    { id: 15, name: 'Experiment 15', link: '/experiment-15' },
    { id: 16, name: 'Experiment 16', link: '/experiment-16' },
    { id: 17, name: 'Experiment 17', link: '/experiment-17' },
  ];

  const sidebarItems = [
    { name: 'Home', icon: '/sidebar/home.png', link: '/' },
    { name: 'Modules', icon: '/sidebar/modules.png', link: '/modules' },
    { name: 'Science Lab', icon: '/sidebar/experiment.png', link: '/science-lab' },
    { name: 'Resources', icon: '/sidebar/resources.png', link: '/resources' },
  ];

  const handleModuleClick = (id) => {
    setSelectedModule(id); // Set the clicked module ID
  };

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item); // Set the active sidebar item
  };

  return (
    <div className="flex bg-white min-h-screen">
      {/* Sidebar */}
      <div className="w-1/5 p-3 bg-custom-green rounded-xl">
        <div className="flex items-center mb-6">
          <Image 
            src="/logo.png" 
            alt="EarthWise Logo" 
            width={60}
            height={60}
            className="mr-2"
          />
          <h1 className="text-4xl font-bold text-white">EarthWise</h1>
        </div>
        <nav className="mt-6">
          <ul>
            {sidebarItems.map((item, index) => (
              <li key={index} className="relative">
                <Link href={item.link} passHref>
                  <div
                    className={`text-black text-xl py-3 px-3 flex items-center rounded-xl transition duration-200 ${
                      activeSidebarItem === item.name ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                    } cursor-pointer w-full`}
                    onClick={() => handleSidebarItemClick(item.name)}
                  >
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      width={30} 
                      height={30} 
                      className="mr-4"
                    />
                    <span className="text-xl">{item.name}</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit United Nations Section */}
        <div className="mt-10 bg-green-100 bg-opacity-75 p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">Visit United Nations</h2>
            <p className="text-gray-600 text-lg">
              Browse the United Nations website to learn more about the 17 sustainable development goals.
            </p>
            <Link href="https://sdgs.un.org/goals" className="bg-purple-500 text-white px-4 py-2 rounded mt-2 inline-block text-lg">
              Visit site
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image src="/sidebar-img.png" alt="United Nations" width={200} height={200} className="rounded-lg" />
          </div>
        </div>

        {/* Logout Button */}
        <button className="mt-4 w-full bg-white text-black py-2 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition duration-200 text-lg">
          <img src="/logout.png" alt="Logo" className="h-6 w-6 mr-2" />
          Logout
        </button>
      </div>

      {/* Experiment Section */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">SCIENCE LAB</h1>
          <div className="flex space-x-10">
            <Link href="/notifications">
              <Image src="/notification.png" alt="Notifications" width={40} height={40} className="cursor-pointer" />
            </Link>
            <Link href="/star">
              <Image src="/star.png" alt="Star" width={40} height={40} className="cursor-pointer" />
            </Link>
            <Link href="/profile">
              <Image src="/profile.png" alt="Profile" width={40} height={40} className="cursor-pointer" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center w-full">
          <div className="w-full">
            {/* main button content */}
          </div>

          {/* Buttons for Experiments */}
          <div className="grid grid-cols-5 gap-10 mt-20">
            {modules.map((module) => (
              <Link key={module.id} href={module.link} passHref>
                <div className="w-[264px] h-[98px] relative cursor-pointer text-center">
                  <div className="w-[264px] h-[98px] left-0 top-0 absolute bg-[#ac60da] rounded-[18px] text-center" />
                  <div className="w-[264px] h-[93px] left-0 top-[2px] absolute text-center text-white text-3xl font-semibold font-['Afacad'] leading-[30px]">
                    {module.name}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScienceLab;
