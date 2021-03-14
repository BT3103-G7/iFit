import firebase from "firebase"

<<<<<<< HEAD
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
=======
var firebaseConfig = {
    apiKey: "AIzaSyBli_nseTJ5_Y2HQmDIsB4Ijpq2I706Xiw",
    authDomain: "bt3103-week-6-1c0b2.firebaseapp.com",
    projectId: "bt3103-week-6-1c0b2",
    storageBucket: "bt3103-week-6-1c0b2.appspot.com",
    messagingSenderId: "22797458810",
    appId: "1:22797458810:web:33de80f70d2a33663d8ac3"
};

firebase.initializeApp(firebaseConfig);
>>>>>>> 188743d... Add src files and .gitignore file
var database = firebase.firestore();
export default database;