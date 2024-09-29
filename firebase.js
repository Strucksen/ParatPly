// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; // Import the database function

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFT5gflpAgvymgycPtcZ7fcxS7iIDu1pM",
  authDomain: "paraptply.firebaseapp.com",
  databaseURL: "https://paraptply-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "paraptply",
  storageBucket: "paraptply.appspot.com",
  messagingSenderId: "1090461775922",
  appId: "1:1090461775922:web:2a5858d5b467282c9be42b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and export it
const database = getDatabase(app);

export { database };
