// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6QgzeB19dBvephlYQBAsxQ6ik5jQBVdc",
  authDomain: "ema-john-simple-e7b9f.firebaseapp.com",
  projectId: "ema-john-simple-e7b9f",
  storageBucket: "ema-john-simple-e7b9f.appspot.com",
  messagingSenderId: "375086036313",
  appId: "1:375086036313:web:3859e9acbe749904e98848"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;