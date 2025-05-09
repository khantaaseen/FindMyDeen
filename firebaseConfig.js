// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8H_uJvUtV1Cl2J3y41_oCEnEWNboOFtQ",
  authDomain: "findmydeen.firebaseapp.com",
  projectId: "findmydeen",
  storageBucket: "findmydeen.appspot.com",
  messagingSenderId: "295921601214",
  appId: "1:295921601214:web:3b93429716ac0eb9d42cef",
  measurementId: "G-89HXWDT1RL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);