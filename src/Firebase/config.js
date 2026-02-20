// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC9GIDXMFoGl3dhdX_xhQH4xQKbXV2htHk",
  authDomain: "pristol-application.firebaseapp.com",
  projectId: "pristol-application",
  storageBucket: "pristol-application.firebasestorage.app",
  messagingSenderId: "676662792137",
  appId: "1:676662792137:web:5a69d572221d2f060b6218",
  measurementId: "G-E7RYREDR8Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };