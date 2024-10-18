// app/page.js

"use client"; // Ensures this file acts as a Client Component

import Head from 'next/head';
import { useState } from 'react';
import ModulePath from './components/ModulePath'; // Correct path to the components
import Header from './components/Header';         // Update the path if needed
import Footer from './components/Footer';         // Update the path if needed
import LoginForm from './components/LoginForm';   // Update the path if needed
import SignUpForm from './components/SignUpForm'; // Update the path if needed
import SDGMarquee from './components/SDGMarquee'; // Update the path if needed
import Image from 'next/image';
import Dashboard from './components/dashboard';
import ScienceLab from './components/ScienceLab';
import Resources from './components/Resources';
import Notification from './components/Notification';
import AboutUs from './components/AboutUs';
import Profile from './components/Profile';

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
    {/* <Profile /> */}
{/* <AboutUs /> */}
    <SignUpForm />
      {/* Title and Header */}
      {/* <Head>
        <title>EarthWise - Home</title>
      </Head>
      <Header handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} /> */}

      {/* Render the ModulePath */}
      {/* <ModulePath /> */}
        {/* <Notification /> */}

        {/* <Resources /> */}
        {/* <ScienceLab /> */}
      {/* Render the Dashboard */}    
      {/* <Dashboard /> */}

      {/* Conditional Rendering */}
      {/* {!showLogin && !showSignUp && (
        <>
          <section className="hero bg-green-300 p-8 relative overflow-hidden min-h-[450px] flex items-center justify-center">
            {/* Background Image */}
            {/* <div className="absolute inset-0 z-0">
              <Image
                src="/bg.jpg" // Make sure this path is correct
                alt="Background"
                layout="fill" // Makes the image fill the parent container
                objectFit="cover" // Ensures the image covers the entire section
                className="blur-[10px] opacity-40" // Add blur and transparency
              />
            </div> */} 

            {/* Text Content */}
            {/* <div className="relative z-10">
              <h2 className="text-5xl font-bold text-center">Welcome to EarthWise!</h2>
              <p className="text-3xl text-center mt-4">
                Join our platform to make an impact on climate change and social equity!
              </p>
            </div>
          </section>
          <SDGMarquee />
        </>
      )} */}

      {/* Render Login or SignUp Form */}
      {/* {showLogin && <LoginForm handleSignUpClick={handleSignUpClick} />}
      {showSignUp && <SignUpForm handleLoginClick={handleLoginClick} />} */}

      {/* Footer */}
      {/* <Footer /> */}
    </>
  );
}
