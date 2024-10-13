import Image from 'next/image';

export default function Header({ handleLoginClick, handleSignUpClick }) {
  return (
    <header className="bg-green-500 p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Image src="/logo.png" alt="EarthWise Logo" width={150} height={50} />
        <h1 className="text-white text-2xl font-bold ml-4">EarthWise</h1>
      </div>
      <nav className="flex space-x-4">
        <a href="/" className="nav-link">Home</a>
        <a href="#" className="nav-link">About Us</a>
        <a href="#" className="nav-link">Contact Us</a>
        <button className="nav-button" onClick={handleLoginClick}>Log In</button>
        <button className="nav-button" onClick={handleSignUpClick}>Sign Up</button>
      </nav>
    </header>
  );
}
