// firebase.js

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC1EkQbvVkgdWQZQ5_-CAzk556B5QcFhZQ",
    authDomain: "earthwise-26656.firebaseapp.com",
    projectId: "earthwise-26656",
    storageBucket: "earthwise-26656.appspot.com",
    messagingSenderId: "191146904481",
    appId: "1:191146904481:web:90ddf783a07c20fb6759e0",
    measurementId: "G-7GK6765VS3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export { auth }; // Export the auth instance for use in your components
