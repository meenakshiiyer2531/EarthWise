import { useState, useEffect } from 'react'; // Added useEffect for fetching data
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  const [selectedModule, setSelectedModule] = useState(null);
  const [activeSidebarItem, setActiveSidebarItem] = useState('Science Lab');
  const [userData, setUserData] = useState(null); // State to hold user data
  const [loading, setLoading] = useState(true); // State to handle loading

  // Example email; replace with the actual email from your user context or auth
  const userEmail = "user@example.com"; // Get the user's email from context or props

  const fetchUserData = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile data.');
      }
      const data = await response.json();
      setUserData(data);
    } catch (error) {
      console.error('Error logging in:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchUserData(userEmail);
    }
  }, [userEmail]);

  const sidebarItems = [
    { name: 'Home', icon: '/sidebar/home.png', link: '/' },
    { name: 'Modules', icon: '/sidebar/modules.png', link: '/modules' },
    { name: 'Science Lab', icon: '/sidebar/experiment.png', link: '/science-lab' },
    { name: 'Resources', icon: '/sidebar/resources.png', link: '/resources' },
  ];

  const handleModuleClick = (id) => {
    setSelectedModule(id);
  };

  const handleSidebarItemClick = (item) => {
    setActiveSidebarItem(item);
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
          <h1 className="text-4xl font-bold text-black">PROFILE</h1>
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
            {/* Container for user profile info */}
            {loading ? (
              <p>Loading...</p> // Show loading state
            ) : userData ? (
              <div className="w-[893px] h-[229px] bg-[#c1dec0] rounded-2xl flex p-4">
                <Image
                  src={userData.profileImage} // Replace with actual image URL from userData
                  alt="User Image"
                  width={100}
                  height={100}
                  className="rounded-full mr-4"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-2xl font-bold">{userData.name}</h2> {/* Display user's name */}
                  <p className="text-lg">{userData.school}</p> {/* Display user's school */}
                </div>
              </div>
            ) : (
              <p>No user data available.</p>
            )}
          </div>

          <div className="flex flex-col items-start w-full"> {/* Change items-center to items-start */}
  <h2 className="mt-8 text-2xl font-semibold text-black">Progress</h2> {/* Added text-black for color */}
  <div className="w-[1500px] h-[45px] bg-[#bebebe] rounded-[60px] mt-2" /> {/* Adjusted margin-top for alignment */}
</div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
