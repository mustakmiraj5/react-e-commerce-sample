// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA2cS1_MEEmD9C5Om6uJsPSpifaspZXar0",
    authDomain: "ecommerce-site-demo-b16d1.firebaseapp.com",
    projectId: "ecommerce-site-demo-b16d1",
    storageBucket: "ecommerce-site-demo-b16d1.appspot.com",
    messagingSenderId: "100521178429",
    appId: "1:100521178429:web:a3a94f919461880cd38154"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app