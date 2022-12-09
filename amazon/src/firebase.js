import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDfQLWl54jr1vq1GlMqx308T5-vNnjz4kU",
  authDomain: "copy-2ef63.firebaseapp.com",
  projectId: "copy-2ef63",
  storageBucket: "copy-2ef63.appspot.com",
  messagingSenderId: "463833356755",
  appId: "1:463833356755:web:53fd7f5e5b7c2a3f5e7726",
  measurementId: "G-7ZGK5DFGZ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
