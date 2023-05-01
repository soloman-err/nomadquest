// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAostFR8YVrtUf-nJgzlTM8BpWPbrsBNJs",
  authDomain: "nomadquest-err.firebaseapp.com",
  projectId: "nomadquest-err",
  storageBucket: "nomadquest-err.appspot.com",
  messagingSenderId: "61664861429",
  appId: "1:61664861429:web:ec5998320f76eda0e739bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;