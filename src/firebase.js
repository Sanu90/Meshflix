/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1S-IvTiY-dob51KvJ8p8f4ZbH36l5Sc8",
  authDomain: "netflix-clone-8a0c8.firebaseapp.com",
  projectId: "netflix-clone-8a0c8",
  storageBucket: "netflix-clone-8a0c8.appspot.com",
  messagingSenderId: "244057281450",
  appId: "1:244057281450:web:14ec8877bd2e7f2324d1d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

const signUp = async (name, email, pass) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, pass);
    const user = res.user;
    await addDoc(collection(db, "user"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (error) {
    console.log("Error in firebase signup", error);
    toast.error("Email already registered");
  }
};

const login = async (email, pass) => {
  try {
    await signInWithEmailAndPassword(auth, email, pass);
  } catch (error) {
    console.log("Error in firebase login", error);
    //toast.error(error.code);
    toast.error("Invalid username/password");
  }
};

const logOut = async () => {
  signOut(auth);
};

export { auth, db, signUp, login, logOut };
