import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ModulePath = () => {
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [activeSidebarItem, setActiveSidebarItem] = useState('Modules'); // State for active sidebar item

  const modules = [
    { id: 1, name: 'MODULE 1', image: '/path-logo/image 23.png', link: '/module-1' },
    { id: 2, name: 'MODULE 2', image: '/path-logo/image 24.png', link: '/module-2' },
    { id: 3, name: 'MODULE 3', image: '/path-logo/image 44.png', link: '/module-3' },
    { id: 4, name: 'MODULE 4', image: '/path-logo/image 26.png', link: '/module-4' },
    { id: 5, name: 'MODULE 5', image: '/path-logo/image 27.png', link: '/module-5' },
    { id: 6, name: 'MODULE 6', image: '/path-logo/image 28.png', link: '/module-6' },
    { id: 7, name: 'MODULE 7', image: '/path-logo/image 29.png', link: '/module-7' },
    { id: 8, name: 'MODULE 8', image: '/path-logo/image 30.png', link: '/module-8' },
    { id: 9, name: 'MODULE 9', image: '/path-logo/image 31.png', link: '/module-9' },
    { id: 10, name: 'MODULE 10', image: '/path-logo/image 32.png', link: '/module-10' },
    { id: 11, name: 'MODULE 11', image: '/path-logo/image 33.png', link: '/module-11' },
    { id: 12, name: 'MODULE 12', image: '/path-logo/image 34.png', link: '/module-12' },
    { id: 13, name: 'MODULE 13', image: '/path-logo/image 35.png', link: '/module-13' },
    { id: 14, name: 'MODULE 14', image: '/path-logo/image 36.png', link: '/module-14' },
    { id: 15, name: 'MODULE 15', image: '/path-logo/image 37.png', link: '/module-15' },
    { id: 16, name: 'MODULE 16', image: '/path-logo/image 38.png', link: '/module-16' },
    { id: 17, name: 'MODULE 17', image: '/path-logo/image 39.png', link: '/module-17' },
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
                    className={`text-black text-xl py-3  px-3 flex items-center rounded-xl transition duration-200 ${
                      activeSidebarItem === item.name ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
                    } cursor-pointer w-full`}
                    onClick={() => handleSidebarItemClick(item.name)}
                  >
                    <Image 
                      src={item.icon} 
                      alt={item.name} 
                      width={30} 
                      height={30} 
                      className="mr-4" // Increased margin to the right of the icon
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
            <Link href="#" className="bg-purple-500 text-white px-4 py-2 rounded mt-2 inline-block text-lg">
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

      {/* Modules Section */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">MODULES</h1>
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
            <div className="grid grid-cols-4 gap-6 relative">
              {modules.map((module) => (
                <div
                  key={module.id}
                  className={`flex flex-col items-center p-4 transform transition-all duration-300 relative group ${
                    selectedModule === module.id ? 'bg-blue-500' : ''
                  }`}
                >
                  <Link href={module.link} passHref onClick={() => handleModuleClick(module.id)}>
                    <div className="bg-black rounded-full p-6 relative cursor-pointer">
                      <Image
                        src={module.image}
                        alt={module.name}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                  </Link>
                  <p className="text-lg font-semibold text-gray-800 mt-2">{module.name}</p>
                  {module.id % 2 === 0 && (
                    <Link href="/quiz" passHref>
                      <div className="absolute right-1 w-10 h-10 bg-pink-500 rounded-full cursor-pointer z-20" />
                    </Link>
                  )}
                  {module.id < modules.length - 1 && (
                    <div
                      className={`absolute w-20 h-1 bg-gray-500 top-1/2 left-full transform translate-y-1/2 ${
                        module.id % 4 === 0 ? 'rotate-90' : ''
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulePath;
