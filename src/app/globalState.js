// globalState.js
export const globalState = {
  email: '', // Global variable to store the email
  points: 0, // Global variable to store points
  language: 'en', // Default language is set to 'en'
  
  incrementPoints: () => {
    globalState.points += 1;
  },
  
  setLanguage: (lang) => {
    globalState.language = lang;
  },
};
