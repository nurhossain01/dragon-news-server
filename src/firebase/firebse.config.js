// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUdoDUavGkcGL0V-eT9_j9PtBuL2Mmru4",
  authDomain: "dragon-news-client-d27d2.firebaseapp.com",
  projectId: "dragon-news-client-d27d2",
  storageBucket: "dragon-news-client-d27d2.appspot.com",
  messagingSenderId: "170125010577",
  appId: "1:170125010577:web:3585d5225a600cf9e88130"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;