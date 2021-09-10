//hna el import da gbto mn stak over flow new apudated 
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4KdXuycP98hHgAY6s0DToSg7_UFtw6C8",
  authDomain: "linkedin-b442c.firebaseapp.com",
  projectId: "linkedin-b442c",
  storageBucket: "linkedin-b442c.appspot.com",
  messagingSenderId: "742845739096",
  appId: "1:742845739096:web:ad3c9ff761e3b4c1129a2d",
  measurementId: "G-EMSZWGZLGH",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };
