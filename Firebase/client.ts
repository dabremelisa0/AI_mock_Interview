import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//Required for connection with firebase


const firebaseConfig = {
  apiKey: "AIzaSyAM44El0F267EMVzOdc90m6vspsxGyvTkE",
  authDomain: "prepwise-ead60.firebaseapp.com",
  projectId: "prepwise-ead60",
  storageBucket: "prepwise-ead60.firebasestorage.app",
  messagingSenderId: "796780580139",
  appId: "1:796780580139:web:f44ed59822eae691aa096e",
  measurementId: "G-NV728DSSJP"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);