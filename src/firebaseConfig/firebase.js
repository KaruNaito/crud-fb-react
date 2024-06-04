// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from '@firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBGuB4bvgJ7MBfSkC2TWq4J2XO3FcmuD4M",
    authDomain: "crud-fire-react-40b00.firebaseapp.com",
    projectId: "crud-fire-react-40b00",
    storageBucket: "crud-fire-react-40b00.appspot.com",
    messagingSenderId: "594339384040",
    appId: "1:594339384040:web:0a69d1d79e8b7f1c59975d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)