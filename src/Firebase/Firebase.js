
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyATs0OZAKqFpAwhS-9PURNO0aI0_d3jjB8",
  authDomain: "meshshop-45d09.firebaseapp.com",
  projectId: "meshshop-45d09",
  storageBucket: "meshshop-45d09.appspot.com",
  messagingSenderId: "237538621389",
  appId: "1:237538621389:web:d319b836f10bf927267684"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
export{app,auth,db}