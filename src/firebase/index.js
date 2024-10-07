// Import the functions you need from the SDKs you need
import firebaseConfig from "./config";
import { initializeApp } from "firebase/app";

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;