// Import the functions you need from the SDKs you need
import { initializeApp , firebase , firestore } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwrxfu6w2EL9Ss2FedcPbsFIUc2G1w5QA",
  authDomain: "ecom-5a56c.firebaseapp.com",
  projectId: "ecom-5a56c",
  storageBucket: "ecom-5a56c.appspot.com",
  messagingSenderId: "7014556838",
  appId: "1:7014556838:web:f2fcf8dfdbb9cc1d680067"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fs = firebase.firestore();
const storage = firebase.storage();

export{app, fs, storage};