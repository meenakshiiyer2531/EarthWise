import React, { useState, useRef, useEffect } from 'react';

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

  return (
    <div className="relative">
      {/* Notification Sidebar */}
      {showNotifications && (
        <div
          ref={notificationRef}
          className="fixed top-16 right-4 w-96 bg-[#EBEBEB] text-black rounded-lg shadow-lg p-4 transition-all duration-300 ease-in-out z-50"
        >
          <h2 className="text-lg font-bold mb-2">Notifications</h2>
          <div className="max-h-72 overflow-y-auto">
            {/* Notification Items */}
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>🔔 You have a new message from the lab assistant.</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>📅 Reminder: Your experiment report is due tomorrow.</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>🌟 Check out our new resources for the upcoming experiments!</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>📝 Your last experiment results are ready for review.</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>📈 New insights have been added to the experiment data.</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>⚠️ Update: Lab equipment maintenance is scheduled for next week.</p>
            </div>
            <div className="mb-2 p-2 bg-[#C0BBBB] rounded-lg">
              <p>🔗 New collaboration opportunities available, check them out!</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NotificationSidebar;
