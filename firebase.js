import { getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBE1R58fTNL7ww-nDweecLzZUEWijocWiU",
  authDomain: "easybooking-f819c.firebaseapp.com",
  projectId: "easybooking-f819c",
  storageBucket: "easybooking-f819c.appspot.com",
  messagingSenderId: "36412970843",
  appId: "1:36412970843:web:4ada590c23fbca02256c7e",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore();

export { auth, db };
