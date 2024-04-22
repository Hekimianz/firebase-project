import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBV87pSCQEenw-dkUFvQFTkQBeWWSDThJE",
  authDomain: "fir-course-8533e.firebaseapp.com",
  projectId: "fir-course-8533e",
  storageBucket: "fir-course-8533e.appspot.com",
  messagingSenderId: "656687860430",
  appId: "1:656687860430:web:47556f2151ec7d082d5e9f",
  measurementId: "G-NRN4DM5Z5K",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const storage = getStorage(app);

export const db = getFirestore(app);
