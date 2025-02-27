import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBXeN4X0ZYipN5b6vCZ2A8-ZNC4t2B_U2U",
    authDomain: "kidslove-5845f.firebaseapp.com",
    projectId: "kidslove-5845f",
    storageBucket: "kidslove-5845f.firebasestorage.app",
    messagingSenderId: "94532010177",
    appId: "1:94532010177:web:bf76ca3a578f1029c15440"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
