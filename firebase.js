// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD_LtyLrfBhFB-DoPpWsFVDZqqf8nR9N_k",
  authDomain: "flashcardaisaas.firebaseapp.com",
  projectId: "flashcardaisaas",
  storageBucket: "flashcardaisaas.appspot.com",
  messagingSenderId: "827320099055",
  appId: "1:827320099055:web:10ebec1734ecfef484fb1a",
  measurementId: "G-1M6P4S7K29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);