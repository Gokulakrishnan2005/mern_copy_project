// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-1b297.firebaseapp.com",
  projectId: "mern-estate-1b297",
  storageBucket: "mern-estate-1b297.appspot.com",
  messagingSenderId: "1047709383656",
  appId: "1:1047709383656:web:40f51404a1d034192cc25d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);