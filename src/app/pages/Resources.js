import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { globalState } from '../globalState'; // Import global state for language

const Resources = () => {
  const { language } = globalState; // Access global language state

  const resources = [
    {
      title: language === 'kn' ? "ನಾಸಾ ಜಲ ಗುಣಮಟ್ಟ ಚಟುವಟಿಕೆಗಳು SDG 6.3.2/6.6.1 ಅನ್ನು ವರದಿಮಾಡಲು ಬೆಂಬಲ ನೀಡುತ್ತವೆ" : "NASA’s Water Quality Activities in Support of Reporting SDG 6.3.2/6.6.1",
      description: language === 'kn' ? "ಸ್ಟ್ರೀಮ್ ವ್ಯವಸ್ಥೆ ಈಗ ಕಾರ್ಯಕ್ಷಮವಾಗಿದೆ. ಜಾಗತಿಕ ಜನಸಂಖ್ಯೆ ಬೆಳವಣಿಗೆಯ ಕಾರಣದಿಂದ ನೀರಿನ ಸಂಪತ್ತಿನ ಅಧಿಕ ಬಳಕೆಯನ್ನು ತಡೆಯುವುದು ಭೂಮಿಯ ಮೇಲೆ ಜೀವಕ್ಕೆ ಆವಶ್ಯಕವಾಗಿದೆ." : "The STREAM system is now up and running. It is essential for life on Earth, addressing the over-exploitation of water resources due to global population growth.",
      imageUrl: "/resources/Water-Quality-Upd.png.png",
      link: "https://eo4sdg.org/nasas-water-quality-activities-in-support-of-reporting-sdg-6-3-2-6-6-1/"
    },
    {
      title: language === 'kn' ? "ಕೊಲಂಬಿಯಾ, ಇಕ್ವಡರ್ ಮತ್ತು ಪೆರಿನಲ್ಲಿನ ನೆಲದ ಜೀವವನ್ನು ನಿರ್ವಹಿಸುವುದು" : "Maintaining Life on Land in Colombia, Ecuador and Peru",
      description: language === 'kn' ? "ನಾಸಾ-ಫಂಡಡ್ ಯೋಜನೆಯು ಒಕ್ಕೂಟ ಅಭಿವೃದ್ಧಿ ಕಾರ್ಯಕ್ರಮದಂತೆ ವೈಜ್ಞಾನಿಕ ಸಂಸ್ಥೆಗಳೊಂದಿಗೆ密切ವಾಗಿ ಕಾರ್ಯನಿರ್ವಹಿಸುತ್ತದೆ." : "The NASA-funded project works closely with the United Nations Development Program, as well as scientific institutions.",
      imageUrl: "/resources/Life-on-land-StoryMap-Fig1.png-e1634070837785.jpg.png",
      link: "https://eo4sdg.org/the-life-on-land-project/"
    },
    {
      title: language === 'kn' ? "ಬೆನಿನದಲ್ಲಿ ಅರಣ್ಯ ಆರೋಗ್ಯ ಮತ್ತು ಆಕ್ರಮಣಕಾರಿಯಾದ ನೀರಿನ ಹಾಯ್ಸಿಂಥ್" : "Forest Health & Invasive Water Hyacinth in Benin",
      description: language === 'kn' ? "ಬೆನಿನದಲ್ಲಿನ ಸ್ಥಳೀಯ ಕಂಪನಿಗಳು ಮತ್ತು ವಿಜ್ಞಾನಿಗಳು ಅರಣ್ಯ ಮತ್ತು ನೀರಿನ ಸಂಪತ್ತುಗಳನ್ನು ನಿರ್ವಹಿಸಲು ಭೂ ವಿಜ್ಞಾನ ಮಾಹಿತಿಯನ್ನು ಬಳಸುತ್ತಿದ್ದಾರೆ." : "Local companies and scientists in Benin are increasing their use of earth science information to manage forests and water resources.",
      imageUrl: "/resources/IMG_3821-scaled.jpg.png",
      link: "https://eo4sdg.org/forest-health-invasive-water-hyacinth-in-benin/"
    },
    {
      title: language === 'kn' ? "ಟೈಗರ್ ಶ್ರೇಣಿಯ ರಾಜ್ಯಗಳಲ್ಲಿ ಪ್ರಮುಖ ಜೀವವೈವಿಧ್ಯ ನಕ್ಷೆ ಮಾಡುವುದು" : "Critical Biodiversity Mapping in Tiger Range States",
      description: language === 'kn' ? "ಮಹತ್ವದ ಜೀವವೈವಿಧ್ಯ ಪ್ರದೇಶಗಳನ್ನು ಗುರುತಿಸುವುದು ಹಾನಿಯ ಶ್ರೇಣಿಯ ಜೀವಿಗಳಿಗೆ ಹವಾಮಾನ ಮತ್ತು ನಗರೀಕರಣದ ಬದಲಾವಣೆಗಳಿಗೆ ಹೇಗೆ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ ಎಂಬುದನ್ನು ತಿಳಿಯಲು ಅತ್ಯಂತ ಮಹತ್ವವಾಗಿದೆ." : "Identifying key biodiversity areas is crucial to understanding how endangered species populations react to changes in climate and urbanization.",
      imageUrl: "/resources/lyuti-fall-5-milenina-credit_-John-Goodrich.jpg.png",
      link: "https://eo4sdg.org/critical-biodiversity-mapping-in-tiger-range-states/"
    },
    {
      title: language === 'kn' ? "ಅಮೆರಿಕದಲ್ಲಿ ಸಸ್ಥಿರ ಮೀನುಗಾರಿಕಾ ನಿರ್ವಹಣೆ" : "Sustainable Fishery Management in the United States",
      description: language === 'kn' ? "ಹಣಕಾಸುಚಾಲಿತ ಬದಲಾವಣೆಗಳಿಗೆ ಪ್ರತಿಕ್ರಿಯೆಯಾಗಿ ಅತ್ಯಂತ ಸಾಗಣೀಯ ತಳಿಗಳು ಮತ್ತು ಮೀನುಗಾರಿಕಾ ತಂಡಗಳ ಜಾಗತಿಕ ವಿತರಣೆಗಳು ಪರಿವರ್ತಿತವಾಗುತ್ತಿವೆ, ಇವು ಪರಿಸ್ಕೃತಿಯ ಮತ್ತು ಆರ್ಥಿಕ ವ್ಯತ್ಯಾಸಗಳ ಬಗ್ಗೆ ಆತಂಕವನ್ನು ಉಂಟುಮಾಡುತ್ತವೆ." : "The spatial distributions of highly migratory species and fishing fleets are shifting in response to climate-driven changes, raising concerns over ecological and economic disruptions.",
      imageUrl: "/resources/fishing-vessel-3855156_1920.jpg.png",
      link: "https://eo4sdg.org/sustainable-fishery-management-in-the-united-states/"
    }
  ];

  const dataProducts = [
    {
      title: language === 'kn' ? "ಜಾಗತಿಕ ಭೂ ತೋಟದ ನೋಟಗಳ ವ್ಯವಸ್ಥೆ (GEOSS)" : "Global Earth Observation System of Systems (GEOSS)",
      description: language === 'kn' ? "ವಿಭಿನ್ನ ಉಪಯೋಗಗಳಿಗೆ ವಿವಿಧ ಮಾಹಿತಿಯ ಪ್ರವೆಶವನ್ನು ಒದಗಿಸುವ ಸಮನ್ವಯಿತ, ಸ್ವಾಯತ್ತ ಭೂ ತೋಟದ ನಿರೀಕ್ಷಣೆ, ಮಾಹಿತಿ ಮತ್ತು ಪ್ರಕ್ರಿಯಾಕರಣ ವ್ಯವಸ್ಥೆಗಳ ಒಂದು ಸೆಟ್." : "A set of coordinated, independent Earth observation, information, and processing systems that provide access to diverse information for various uses.",
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
          {language === 'kn' ? "ಊಹಿಸಿ ಹೆಚ್ಚು" : "Read more"} {/* Localized button text */}
        </Link>
      </div>
    </li>
  );

  return (
    <div className="flex bg-white min-h-screen">
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white rounded-xl">
        <div className="w-full bg-gray-100 p-6 rounded-lg mb-8">
          <h2 className="text-2xl font-bold text-black mb-4">{language === 'kn' ? "ಶಿಕ್ಷಣ ಸಂಪತ್ತು" : "Educational Resources"}</h2>
          <ul className="space-y-6">
            {resources.map(renderResource)}
          </ul>
        </div>

        <div className="w-full bg-gray-100 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-black mb-4">{language === 'kn' ? "ದತ್ತ & ಮಾಹಿತಿ ಉತ್ಪನ್ನಗಳು" : "Data & Information Products"}</h2>
          <ul className="space-y-6">
            {dataProducts.map(renderResource)}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;
