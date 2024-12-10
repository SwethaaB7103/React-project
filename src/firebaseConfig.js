// src/firebaseConfig.js

// Import the Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getAuth } from "firebase/auth"; // Authentication

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBStM-mogs8AugiYgJl6DEORNFpcZT055g",
  authDomain: "dropyoutaxi-2025.firebaseapp.com",
  projectId: "dropyoutaxi-2025",
  storageBucket: "dropyoutaxi-2025.appspot.com",
  messagingSenderId: "812975571977",
  appId: "1:812975571977:web:433e633df4896b9fffe4d8",
  measurementId: "G-67RJEB93J3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: Use if analytics is needed
const db = getFirestore(app); // Firestore instance
const auth = getAuth(app); // Authentication instance

export { app, analytics, db, auth };
