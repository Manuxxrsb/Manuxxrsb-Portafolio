// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMWediwjjLXPT4XO5_pPZzUcGpIXTjA0E",
  authDomain: "manuxxrsb-portafolio.firebaseapp.com",
  projectId: "manuxxrsb-portafolio",
  storageBucket: "manuxxrsb-portafolio.firebasestorage.app",
  messagingSenderId: "677779957025",
  appId: "1:677779957025:web:3a49dd3055c52d4a798a60",
  measurementId: "G-K58L5MECXR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
