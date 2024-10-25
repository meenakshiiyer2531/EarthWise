import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Dashboard from './dashboard';
import ModulePath from './ModulePath';
import ScienceLab from './ScienceLab';
import Resources from './Resources';
import Notification from './Notification';

import Pages from '../page'; // Import your Pages component
import Profile from './Profile';
import { globalState } from '../globalState'; // Import the global state

const Sidebar = () => {
  const [activeComponent, setActiveComponent] = useState('Dashboard'); // State to track the active component
  const [isLoggedOut, setIsLoggedOut] = useState(false); // State to track if the user is logged out
  const [showNotification, setShowNotification] = useState(false); // State to track notification visibility
  const { language } = globalState; // Access global language state
  const sidebarItems = [
    { name: language === 'kn' ? 'ಮುಖಪುಟ' : 'Home', icon: '/sidebar/home.png' },
    { name: language === 'kn' ? 'ಮಾಡ್ಯೂಲ್‌ಗಳು' : 'Modules', icon: '/sidebar/modules.png' },
    { name: language === 'kn' ? 'ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ' : 'Science Lab', icon: '/sidebar/experiment.png' },
    { name: language === 'kn' ? 'ಮೂಲಗಳು' : 'Resources', icon: '/sidebar/resources.png' },
  ];

  const handleSidebarItemClick = (item) => {
    const componentMap = {
      [language === 'kn' ? 'ಮುಖಪುಟ' : 'Home']: 'Dashboard',
      [language === 'kn' ? 'ಮಾಡ್ಯೂಲ್‌ಗಳು' : 'Modules']: 'Modules',
      [language === 'kn' ? 'ವಿಜ್ಞಾನ ಪ್ರಯೋಗಾಲಯ' : 'Science Lab']: 'Science Lab',
      [language === 'kn' ? 'ಮೂಲಗಳು' : 'Resources']: 'Resources',
    };
    setActiveComponent(componentMap[item]);
    setShowNotification(false); // Hide notifications when navigating to another page
  };

  // Logout handler
  const handleLogout = () => {
    globalState.email = ''; // Reset the email to an empty string
    globalState.points = 0; // Reset the points to 0
    globalState.language = 'en'; // Reset the language to default 'en'
    setIsLoggedOut(true); // Set logged-out state to true
  };

  // If the user is logged out, render the Pages component
  if (isLoggedOut) {
    return <Pages />;
  }

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
                <div
                  className={`text-black text-xl py-3 px-3 flex items-center rounded-xl transition duration-200 ${
                    activeComponent === (item.name === 'Home' ? 'Dashboard' : item.name) ? 'bg-white text-black' : 'hover:bg-white hover:text-black'
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
              </li>
            ))}
          </ul>
        </nav>

        {/* Visit United Nations Section */}
        <div className="mt-10 bg-green-100 bg-opacity-75 p-4 rounded-lg flex items-center">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-800">{language === 'kn' ? 'ಯುನೈಟೆಡ್ ನೇಶನ್ಸ್‌ಗೆ ಭೇಟಿ ನೀಡಿ' : 'Visit United Nations'}</h2>
            <p className="text-gray-600 text-lg">
              {language === 'kn' ? '17 ಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳ ಬಗ್ಗೆ ಹೆಚ್ಚಿನ ಮಾಹಿತಿಯನ್ನು ತಿಳಿಯಲು ಯುನೈಟೆಡ್ ನೇಶನ್ಸ್ ವೆಬ್‌ಸೈಟ್ ಅನ್ನು ಬ್ರೌಸ್ ಮಾಡಿ.' : 'Browse the United Nations website to learn more about the 17 sustainable development goals.'}
            </p>
            <Link href="https://sdgs.un.org/goals" className="bg-purple-500 text-white px-4 py-2 rounded mt-2 inline-block text-lg">
              {language === 'kn' ? 'ವೆಬ್‌ಸೈಟ್ನಿಗೆ ಭೇಟಿ ನೀಡಿ' : 'Visit site'}
            </Link>
          </div>
          <div className="flex-shrink-0">
            <Image src="/sidebar-img.png" alt="United Nations" width={200} height={200} className="rounded-lg" />
          </div>
        </div>

        {/* Logout Button */}
        <button
          className="mt-4 w-full bg-white text-black py-2 rounded-lg flex items-center justify-center hover:bg-black hover:text-white transition duration-200 text-lg"
          onClick={handleLogout} // Trigger the logout handler on click
        >
          <img src="/logout.png" alt="Logo" className="h-6 w-6 mr-2" />
          {language === 'kn' ? 'ಔಟ್' : 'Logout'}
        </button>
      </div>

      {/* Main Section */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        {/* Always render the top bar */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-grow"></div> {/* This div takes up space on the left */}
          <div className="flex space-x-10">
            <div onClick={() => setShowNotification((prev) => !prev)}> {/* Toggle notification visibility */}
              <Image src="/notification.png" alt="Notifications" width={40} height={40} className="cursor-pointer" />
            </div>
            {/* <div onClick={() => setActiveComponent('star')}>
              <Image src="/star.png" alt="Star" width={40} height={40} className="cursor-pointer" />
            </div> */}
            <div onClick={() => setActiveComponent('Profile')}>
              <Image src="/profile.png" alt="Profile" width={40} height={40} className="cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Render components conditionally */}
        {activeComponent === 'Dashboard' && <Dashboard />}
        {activeComponent === 'Modules' && <ModulePath />}
        {activeComponent === 'Science Lab' && <ScienceLab />}
        {activeComponent === 'Resources' && <Resources />}
        {activeComponent === 'Profile' && <Profile onClose={() => setActiveComponent('Dashboard')} />} {/* Ensure Profile is rendered */}
        {showNotification && <Notification />} {/* Show Notification component when active */}
        {activeComponent === 'star' && <Star />} {/* Ensure Star is rendered */}
      </div>
    </div>
  );
};

export default Sidebar;
