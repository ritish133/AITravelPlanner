// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtAuwpMesqj8xlY1kL-0z-j5kudx9FUZQ",
  authDomain: "ai-travel-planner-f60f1.firebaseapp.com",
  projectId: "ai-travel-planner-f60f1",
  storageBucket: "ai-travel-planner-f60f1.appspot.com",
  messagingSenderId: "1050351634045",
  appId: "1:1050351634045:web:64e0044e597f4969dd9314",
  measurementId: "G-2Z291BET74"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);