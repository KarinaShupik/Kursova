// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-5dea6.firebaseapp.com",
  projectId: "mern-auth-5dea6",
  storageBucket: "mern-auth-5dea6.appspot.com",
  messagingSenderId: "806590133619",
  appId: "1:806590133619:web:653ac521ed8af208d48106"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);