// firebase.js
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Add other Firebase services you need

const firebaseConfig = {
  // Your Firebase project's configuration object
    apiKey: "AIzaSyDR6M7TEkNbl885mS2_WGt9WPQ1E9tfxSc",
    authDomain: "sparkbank-74023.firebaseapp.com",
    databaseURL: "https://sparkbank-74023-default-rtdb.firebaseio.com/",
    projectId: "sparkbank-74023",
    storageBucket: "sparkbank-74023.appspot.com",
    messagingSenderId: "185782498434",
    appId: "1:185782498434:web:c796a5e8b937c2075af09b"
};
firebase.initializeApp(firebaseConfig);
export default firebase;