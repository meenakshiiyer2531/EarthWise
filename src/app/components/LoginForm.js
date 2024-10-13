import { useState } from 'react';
import Image from 'next/image';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LoginForm({ handleSignUpClick }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    const auth = getAuth();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful!");
      // Here you might want to redirect the user to another page
    } catch (error) {
      console.error("Error logging in:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-300">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl flex relative">
        {/* Side GIF */}
        <div className="hidden md:flex relative" style={{ width: '700px' }}>
          <Image src="/login.gif" alt="Side GIF" layout="fill" objectFit="cover" className="rounded-l-lg" />
        </div>
        
        {/* Partition */}
        <div className="hidden md:flex w-px bg-gray-300"></div>

        {/* Form Container */}
        <div className="w-full max-w-md p-4 mx-auto relative">
          {/* Form Content */}
          <div className="mt-2">
            <h1 className="text-center text-2xl font-bold mb-4 text-black">Login to Your Account!</h1>

            <form onSubmit={handleLogin}> {/* Add form submission handling */}
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)} // Update state
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                />
              </div>
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} // Update state
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
                  />
                </div>
              </div>
              <button type="submit" className="w-full bg-black text-white py-2 rounded-md text-lg font-medium hover:bg-gray-800">Log In</button>
            </form>

            <p className="text-center text-sm text-gray-500 mt-4">
              Don't have an account?{' '}
              <button onClick={handleSignUpClick} className="text-green-600 hover:text-green-500">Sign Up</button>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}
