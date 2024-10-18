import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ScienceLab = () => {
  const [selectedModule, setSelectedModule] = useState(null); // State to track selected module
  const [activeSidebarItem, setActiveSidebarItem] = useState('Resources'); // State for active sidebar item

  

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
          <h1 className="text-4xl font-bold text-black">RESOURCES</h1>
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
      

      {/* Content of Resources */}
         {/* Content of Resources */}
<div className="w-full bg-gray-100 p-6 rounded-lg">
  <h2 className="text-2xl font-bold text-black mb-4">Educational Resources</h2>
  <p className="text-lg text-gray-700 mb-6">
    Discover various projects focused on achieving sustainable development goals using Earth observations.
  </p>
  <ul className="space-y-6">
    {/* Resource 1 */}
    <li className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <Image
        src="/resources/Water-Quality-Upd.png.png" // Update this path with the actual path of your image
        alt="NASA’s Water Quality Activities"
        width={150}
        height={100}
        className="rounded-lg mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-800">NASA’s Water Quality Activities in Support of Reporting SDG 6.3.2/6.6.1</h3>
        <p className="text-gray-600">
          The STREAM system is now up and running. It is essential for life on Earth, addressing the over-exploitation of water resources due to global population growth.
        </p>
        <Link href="https://eo4sdg.org/nasas-water-quality-activities-in-support-of-reporting-sdg-6-3-2-6-6-1/" className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </li>
    {/* Resource 2 */}
    <li className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <Image
        src="/resources/Life-on-land-StoryMap-Fig1.png-e1634070837785.jpg.png" // Update this path with the actual path of your image
        alt="Maintaining Life on Land"
        width={150}
        height={100}
        className="rounded-lg mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-800">Maintaining Life on Land in Colombia, Ecuador and Peru</h3>
        <p className="text-gray-600">
          The NASA-funded project works closely with the United Nations Development Program, as well as scientific institutions.
        </p>
        <Link href="https://eo4sdg.org/the-life-on-land-project/" className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </li>
    {/* Resource 3 */}
    <li className="bg-white p-4 rounded-lg shadow-md flex items-center">
      <Image
        src="/resources/IMG_3821-scaled.jpg.png" // Update this path with the actual path of your image
        alt="Forest Health & Invasive Water Hyacinth in Benin"
        width={150}
        height={100}
        className="rounded-lg mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-800">Forest Health & Invasive Water Hyacinth in Benin</h3>
        <p className="text-gray-600">
          Local companies and scientists in Benin are increasing their use of earth science information to manage forests and water resources.
        </p>
        <Link href="https://eo4sdg.org/forest-health-invasive-water-hyacinth-in-benin/" className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </li>
    {/* Resource 4 */}
<li className="bg-white p-4 rounded-lg shadow-md flex items-center">
  <Image
    src="/resources/lyuti-fall-5-milenina-credit_-John-Goodrich.jpg.png" // Update this path with the actual path of your image
    alt="Critical Biodiversity Mapping in Tiger Range States"
    width={150}
    height={100}
    className="rounded-lg mr-4"
  />
  <div>
    <h3 className="text-xl font-semibold text-green-800">Critical Biodiversity Mapping in Tiger Range States</h3>
    <p className="text-gray-600">
      Identifying key biodiversity areas is crucial to understanding how endangered species populations react to changes in climate and urbanization.
      The project focuses on the fluctuations in occupied and available tiger (Panthera tigris) habitat in relation to key biodiversity areas (KBAs).
    </p>
    <Link href="https://eo4sdg.org/critical-biodiversity-mapping-in-tiger-range-states/" className="text-blue-500 hover:underline">
      Read more
    </Link>
  </div>
</li>

{/* Resource 5 */}
<li className="bg-white p-4 rounded-lg shadow-md flex items-center">
  <Image
    src="/resources/fishing-vessel-3855156_1920.jpg.png" // Update this path with the actual path of your image
    alt="Sustainable Fishery Management in the United States"
    width={150}
    height={100}
    className="rounded-lg mr-4"
  />
  <div>
    <h3 className="text-xl font-semibold text-green-800">Sustainable Fishery Management in the United States</h3>
    <p className="text-gray-600">
      As Earth’s oceans undergo dramatic changes, the spatial distributions of highly migratory species and fishing fleets are shifting in response
      to climate-driven changes, raising concerns over greater ecological and economic disruptions.
    </p>
    <Link href="https://eo4sdg.org/sustainable-fishery-management-in-the-united-states/" className="text-blue-500 hover:underline">
      Read more
    </Link>
  </div>
</li>


  </ul>
</div>
<div className="w-full bg-gray-100 p-6 rounded-lg">
  <h2 className="text-2xl font-bold text-black mb-4">Data & Information Products</h2>
  <p className="text-lg text-gray-700 mb-6">
    Explore data products and information systems that support Earth observation initiatives for sustainable development.
  </p>
  <ul className="space-y-6">
    {/* GEOSS Resource */}
    <li className="bg-white p-4 rounded-lg shadow-md flex items-center border border-gray-300">
      <Image
        src="/resources/pic.jpg" // Update this path with the actual path of your image
        alt="Global Earth Observation System of Systems (GEOSS)"
        width={150}
        height={100}
        className="rounded-lg mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-800">Global Earth Observation System of Systems (GEOSS)</h3>
        <p className="text-gray-600">
          A central part of GEO’s mission is to build the Global Earth Observation System of Systems (GEOSS). GEOSS is a set of coordinated, independent Earth observation, 
          information, and processing systems that interact and provide access to diverse information for a variety of uses.
        </p>
        <Link href="https://eo4sdg.org/what-we-do/data-information-products/" className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </li>
  </ul>
</div>


          
        </div>
      </div>
      
    </div>
  );
};

export default ScienceLab;
