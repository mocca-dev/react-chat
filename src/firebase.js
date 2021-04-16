import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAabYeqpM9D1NGnRcDioq27iT6ZEcpPIsI",
  authDomain: "react-chat-c4e5b.firebaseapp.com",
  projectId: "react-chat-c4e5b",
  storageBucket: "react-chat-c4e5b.appspot.com",
  messagingSenderId: "554576645180",
  appId: "1:554576645180:web:58f68cbb152fa4da77c739",
});

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();

export const db = firebase.firestore();

export default app;
