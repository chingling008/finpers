import { initializeApp } from "firebase/app";

import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBHN6y4_1GPdC3BqSKItm8djOahV7sr6Qs",
  authDomain: "money-mangement-58tlyi.firebaseapp.com",
  projectId: "money-mangement-58tlyi",
  storageBucket: "money-mangement-58tlyi.firebasestorage.app",//Does not work cause I need to pay it
  messagingSenderId: "849757694569",
  appId: "1:849757694569:web:b1e85074a0795b0bf010f8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { db, auth, provider, doc, setDoc };
