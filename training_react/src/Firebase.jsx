// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfPEYmTaRrczXAETWh5OF1-cSOldtx6Zk",
  authDomain: "react-test-a72e5.firebaseapp.com",
  projectId: "react-test-a72e5",
  storageBucket: "react-test-a72e5.appspot.com",
  messagingSenderId: "1027464120666",
  appId: "1:1027464120666:web:8853e4027e7571d172cb63",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };
