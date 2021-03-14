import firebase from "firebase"

var firebaseConfig = {
    apiKey: "AIzaSyBli_nseTJ5_Y2HQmDIsB4Ijpq2I706Xiw",
    authDomain: "bt3103-week-6-1c0b2.firebaseapp.com",
    projectId: "bt3103-week-6-1c0b2",
    storageBucket: "bt3103-week-6-1c0b2.appspot.com",
    messagingSenderId: "22797458810",
    appId: "1:22797458810:web:33de80f70d2a33663d8ac3"
};

firebase.initializeApp(firebaseConfig);
var database = firebase.firestore();
export default database;