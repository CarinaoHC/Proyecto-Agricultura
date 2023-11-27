import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAeM65BAeLnIbLK1L5DHhAEXsPuP_XsfDM",
    authDomain: "mis-notas-c84c0.firebaseapp.com",
    projectId: "mis-notas-c84c0",
    storageBucket: "mis-notas-c84c0.appspot.com",
    messagingSenderId: "419793897839",
    appId: "1:419793897839:web:bc26cbb40067146eab409a",
    measurementId: "G-TG5R83XD51"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);