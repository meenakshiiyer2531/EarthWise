import React, { useState, useRef, useEffect } from 'react';
import { globalState } from '../globalState'; // Import global state

const NotificationSidebar = () => {
  const [showNotifications, setShowNotifications] = useState(true); // Automatically show notifications
  const notificationRef = useRef();

  // Close notifications when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationRef.current && !notificationRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Access the language from global state
  const { language } = globalState;

  return (
    <div className="relative">
      {/* Notification Sidebar */}
      {showNotifications && (
        <div
          ref={notificationRef}
          className="fixed top-16 right-4 w-96 bg-[#EBEBEB] text-black rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out z-50"
        >
          <h2 className="text-lg font-bold mb-2">
            {language === 'kn' ? 'ಸೂಚನೆಗಳು' : 'Notifications'} {/* Localized title */}
          </h2>
          <div className="max-h-72 overflow-y-auto">
            {/* Notification Items */}
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '🔔 ಲ್ಯಾಬ್ ಸಹಾಯಕನಿಂದ ನಿಮಗೆ ಹೊಸ ಸಂದೇಶವಿದೆ.' : '🔔 You have a new message from the lab assistant.'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '📅 ಜ್ಞಾಪನೆ: ನಿಮ್ಮ ಪ್ರಯೋಗ ವರದಿ ನಾಳೆ ಸಲ್ಲಿಸಲಾಗಬೇಕು.' : '📅 Reminder: Your experiment report is due tomorrow.'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '🌟 ಮುಂದಿನ ಪ್ರಯೋಗಗಳಿಗಾಗಿ ನಮ್ಮ ಹೊಸ ಸಂಪನ್ಮೂಲಗಳನ್ನು ಪರಿಶೀಲಿಸಿ!' : '🌟 Check out our new resources for the upcoming experiments!'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '📝 ನಿಮ್ಮ ಹಳೆಯ ಪ್ರಯೋಗದ ಫಲಿತಾಂಶಗಳು ಪರಿಶೀಲನೆಗಾಗಿ ಸಿದ್ಧವಾಗಿದೆ.' : '📝 Your last experiment results are ready for review.'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '📈 ಪ್ರಯೋಗದ ಡೇಟಾಗೆ ಹೊಸ ದಿಕ್ಕುಗಳನ್ನು ಸೇರಿಸಲಾಗಿದೆ.' : '📈 New insights have been added to the experiment data.'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '⚠️ ಪ್ರಕಟಣೆ: ಲ್ಯಾಬ್ ಉಪಕರಣದ ನಿರ್ವಹಣೆ ಮುಂದಿನ ವಾರಕ್ಕೆ ನಿರ್ಧಾರವಾಗಿದೆ.' : '⚠️ Update: Lab equipment maintenance is scheduled for next week.'}</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>{language === 'kn' ? '🔗 ಹೊಸ ಸಹಯೋಗ ಅವಕಾಶಗಳು ಲಭ್ಯವಿದೆ, ಪರಿಶೀಲಿಸಿ!' : '🔗 New collaboration opportunities available, check them out!'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSidebar;
