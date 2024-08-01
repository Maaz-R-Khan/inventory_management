// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuJqkRvHCpIh3SnY9knORPVl2LsB2beco",
  authDomain: "inventory-management-9a3dd.firebaseapp.com",
  projectId: "inventory-management-9a3dd",
  storageBucket: "inventory-management-9a3dd.appspot.com",
  messagingSenderId: "63490493825",
  appId: "1:63490493825:web:6ca1cea215313188abec80",
  measurementId: "G-JEK4TLCFXS"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 

export {firestore}