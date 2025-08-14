// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAU-v7RBMw3-jqxtYKxKHIOhg18CycTLuE",
  authDomain: "motogo-3046d.firebaseapp.com",
  projectId: "motogo-3046d",
  storageBucket: "motogo-3046d.firebasestorage.app",
  messagingSenderId: "12770325503",
  appId: "1:12770325503:web:7037f10bd93b8f4f4eadca",
  measurementId: "G-SY2CQY0DMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);