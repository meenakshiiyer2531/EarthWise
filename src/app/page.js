"use client";  // Ensure this is at the top to indicate a Client Component

import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Header from './pages/Header';        
import Footer from './pages/Footer';        
import LoginForm from './pages/LoginForm';  
import SignUpForm from './pages/SignUpForm';
import SDGMarquee from './pages/SDGMarquee';


export default function Home() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);  // Track if the user is logged in

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
  };

  const handleSignUpClick = () => {
    setShowSignUp(true);
    setShowLogin(false);
  };

  // Handle successful login
  const handleLoginSuccess = () => {
    setIsLoggedIn(true);  // Set login status to true
    setShowLogin(false);   // Hide login form
    setShowSignUp(false);  // Hide signup form if visible
  };

  return (
    <>
      <Head>
        <title>EarthWise - Home</title>
      </Head>

      {/* Show Header and Footer only if the user is not in Login or SignUp */}
      {!showLogin && !showSignUp && (
        <>
          <Header handleLoginClick={handleLoginClick} handleSignUpClick={handleSignUpClick} />
        </>
      )}

      {/* Home Page Content */}
      {!showLogin && !showSignUp && !isLoggedIn && (
        <>
          <section className="hero bg-green-300 p-8 relative overflow-hidden min-h-[500px] flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
              <Image
                src="/bg.jpg"
                alt="Background"
                layout="fill"
                objectFit="cover"
                className="blur-[2px] opacity-200"
              />
            </div>

            {/* Welcome Text */}
            <div className="relative z-10 text-center">
              <h1 className="text-8xl font-bold">Welcome to EarthWise</h1>
              <p className="text-2xl mt-4">Your Journey Towards a Sustainable Future!</p>
            </div>
          </section>

          {/* SDG Section */}
          <section className="sdg-section p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">The 17 Sustainable Development Goals</h2>
          </section>

          {/* SDG Marquee */}
          <SDGMarquee />

          {/* Account Section */}
          <section className="account-section p-8 text-center">
            <div className="flex justify-center space-x-8">
              <button 
                onClick={handleSignUpClick} 
                className="bg-white text-black border-2 border-black py-3 px-6 rounded-md text-xl hover:bg-gray-200"
              >
                Create new account
              </button>
              <button 
                onClick={handleLoginClick} 
                className="bg-black text-white py-3 px-6 rounded-md text-xl hover:bg-gray-800"
              >
                Login to existing account
              </button>
            </div>
          </section>
        </>
      )}

      {/* Login/SignUp Form */}
      {showLogin && !isLoggedIn && (
        <LoginForm 
          handleSignUpClick={handleSignUpClick} 
          onLoginSuccess={handleLoginSuccess}  // Pass the login success handler
        />
      )}
      {showSignUp && !isLoggedIn && <SignUpForm handleLoginClick={handleLoginClick} />}

      {/* Show Dashboard after login */}
      {isLoggedIn && <Dashboard />}

      {/* Show Footer only if the user is not in Login or SignUp */}
      {!showLogin && !showSignUp && (
        <>
          <Footer />
        </>
      )}
    </>
  );
}
