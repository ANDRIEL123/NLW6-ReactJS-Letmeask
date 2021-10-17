// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: "let-me-ask-c2059",
    storageBucket: "let-me-ask-c2059.appspot.com",
    messagingSenderId: "602523518175",
    appId: "1:602523518175:web:5248752ec261f05c1d156a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);