import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA3s_MG1P-2FnZjEMv_xgfXfv5UDdIFrCE",
  authDomain: "clone2434.firebaseapp.com",
  projectId: "clone2434",
  storageBucket: "clone2434.appspot.com",
  messagingSenderId: "985266586602",
  appId: "1:985266586602:web:40fed0f985f4621cd66893",
  measurementId: "G-RPZFPKXYRY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
