import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Dashboard = () => {
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [activeSidebarItem, setActiveSidebarItem] = useState('Home'); // State for active sidebar item

  const sidebarItems = [
    { name: 'Home', icon: '/sidebar/home.png', link: '/home' },
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

      {/* Main Section */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-black">DASHBOARD</h1>
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
            <div className="bg-grey-500 h-4 rounded-full w-1/2"></div> Progress Bar
          </div>
          <Link href="/modules" className=" items-right">
          <button className="mt-9 bg-black text-white py-2 px-9 rounded-lg text-lg">
            Start Now
          </button>
          </Link>
        </div>

        {/* Ask Me Section */}
        <div className="fixed bottom-10 right-10 flex items-center">
           <Link href="/help" className="relative flex flex-col items-center">
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
           </Link>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
