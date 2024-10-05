import Image from "next/image";
import Marquee from "react-fast-marquee";

// SDG data
const sdgData = [
  { id: 1, title: "No poverty", logo: "/images/sdg1.png" },
  { id: 2, title: "Zero hunger", logo: "/images/sdg2.png" },
  { id: 3, title: "Good health and well-being", logo: "/images/sdg3.png" },
  { id: 4, title: "Quality education", logo: "/images/sdg4.png" },
  { id: 5, title: "Gender equality", logo: "/images/sdg5.png" },
  { id: 6, title: "Clean water and sanitation", logo: "/images/sdg6.png" },
  { id: 7, title: "Affordable and clean energy", logo: "/images/sdg7.png" },
  { id: 8, title: "Decent work and economic growth", logo: "/images/sdg8.png" },
  { id: 9, title: "Industry, innovation and infrastructure", logo: "/images/sdg9.png" },
  { id: 10, title: "Reduced inequalities", logo: "/images/sdg10.png" },
  { id: 11, title: "Sustainable cities and communities", logo: "/images/sdg11.png" },
  { id: 12, title: "Responsible consumption and production", logo: "/images/sdg12.png" },
  { id: 13, title: "Climate action", logo: "/images/sdg13.png" },
  { id: 14, title: "Life below water", logo: "/images/sdg14.png" },
  { id: 15, title: "Life on land", logo: "/images/sdg15.png" },
  { id: 16, title: "Peace, justice, and strong institutions", logo: "/images/sdg16.png" },
  { id: 17, title: "Partnerships for the goals", logo: "/images/sdg17.png" },
];

export default function HomePage() {
  return (
    <div>
      {/* Header Section */}
      <header className="bg-green-500 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/logo.png" alt="EarthWise Logo" width={50} height={50} />
          <h1 className="text-white text-2xl font-bold ml-4">EarthWise</h1>
        </div>
        <nav className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About Us</a>
          <a href="#" className="text-white">Contact Us</a>
          <button className="bg-white text-green-500 px-4 py-2 rounded-full">Log In</button>
          <button className="bg-green-700 text-white px-4 py-2 rounded-full">Sign Up</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-green-100 text-center py-10">
        <h2 className="text-4xl-black font-bold">Welcome to EarthWise – Your Journey Towards a Sustainable Future!</h2>
        <p className="text-lg-black mt-4">The 17 Sustainable Development Goals</p>
      </section>

      {/* SDGs Section with Marquee */}
      <section className="bg-gray-100 py-10">
        <h3 className="text-center-black text-2xl font-bold mb-6">The 17 Sustainable Development Goals</h3>
        <Marquee gradient={false} speed={60}>
          {sdgData.map((sdg) => (
            <div key={sdg.id} className="mx-6 text-center">
              <Image src={sdg.logo} alt={sdg.title} width={100} height={100} />
              <p>{sdg.title}</p>
            </div>
          ))}
        </Marquee>
      </section>

      {/* Call to Action */}
      <section className="bg-white text-center py-10">
        <button className="bg-black text-white px-6 py-3 rounded-full mr-4">Create new account</button>
        <button className="bg-black text-white px-6 py-3 rounded-full">Login to existing account</button>
      </section>

      {/* Footer */}
      <footer className="bg-green-500 text-center py-4 text-white">
        <p>Copyright © FindCaterer. All rights reserved</p>
      </footer>
    </div>
  );
}
