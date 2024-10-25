// src/next-i18next.config.js

const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en', // Set the default language
    locales: ['en', 'hi', 'ta', 'te', 'kn', 'ml'], // Supported languages
  },
  localePath: path.resolve('./src/locales'), // Updated path to your locale files
};
