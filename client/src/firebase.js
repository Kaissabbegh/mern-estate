// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-96afa.firebaseapp.com",
  projectId: "mern-estate-96afa",
  storageBucket: "mern-estate-96afa.appspot.com",
  messagingSenderId: "225963058099",
  appId: "1:225963058099:web:0f82536e5ed60c43d861c6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);