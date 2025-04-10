import {initializeApp} from "firebase/app"
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
    apiKey: "AIzaSyBX3Zm8EQo0m0bGwBFzBXoxgPZtHGETjKs",
    authDomain: "react-ecommerce-39a76.firebaseapp.com",
    projectId: "react-ecommerce-39a76",
    storageBucket: "react-ecommerce-39a76.firebasestorage.app",
    messagingSenderId: "63491534175",
    appId: "1:63491534175:web:6a3b1c318b3632822a5aea"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

