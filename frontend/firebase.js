// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "zapeats-e29c6.firebaseapp.com",
  projectId: "zapeats-e29c6",
  storageBucket: "zapeats-e29c6.firebasestorage.app",
  messagingSenderId: "841859318465",
  appId: "1:841859318465:web:2a05f86961927b2922ca40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {app,auth}