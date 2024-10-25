// next.config.mjs

import pkg from './src/next-i18next.config.js'; // Import the entire module as pkg
const { i18n } = pkg; // Destructure i18n from the imported package

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  // Other Next.js configurations can go here
};

export default nextConfig;
