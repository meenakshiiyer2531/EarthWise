import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Resources = () => {
  const resources = [
    {
      title: "NASA’s Water Quality Activities in Support of Reporting SDG 6.3.2/6.6.1",
      description: "The STREAM system is now up and running. It is essential for life on Earth, addressing the over-exploitation of water resources due to global population growth.",
      imageUrl: "/resources/Water-Quality-Upd.png.png",
      link: "https://eo4sdg.org/nasas-water-quality-activities-in-support-of-reporting-sdg-6-3-2-6-6-1/"
    },
    {
      title: "Maintaining Life on Land in Colombia, Ecuador and Peru",
      description: "The NASA-funded project works closely with the United Nations Development Program, as well as scientific institutions.",
      imageUrl: "/resources/Life-on-land-StoryMap-Fig1.png-e1634070837785.jpg.png",
      link: "https://eo4sdg.org/the-life-on-land-project/"
    },
    {
      title: "Forest Health & Invasive Water Hyacinth in Benin",
      description: "Local companies and scientists in Benin are increasing their use of earth science information to manage forests and water resources.",
      imageUrl: "/resources/IMG_3821-scaled.jpg.png",
      link: "https://eo4sdg.org/forest-health-invasive-water-hyacinth-in-benin/"
    },
    {
      title: "Critical Biodiversity Mapping in Tiger Range States",
      description: "Identifying key biodiversity areas is crucial to understanding how endangered species populations react to changes in climate and urbanization.",
      imageUrl: "/resources/lyuti-fall-5-milenina-credit_-John-Goodrich.jpg.png",
      link: "https://eo4sdg.org/critical-biodiversity-mapping-in-tiger-range-states/"
    },
    {
      title: "Sustainable Fishery Management in the United States",
      description: "The spatial distributions of highly migratory species and fishing fleets are shifting in response to climate-driven changes, raising concerns over ecological and economic disruptions.",
      imageUrl: "/resources/fishing-vessel-3855156_1920.jpg.png",
      link: "https://eo4sdg.org/sustainable-fishery-management-in-the-united-states/"
    }
  ];

  const dataProducts = [
    {
      title: "Global Earth Observation System of Systems (GEOSS)",
      description: "A set of coordinated, independent Earth observation, information, and processing systems that provide access to diverse information for various uses.",
      imageUrl: "/resources/pic.jpg",
      link: "https://eo4sdg.org/what-we-do/data-information-products/"
    }
  ];

  const renderResource = (resource) => (
    <li className="bg-white p-4 rounded-lg shadow-md flex items-center border border-gray-300" key={resource.title}>
      <Image
        src={resource.imageUrl}
        alt={resource.title}
        width={150}
        height={100}
        className="rounded-lg mr-4"
      />
      <div>
        <h3 className="text-xl font-semibold text-green-800">{resource.title}</h3>
        <p className="text-gray-600">{resource.description}</p>
        <Link href={resource.link} className="text-blue-500 hover:underline">
          Read more
        </Link>
      </div>
    </li>
  );

  return (
    <div className="flex bg-white min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        

        <div className="w-full bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">Educational Resources</h2>
          <ul className="space-y-6">
            {resources.map(renderResource)}
          </ul>
        </div>

        <div className="w-full bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">Data & Information Products</h2>
          <ul className="space-y-6">
            {dataProducts.map(renderResource)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
