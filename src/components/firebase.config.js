// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPG8ilfpfdcsEx0t_-CFUE3784wZJHPNw",
  authDomain: "client-ass-side.firebaseapp.com",
  projectId: "client-ass-side",
  storageBucket: "client-ass-side.appspot.com",
  messagingSenderId: "576909477637",
  appId: "1:576909477637:web:56a3e8faee52824718596c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth 