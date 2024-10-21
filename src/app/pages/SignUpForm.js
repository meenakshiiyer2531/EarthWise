import { useState } from 'react';
import { auth } from '../Firebase'; // Adjust the path as necessary
import { createUserWithEmailAndPassword } from 'firebase/auth';
import Dashboard from './SideBar'; // Import the Dashboard component
import Header from './Header';         // Import the Header component
import Footer from './Footer';
import { globalState } from '../globalState'; // Import the global object

export default function SignUpForm({ handleLoginClick }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [school, setSchool] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showDashboard, setShowDashboard] = useState(false); // Track dashboard display

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("User registered successfully!");

      // Set the global email variable
      globalState.email = email; // Access the email through the globalState object

      setShowDashboard(true);

      // Save user data to MongoDB
      const response = await fetch('http://localhost:5000/api/profile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, address, school }),
      });

      if (!response.ok) {
        throw new Error('Failed to save profile to MongoDB');
      }

      const result = await response.json();
      console.log(result.message);

    } catch (error) {
      console.error("Error signing up:", error);
      alert(error.message);
    }
  };

  // If login is successful, show the Dashboard component
  if (showDashboard) {
    return <Dashboard />;
  }

  return (
    <>
      {/* Include Header */}
      <Header />

      <div className="flex items-center justify-center h-screen bg-green-300">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-2xl p-8">
          <h1 className="text-center text-2xl font-bold mb-4 text-black">Create Your Account!</h1>
          
          <form onSubmit={handleSignUp}>
            {/* Input fields remain the same */}
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                id="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
              <textarea
                id="address"
                rows="4"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
                placeholder="Enter your full address here"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="school" className="block text-sm font-medium text-gray-700">School</label>
              <input
                type="text"
                id="school"
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm text-black"
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
      
      {/* Include Footer */}
      <Footer />
    </>
  );
}
