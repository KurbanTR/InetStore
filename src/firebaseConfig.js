// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqfHWbbzugDam5BhtmasxJuCFKu3ZKtHA",
  authDomain: "shop-b02db.firebaseapp.com",
  projectId: "shop-b02db",
  storageBucket: "shop-b02db.appspot.com",
  messagingSenderId: "353233603243",
  appId: "1:353233603243:web:a27c8b7e79633536dd05ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
