// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJn4Nk9Dkd8XApSl63HULR9kZSe-lXRvg",
  authDomain: "myecom-63f75.firebaseapp.com",
  projectId: "myecom-63f75",
  storageBucket: "myecom-63f75.firebasestorage.app",
  messagingSenderId: "1053554117596",
  appId: "1:1053554117596:web:967771600893dd1c591d19"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export{fireDB, auth}