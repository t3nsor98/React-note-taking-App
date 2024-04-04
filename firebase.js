// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZR_rDCZSV0aL5zLn0pzbnj-_PUmiZMKw",
    authDomain: "react-notes-c3884.firebaseapp.com",
    projectId: "react-notes-c3884",
    storageBucket: "react-notes-c3884.appspot.com",
    messagingSenderId: "326212358241",
    appId: "1:326212358241:web:fdabc7c64fc40b9804da20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);
export const notesCollection = collection(db, "notes");
