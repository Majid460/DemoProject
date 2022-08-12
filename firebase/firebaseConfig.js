// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,updateProfile} from "firebase/auth";
import {getDatabase,ref,set} from "firebase/database"
const firebaseConfig = {
  apiKey: "AIzaSyBOUIdIbtZ1eK-J-3EayrzLkFqEGQ3JHY0",
  authDomain: "track-health-822b4.firebaseapp.com",
  projectId: "track-health-822b4",
  storageBucket: "track-health-822b4.appspot.com",
  messagingSenderId: "1091293063716",
  appId: "1:1091293063716:web:afbef64b15b791e338c6b1",
  measurementId: "G-6W9CY0V6HR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const database=getDatabase(app);