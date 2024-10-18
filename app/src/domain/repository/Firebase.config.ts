// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4qtFOEn8eh3zxqaV1Jp0NA47uFONfdJk",
  authDomain: "carta-digital-restaurant-f7b3e.firebaseapp.com",
  projectId: "carta-digital-restaurant-f7b3e",
  storageBucket: "carta-digital-restaurant-f7b3e.appspot.com",
  messagingSenderId: "662554412149",
  appId: "1:662554412149:web:ae6d84b60bde88ab3e243c"
};

// Initialize Firebase
export const app = getFirestore(initializeApp(firebaseConfig));
export const storageApp= getStorage(initializeApp(firebaseConfig));