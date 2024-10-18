import { useState } from 'react';
import Image from 'next/image';
import { auth } from '../Firebase';
import { signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm({ handleSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");

      // Fetch the profile data after login
      const response = await fetch(`http://localhost:5000/api/profile/${email}`);
      if (!response.ok) {
        throw new Error("Failed to fetch profile data.");
      }

      const profileData = await response.json();
      console.log("Profile Data:", profileData);
      alert(`Profile fetched: ${JSON.stringify(profileData)}`); // Display the profile data in an alert

      // You might want to redirect the user or perform other actions with the fetched profile data

    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message); // Display the error message
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-green-300 to-blue-300">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex relative p-8 transition-transform transform hover:scale-105">
        <div className="hidden md:flex relative w-1/2">
          <Image src="/login.gif" alt="Side GIF" layout="fill" objectFit="cover" className="rounded-l-lg" />
        </div>
        
        <div className="hidden md:flex w-px bg-gray-300"></div>

        <div className="w-full max-w-md p-4 mx-auto relative">
          <div className="mt-2">
            <h1 className="text-center text-3xl font-bold mb-6 text-black">Login to Your Account!</h1>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black sm:text-lg"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-black sm:text-lg"
                />
              </div>
              <button type="submit" className="w-full bg-black text-white py-3 rounded-md text-lg font-medium hover:bg-gray-800 transition duration-200">Log In</button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-6">
              Don't have an account?{' '}
              <button onClick={handleSignUpClick} className="text-green-600 hover:text-green-500 font-medium">Sign Up</button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
