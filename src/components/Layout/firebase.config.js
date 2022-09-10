// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCRvIusONCyefbNQvIlVB05ZhKeQgUD3ns",
  authDomain: "room-rental-b473c.firebaseapp.com",
  projectId: "room-rental-b473c",
  storageBucket: "room-rental-b473c.appspot.com",
  messagingSenderId: "166031817126",
  appId: "1:166031817126:web:e865bf669969d485df7767",
  measurementId: "G-STP5B1PZXK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth =getAuth(app);