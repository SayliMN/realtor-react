// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7oytNVvxROFBVFmDm0B7FrRH_KiP2aYU",
  authDomain: "realtor-react-6bd04.firebaseapp.com",
  projectId: "realtor-react-6bd04",
  storageBucket: "realtor-react-6bd04.appspot.com",
  messagingSenderId: "818778211457",
  appId: "1:818778211457:web:92022ff05ef8640c03f980"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()