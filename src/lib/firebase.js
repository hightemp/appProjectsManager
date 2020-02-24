
console.log('firebase.js');

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyABl4vmQeBnGB9k2_dLr0UstGbZKajwWyw",
  authDomain: "appprojectsmanager.firebaseapp.com",
  databaseURL: "https://appprojectsmanager.firebaseio.com",
  projectId: "appprojectsmanager",
  storageBucket: "appprojectsmanager.appspot.com",
  messagingSenderId: "725505648918",
  appId: "1:725505648918:web:7a68dfa7ffe15505058837",
  measurementId: "G-EYDYSETG9Z"
};

console.log('firebase', firebase);

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
