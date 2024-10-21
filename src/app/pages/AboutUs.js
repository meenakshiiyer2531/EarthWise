// AboutUs.js
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-8">
      {/* Centered Heading */}
      <h1 className="text-6xl font-bold text-center text-black mb-8">About Us</h1>

      {/* Flex Container for Image and Content */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">
        {/* Left Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0 relative h-64 md:h-auto">
          <Image
            src="/sidebar/about1.png" // Ensure this path is correct
            alt="EarthWise"
            fill // New property to take the full area of the container
            style={{ objectFit: 'cover' }} // New way to handle image covering
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 pl-0 md:pl-9 text-center md:text-left">
          <p className="text-lg text-black mb-4 text-justify">
            At EarthWise, we believe that every small action leads to global impact. Our mission is to educate, inspire, and empower individuals to take meaningful steps toward achieving the United Nations’ 17 Sustainable Development Goals (SDGs).
          </p>
          <p className="text-lg text-black mb-4 text-justify">
            Whether you’re passionate about protecting the environment, ending poverty, or fostering equality, EarthWise provides the tools, resources, and community you need to make a difference.
          </p>
          <p className="text-lg text-black mb-4 text-justify">
            Together, we can create a better, greener future for generations to come.
          </p>
        </div>
      </div>
    </div>
  );
}
