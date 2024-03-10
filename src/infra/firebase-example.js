import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBn-E...",
  authDomain: "react-1...",
  projectId: "react-13...",
  storageBucket: "reac...",
  messagingSenderId: "36...",
  appId: "1:369..."
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
export const db = getFirestore(app);
