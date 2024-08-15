// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-3815a.firebaseapp.com",
  projectId: "mern-blog-3815a",
  storageBucket: "mern-blog-3815a.appspot.com",
  messagingSenderId: "608969570189",
  appId: "1:608969570189:web:8f4368759b6521f8c02fc4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);