import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUpForm({ handleLoginClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = async (e) => {
    e.preventDefault(); // Prevent the default form submission

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    const auth = getAuth();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");
      // Here you might want to redirect or clear the form
    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-green-300">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
        <h1 className="text-center text-2xl font-bold mb-4 text-black">Create Your Account!</h1>
        
        <form onSubmit={handleSignUp}> {/* Add form submission handling */}
          {/* Name */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          {/* Phone */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          {/* Address */}
          <div className="mb-4">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <textarea
              id="address"
              rows="4"
              value={address}
              onChange={(e) => setAddress(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
              placeholder="Enter your full address here"
            />
          </div>

          {/* School */}
          <div className="mb-4">
            <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
            <input
              type="text"
              id="school"
              value={school}
              onChange={(e) => setSchool(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          {/* Confirm Password */}
          <div className="mb-6">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} // Update state
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black" // Added text-black
            />
          </div>

          <button type="submit" className="w-full bg-black text-white py-2 rounded-md text-lg font-medium hover:bg-gray-800">Sign Up</button>
        </form>

        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{' '}
          <button onClick={handleLoginClick} className="text-green-600 hover:text-green-500">Log In</button>
        </p>

      </div>
    </div>
  );
}
