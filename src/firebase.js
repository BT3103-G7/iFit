import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBcRZrndKOcim25TxhL_eIsYoC4KOK9bKs",
  authDomain: "ifit-a44ec.firebaseapp.com",
  projectId: "ifit-a44ec",
  storageBucket: "ifit-a44ec.appspot.com",
  messagingSenderId: "375209231966",
  appId: "1:375209231966:web:4b090938321ccf55d2d6cf",
  measurementId: "G-NWHKJGHVJH"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
