import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyBKuS_JATA1P7ivIB_nO1f5Q4Zp6tNogZ8",
    authDomain: "benshop-88a13.firebaseapp.com",
    projectId: "benshop-88a13",
    storageBucket: "benshop-88a13.appspot.com",
    messagingSenderId: "288786635195",
    appId: "1:288786635195:web:485afad0012a162c0bcc9e"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;