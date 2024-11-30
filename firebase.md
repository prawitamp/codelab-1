// npm install firebase


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhEkdzjkImwk2AdrU7xaA8YnhSNf6B_Kc",
  authDomain: "betr-beta-f379f.firebaseapp.com",
  projectId: "betr-beta-f379f",
  storageBucket: "betr-beta-f379f.firebasestorage.app",
  messagingSenderId: "250232768591",
  appId: "1:250232768591:web:a9ece3985feeea3b66c23a",
  measurementId: "G-02FLRXB6JK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);