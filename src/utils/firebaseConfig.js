// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpbfrke-ckzfOAe1JSOwRo873FspIdp3M",
  authDomain: "ecomm-game-react.firebaseapp.com",
  projectId: "ecomm-game-react",
  storageBucket: "ecomm-game-react.appspot.com",
  messagingSenderId: "651771250931",
  appId: "1:651771250931:web:189bb60a6bf9cc0e56cf86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);