// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  // storageBucket: process.env.process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId:
  //   process.env.process.env.REACT_APP_FIREBASE_MESSAGE_IN_SENDER_ID,
  // appId: process.env.process.env.REACT_APP_FIREBASE_APP_ID,

  apiKey: "AIzaSyCdZ3gs1-dZoDb67gkq7zW01pNMBvEhOU8",
  authDomain: "netflix-movie-app.firebaseapp.com",
  projectId: "netflix-movie-app",
  storageBucket: "netflix-movie-app.appspot.com",
  messagingSenderId: "244222767571",
  appId: "1:244222767571:web:da7fcb0eb4229453dfbf26",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
