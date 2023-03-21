// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAosWJNh0pKaHWyq4rkaOT9gOQUlurp7k",
  authDomain: "febproject-fcb5e.firebaseapp.com",
  projectId: "febproject-fcb5e",
  storageBucket: "febproject-fcb5e.appspot.com",
  messagingSenderId: "21935285017",
  appId: "1:21935285017:web:75695743cda119b4c79b88",
  measurementId: "G-GK40Z8LKW2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const Authentication = () => {
  return auth;
};
export { auth };
