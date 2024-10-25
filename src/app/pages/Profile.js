import { useState, useEffect } from 'react';
import Image from 'next/image';
import { globalState } from '../globalState'; // Import the global state

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); // To handle errors
  const [points, setPoints] = useState(globalState.points); // State for points

  // Use the email from global state
  const userEmail = globalState.email; // Accessing email from global state
  const { language } = globalState; // Access the language from global state

  // Avatar images array
  const avatars = [
    '/avatar/1.png',
    '/avatar/2.png',
    '/avatar/3.png',
    '/avatar/4.png',
  ];

  // Function to select a random avatar
  const getRandomAvatar = () => {
    const randomIndex = Math.floor(Math.random() * avatars.length);
    return avatars[randomIndex];
  };

  const fetchUserData = async (email) => {
    try {
      const response = await fetch(`http://localhost:5000/api/profile/${encodeURIComponent(email)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch profile data.');
      }
      const data = await response.json();
      console.log('Fetched user data:', data); // Log the fetched data
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false);
    }
  };

  const postPoints = async (email, points) => {
    try {
      const response = await fetch('http://localhost:5000/api/update-points', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, points }), // Sending email and points
      });

      if (!response.ok) {
        throw new Error('Failed to update points.');
      }

      const result = await response.json();
      console.log('Points updated:', result);
    } catch (error) {
      console.error('Error updating points:', error);
    }
  };

  useEffect(() => {
    if (userEmail) {
      fetchUserData(userEmail);
    }
  }, [userEmail]);

  // Effect to update points whenever the component mounts or the global state changes
  useEffect(() => {
    setPoints(globalState.points);
    postPoints(userEmail, globalState.points); // POST points whenever points change
  }, [globalState.points]); // Add dependency to update points when global points change

  // Max points for full progress (adjust based on your requirements)
  const maxPoints = 50;
  // Calculate progress as a percentage
  const progressWidth = (points / maxPoints) * 100;

  return (
    <div className="flex bg-white min-h-screen p-8">
      <div className="flex-1 bg-white rounded-xl p-8 max-w-[2000px]"> {/* Increase width here */}
        <div className="flex flex-col items-center w-full mt-8">
          <div className="w-full">
            {loading ? (
              <p>{language === 'kn' ? 'ಲೋಡ್ ಆಗುತ್ತಿದೆ...' : 'Loading...'}</p> // Localized loading text
            ) : error ? (
              <p className="text-red-500">{error}</p> // Display error message if any
            ) : userData ? (
              <div className="flex items-center w-full h-[229px] bg-[#c1dec0] rounded-3xl p-9">
                <Image
                  src={userData.profileImage || getRandomAvatar()} // Use the random avatar if no profile image
                  alt="User Image"
                  width={150} // Increased width
                  height={150} // Increased height
                  className="rounded-full mr-12"
                />
                <div className="flex flex-col justify-center">
                  <h2 className="text-5xl font-bold text-black uppercase">{userData.name}</h2>
                  <p className="text-2xl text-black uppercase mt-2">{userData.school}</p>
                </div>
              </div>
            ) : (
              <p>{language === 'kn' ? 'ಯೋಜನೆಯ ಮಾಹಿತಿ ಲಭ್ಯವಿಲ್ಲ.' : 'No user data available.'}</p> // Localized no data message
            )}
          </div>

          <div className="flex flex-col items-start w-full">
            <h3 className="mt-8 text-2xl font-semibold text-black uppercase">
              {language === 'kn' ? 'ಪ್ರಗತಿ:' : 'Progress:'} {/* Localized progress title */}
            </h3>
            <h2 className="mt-8 text-2xl font-semibold text-black uppercase">
              {language === 'kn' ? 'ಅಧ್ಯಯನ ಪ್ರಾರಂಭಿಸಿ' : 'Start Learning'} {/* Localized start learning */}
            </h2>
            <div className="w-full bg-[#bebebe] rounded-[60px] mt-2">
              <div
                style={{ width: `${progressWidth}%`, backgroundColor: 'green' }} // Dynamic width and color
                className="h-[45px] rounded-[60px]"
              />
            </div>
            <h3 className="mt-8 text-2xl font-semibold text-black uppercase">
              {language === 'kn' ? `ಅಂಕಗಳು: ${points}` : `Points: ${points}`} {/* Display real-time points */}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
