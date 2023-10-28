

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFoMfjdgvrxDdsZKvqn_ibze8AuGV2SsU",
  authDomain: "react-proyect-taylorswiftshop.firebaseapp.com",
  projectId: "react-proyect-taylorswiftshop",
  storageBucket: "react-proyect-taylorswiftshop.appspot.com",
  messagingSenderId: "201429637081",
  appId: "1:201429637081:web:21780c4288f9b7a5c32bc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)