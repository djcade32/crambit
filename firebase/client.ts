// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "crambit.firebaseapp.com",
  projectId: "crambit",
  storageBucket: "crambit.firebasestorage.app",
  messagingSenderId: "378726825748",
  appId: "1:378726825748:web:4a9d5ea58cc3d99cad8c01",
  measurementId: "G-04E798XJMR"

};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth(app);
export const db = getFirestore(app);


