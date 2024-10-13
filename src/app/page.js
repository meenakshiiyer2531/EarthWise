"use client";  // Ensure this is at the top to indicate a Client Component

import { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';        // Update the path
import Footer from './components/Footer';        // Update the path
import LoginForm from './components/LoginForm';  // Update the path
import SignUpForm from './components/SignUpForm';// Update the path
import SDGMarquee from './components/SDGMarquee';// Update the path
import Image from 'next/image'; 
export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  return (
    <>
      <Head>
        <title>EarthWise - Home</title>
      </Head>
      <Header handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
      
      {!showLogin && !showSignUp && (
        <>
       <section className="hero bg-green-300 p-8 relative overflow-hidden min-h-[450px] flex items-center justify-center">
  {/* Background Image */}
  <div className="absolute inset-0 z-0">
    <Image
      src="/bg.jpg" // Make sure this path is correct
      alt="Background"
      layout="fill" // Makes the image fill the parent container
      objectFit="cover" // Ensures the image covers the entire section
      className="blur-[10px] opacity-40" // Add blur and transparency
    />
  </div>
 

        {/* Text Content */}
        <div className="relative z-10"> {/* Ensure text is on top of the background */}
          <h2 className="text-5xl font-bold text-center">Welcome to EarthWise!</h2>
          <p className="text-3xl text-center mt-4">Join our platform to make an impact on climate change and social equity!</p>
        </div>
      </section>
      <SDGMarquee />
        </>
      )}

      {showLogin && <LoginForm handleSignUpClick={handleSignUpClick} />}
      {showSignUp && <SignUpForm handleLoginClick={handleLoginClick} />}

      <Footer />
    </>
  );
}
