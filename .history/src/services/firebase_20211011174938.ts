// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getDatabase } from 'firebase/database';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkQH2zcp1ywJSMm6UjkIXYDR0RqBSUnQc",
    authDomain: "let-me-ask-c2059.firebaseapp.com",
    databaseURL: "https://let-me-ask-c2059-default-rtdb.firebaseio.com",
    projectId: "let-me-ask-c2059",
    storageBucket: "let-me-ask-c2059.appspot.com",
    messagingSenderId: "602523518175",
    appId: "1:602523518175:web:5248752ec261f05c1d156a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
const database = getDatabase(app)


export { app, auth, database, GoogleAuthProvider, signInWithPopup }