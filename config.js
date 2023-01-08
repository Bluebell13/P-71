import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCU2eEJHBFR_4teu_uxX56zLYaYbmpX9-k",
    authDomain: "project-71-aa323.firebaseapp.com",
    projectId: "project-71-aa323",
    storageBucket: "project-71-aa323.appspot.com",
    messagingSenderId: "519482056304",
    appId: "1:519482056304:web:5b29d369d631006aea9eb5",
    measurementId: "G-796GHZ4024"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
