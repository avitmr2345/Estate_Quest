import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-quest-fe345.firebaseapp.com",
  projectId: "estate-quest-fe345",
  storageBucket: "estate-quest-fe345.appspot.com",
  messagingSenderId: "240136669655",
  appId: "1:240136669655:web:bac57040ae6acdd59de392",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
