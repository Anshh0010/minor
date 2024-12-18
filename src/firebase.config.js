// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnX5rM5ui54E0L1CrSnp525jo874KVF-A",
  authDomain: "career-guidance-app-b774a.firebaseapp.com",
  projectId: "career-guidance-app-b774a",
  storageBucket: "career-guidance-app-b774a.firebasestorage.app",
  messagingSenderId: "72799181555",
  appId: "1:72799181555:web:f72f8196195b9439de7586",
  measurementId: "G-KZ9DZJGEBS",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
