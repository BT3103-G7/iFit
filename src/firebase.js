import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBIGrd-UhDZMJPrmvx_q0QYjBhBA5bz0ok",
    authDomain: "bt3103-test-project-750e2.firebaseapp.com",
    projectId: "bt3103-test-project-750e2",
    storageBucket: "bt3103-test-project-750e2.appspot.com",
    messagingSenderId: "424721779966",
    appId: "1:424721779966:web:0f51a977b94f58c6f269af",
    measurementId: "G-7DDRBMTV77"
};
   
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;
