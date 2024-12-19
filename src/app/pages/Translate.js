import React, { useState, useEffect } from 'react';
import Sidebar from './SideBar'; // Import the Sidebar component
import { globalState } from '../globalState'; // Import the global state

const TranslatePage = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [moveDown, setMoveDown] = useState(false);

  // Function to load Google Translate script
  const loadGoogleTranslate = () => {
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);

      window.googleTranslateElementInit = () => {
        new window.google.translate.TranslateElement(
          {
            pageLanguage: 'en',
            includedLanguages: 'en,hi,kn',
            layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
          },
          'google_translate_element'
        );
      };
    }
  };

  // Function to track translation changes
  const detectLanguageChange = () => {
    const observer = new MutationObserver(() => {
      const googleFrame = document.querySelector('iframe.goog-te-menu-frame');
      if (googleFrame) {
        googleFrame.contentWindow.document.querySelectorAll('.goog-te-menu2-item span.text').forEach((item) => {
          item.addEventListener('click', (e) => {
            setTimeout(() => {
              const langCode = document.querySelector('.goog-te-combo').value;
              console.log('Selected Language:', langCode); // Debug
              globalState.setLanguage(langCode);
              setMoveDown(true);
            }, 1000); // Wait for translation to apply
          });
        });
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  };

  useEffect(() => {
    loadGoogleTranslate();
    detectLanguageChange();
  }, []);

  const handleNext = () => {
    console.log(`Selected Language in Global State: ${globalState.language || 'en'}`);
    setShowSidebar(true);
  };

  return (
    <div
      className={`flex items-center justify-center min-h-screen transition-all duration-500 ${
        moveDown ? 'mt-20' : ''
      }`}
      style={{ backgroundColor: '#286031' }}
    >
      {!showSidebar ? (
        <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6" style={{ color: '#000' }}>
          <h2 className="mb-4 text-center text-2xl font-semibold text-green-700">
            Kindly select the language you wish to study in:
          </h2>

          {/* Google Translate Widget */}
          <div
            id="google_translate_element"
            className="mb-6 mx-auto border border-gray-300 rounded-lg p-3 shadow-sm"
            style={{ maxWidth: '900px', backgroundColor: '#f9f9f9' }}
          ></div>

          <button
            onClick={handleNext}
            className="mt-4 bg-green-700 text-white py-3 px-4 rounded-lg w-full hover:bg-green-800 transition duration-300"
          >
            Next
          </button>
        </div>
      ) : (
        <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
          <Sidebar selectedLanguage={globalState.language || 'en'} />
        </div>
      )}
    </div>
  );
};

export default TranslatePage;
