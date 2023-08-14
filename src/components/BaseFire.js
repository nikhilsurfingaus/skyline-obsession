// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBXDlTrwEt1ZDQy5UcemYPRe-cTRAvIC-0",
    authDomain: "skyline-8f44c.firebaseapp.com",
    projectId: "skyline-8f44c",
    storageBucket: "skyline-8f44c.appspot.com",
    messagingSenderId: "860868090798",
    appId: "1:860868090798:web:2e27dd5f699f0b431e463f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();


//DB
const db = getFirestore(app)

export { auth, provider, db }