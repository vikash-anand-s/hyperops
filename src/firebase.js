import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyBg34xC3Bfm8uRkSonvWufRBtroyF57sBo",
    authDomain: "hyperops-2a492.firebaseapp.com",
    projectId: "hyperops-2a492",
    storageBucket: "hyperops-2a492.appspot.com",
    messagingSenderId: "987645380330",
    appId: "1:987645380330:web:0f2a52de369a24b68c3993",
    measurementId: "G-C747QP3YE8"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 