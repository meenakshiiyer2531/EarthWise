import Image from 'next/image';
import AboutUs from './AboutUs';
export default function Header({ handleLoginClick, handleSignUpClick }) {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="EarthWise Logo" width={150} height={50} />
        <h1 className="text-white text-3xl font-bold ml-4">EarthWise</h1>
      </div>
      <div className="flex items-center space-x-9"> {/* Added flex container for links and buttons */}
        <nav className="flex space-x-9">
          <a 
            href="/" 
            className="nav-link text-xl text-white hover:text-green-300 transition duration-300" 
          >
            Home
          </a>
          <a 
            href="#" 
            className="nav-link text-xl text-white hover:text-green-300 transition duration-300" 
          >
            About Us
          </a>
          <a 
            href="#" 
            className="nav-link text-xl text-white hover:text-green-300 transition duration-300" 
          >
            Contact Us
          </a>
        </nav>
        <div className="flex space-x-4"> {/* Container for buttons */}
          <button 
            className="nav-button text-xl text-black bg-white hover:bg-grey transition duration-300 px-4 py-2 rounded-2xl"
            onClick={handleLoginClick}
          >
            Log In
          </button>
          <button 
            className="nav-button text-xl text-white bg-black hover:bg-grey transition duration-300 px-4 py-2 rounded-2xl"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
