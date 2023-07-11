// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// Import the functions you need from the SDKs you need
const firebaseConfig = {
  apiKey: "AIzaSyCt4VLVOA3IH9eyb-XPpE_jOWhX2dghnVo",
  authDomain: "first-743ed.firebaseapp.com",
  databaseURL: "https://first-743ed-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "first-743ed",
  storageBucket: "first-743ed.appspot.com",
  messagingSenderId: "743735224003",
  appId: "1:743735224003:web:308c706b406aaf203ee476",
  measurementId: "G-24DE5LEMP8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app);