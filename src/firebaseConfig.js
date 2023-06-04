// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDR6M7TEkNbl885mS2_WGt9WPQ1E9tfxSc",
    authDomain: "sparkbank-74023.firebaseapp.com",
    databaseURL: "https://sparkbank-74023-default-rtdb.firebaseio.com/",
    projectId: "sparkbank-74023",
    storageBucket: "sparkbank-74023.appspot.com",
    messagingSenderId: "185782498434",
    appId: "1:185782498434:web:c796a5e8b937c2075af09b"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);