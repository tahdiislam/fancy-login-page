// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0GD9J4YjeUiC_rCANIsiOUDnPJ9u9jHk",
  authDomain: "fancy-login-page.firebaseapp.com",
  projectId: "fancy-login-page",
  storageBucket: "fancy-login-page.appspot.com",
  messagingSenderId: "797933613572",
  appId: "1:797933613572:web:2d12dde00848bb328abb51"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;